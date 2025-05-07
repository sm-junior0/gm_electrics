import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useVirtualizer } from '@tanstack/react-virtual';

const Gallery = ({ mediaItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [columns, setColumns] = useState(3);
  const parentRef = useRef(null);

  // Responsive column calculation
  useEffect(() => {
    const calculateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return 3;
    };

    const handleResize = () => {
      setColumns(calculateColumns());
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Virtualization setup with dynamic columns
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(mediaItems.length / columns),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 5,
  });

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="gallery-container">
      {/* Grid Layout with Virtualization */}
      <div 
        ref={parentRef} 
        className="h-[calc(100vh-12rem)] sm:h-[calc(100vh-14rem)] md:h-[calc(100vh-16rem)] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const startIndex = virtualRow.index * columns;
            const rowItems = mediaItems.slice(startIndex, startIndex + columns);

            return (
              <div
                key={virtualRow.index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className={`grid gap-4 p-4 ${
                  columns === 1 ? 'grid-cols-1' :
                  columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {rowItems.map((item, index) => {
                  const itemIndex = startIndex + index;
                  return (
                    <motion.div
                      key={itemIndex}
                      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer aspect-video group"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedItem(itemIndex)}
                    >
                      {!loadedImages[itemIndex] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                      )}
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onLoad={() => handleImageLoad(itemIndex)}
                          style={{ opacity: loadedImages[itemIndex] ? 1 : 0 }}
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <img
                            src={item.thumbnail || item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            onLoad={() => handleImageLoad(itemIndex)}
                            style={{ opacity: loadedImages[itemIndex] ? 1 : 0 }}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                            <Play className="text-white w-8 h-8 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              title="close"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-yellow-400 transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <div className="relative w-full h-full flex items-center">
              <button
                title="previous"
                className="absolute left-2 sm:left-4 text-white hover:text-yellow-400 z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(
                    (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
                  );
                }}
              >
                <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
              </button>

              <motion.div
                className="w-full h-full flex items-center justify-center p-2 sm:p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mediaItems[selectedItem].type === "image" ? (
                  <img
                    src={mediaItems[selectedItem].src}
                    alt={mediaItems[selectedItem].alt}
                    className="max-h-[calc(100vh-8rem)] max-w-full object-contain rounded-lg"
                    loading="eager"
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    className="max-h-[calc(100vh-8rem)] max-w-full rounded-lg"
                    src={mediaItems[selectedItem].src}
                    preload="auto"
                  />
                )}
              </motion.div>

              <button
                title="next"
                className="absolute right-2 sm:right-4 text-white hover:text-yellow-400 z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem((prev) => (prev + 1) % mediaItems.length);
                }}
              >
                <ChevronRight size={32} className="sm:w-12 sm:h-12" />
              </button>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center text-white text-sm sm:text-base px-4">
              {selectedItem + 1} of {mediaItems.length} -{" "}
              {mediaItems[selectedItem]?.alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
