"use client";
import Gallery from "../components/Gallery";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { lazy, Suspense, useState, useEffect } from "react";

// Dynamic imports for images
const imageImports = {
  1: () => import("../assets/images/images/1.png"),
  2: () => import("../assets/images/images/2.png"),
  3: () => import("../assets/images/images/3.png"),
  4: () => import("../assets/images/images/4.png"),
  5: () => import("../assets/images/images/5.png"),
  6: () => import("../assets/images/images/6.png"),
  7: () => import("../assets/images/images/7.png"),
  8: () => import("../assets/images/images/8.png"),
  9: () => import("../assets/images/images/9.png"),
  10: () => import("../assets/images/images/10.png"),
  11: () => import("../assets/images/images/11.png"),
  12: () => import("../assets/images/images/12.png"),
  13: () => import("../assets/images/images/13.png"),
  14: () => import("../assets/images/images/14.png"),
  15: () => import("../assets/images/images/15.png"),
  16: () => import("../assets/images/images/16.png"),
  17: () => import("../assets/images/images/17.png"),
  18: () => import("../assets/images/images/18.png"),
  19: () => import("../assets/images/images/19.jpg"),
  20: () => import("../assets/images/images/20.jpg"),
  21: () => import("../assets/images/images/21.jpg"),
  22: () => import("../assets/images/images/22.jpg"),
  23: () => import("../assets/images/images/23.jpg"),
  24: () => import("../assets/images/images/24.png"),
  25: () => import("../assets/images/images/25.png"),
  26: () => import("../assets/images/images/26.png"),
  27: () => import("../assets/images/images/27.png"),
  28: () => import("../assets/images/images/28.png"),
  29: () => import("../assets/images/images/29.png"),
  30: () => import("../assets/images/images/30.png"),
  31: () => import("../assets/images/images/31.png"),
  32: () => import("../assets/images/images/32.png"),
  33: () => import("../assets/images/images/33.png"),
  34: () => import("../assets/images/images/34.png"),
  35: () => import("../assets/images/images/35.png"),
  36: () => import("../assets/images/images/36.png"),
  37: () => import("../assets/images/images/37.png"),
  38: () => import("../assets/images/images/38.png"),
  39: () => import("../assets/images/images/39.png"),
  40: () => import("../assets/images/images/40.png"),
  41: () => import("../assets/images/images/41.png"),
  42: () => import("../assets/images/images/42.png"),
  43: () => import("../assets/images/images/43.png"),
  44: () => import("../assets/images/images/44.png"),
  45: () => import("../assets/images/images/45.png"),
  46: () => import("../assets/images/images/46.png"),
  47: () => import("../assets/images/images/47.png"),
  48: () => import("../assets/images/images/48.png"),
  49: () => import("../assets/images/images/49.png"),
  50: () => import("../assets/images/images/50.jpg"),
  51: () => import("../assets/images/images/51.jpg"),
  52: () => import("../assets/images/images/52.jpg"),
  53: () => import("../assets/images/images/53.jpg"),
};

const GalleryPage = () => {
  const navigate = useNavigate();
  const [mediaItems, setMediaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const items = await Promise.all(
        Object.entries(imageImports).map(async ([index, importFn]) => {
          const module = await importFn();
          return {
            type: "image",
            src: module.default,
            alt: "Custom lighting design",
            category: "residential",
          };
        })
      );
      setMediaItems(items);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="gap-2 border-2 border-gm-darkblue text-gm-darkblue hover:bg-gm-darkblue hover:text-white transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            Back to Home
          </Button>
        </div>

        {/* Colorful title with responsive text */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-gm-darkblue via-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Our Projects Gallery
          </h1>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-gm-darkblue to-blue-500 rounded-full"></div>
        </div>

        {/* Responsive gallery container */}
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6 border border-gray-100">
          {isLoading ? (
            <div className="flex items-center justify-center h-48 sm:h-64">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-gm-darkblue"></div>
            </div>
          ) : (
            <Gallery mediaItems={mediaItems} />
          )}
        </div>

        {/* Mobile-friendly footer */}
        {isMobile && (
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Swipe to navigate through images</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
