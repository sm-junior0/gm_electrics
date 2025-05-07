import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const Gallery = ({ mediaItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="gallery-container">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer aspect-video"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedItem(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={item.thumbnail || item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="text-white w-12 h-12" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              title="close"
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
            >
              <X size={32} />
            </button>

            <div className="relative max-w-6xl w-full h-full flex items-center">
              <button
                title="close"
                className="absolute left-4 text-white hover:text-yellow-400 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(
                    (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
                  );
                }}
              >
                <ChevronLeft size={48} />
              </button>

              <motion.div
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mediaItems[selectedItem].type === "image" ? (
                  <img
                    src={mediaItems[selectedItem].src}
                    alt={mediaItems[selectedItem].alt}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    className="max-h-full max-w-full"
                    src={mediaItems[selectedItem].src}
                  />
                )}
              </motion.div>

              <button
                title="close"
                className="absolute right-4 text-white hover:text-yellow-400 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem((prev) => (prev + 1) % mediaItems.length);
                }}
              >
                <ChevronRight size={48} />
              </button>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
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
