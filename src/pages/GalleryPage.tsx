"use client"
import Gallery from "../components/Gallery"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// Image imports
import image1 from "../assets/images/images/1.png"
import image2 from "../assets/images/images/2.png"
import image3 from "../assets/images/images/3.png"
import image4 from "../assets/images/images/4.png"
import image5 from "../assets/images/images/5.png"
import image6 from "../assets/images/images/6.png"
import image7 from "../assets/images/images/7.png"
import image8 from "../assets/images/images/8.png"
import image9 from "../assets/images/images/9.png"
import image10 from "../assets/images/images/10.png"
import image11 from "../assets/images/images/11.png"
import image12 from "../assets/images/images/12.png"
import image13 from "../assets/images/images/13.png"
import image14 from "../assets/images/images/14.png"
import image15 from "../assets/images/images/15.png"
import image16 from "../assets/images/images/16.png"
import image17 from "../assets/images/images/17.png"
import image18 from "../assets/images/images/18.png"
import image19 from "../assets/images/images/19.jpg"
import image20 from "../assets/images/images/20.jpg"
import image21 from "../assets/images/images/21.jpg"
import image22 from "../assets/images/images/22.jpg"
import image23 from "../assets/images/images/23.jpg"
import image24 from "../assets/images/images/24.png"
import image25 from "../assets/images/images/25.png"
import image26 from "../assets/images/images/26.png"
import image27 from "../assets/images/images/27.png"
import image28 from "../assets/images/images/28.png"
import image29 from "../assets/images/images/29.png"
import image30 from "../assets/images/images/30.png"
import image31 from "../assets/images/images/31.png"
import image32 from "../assets/images/images/32.png"
import image33 from "../assets/images/images/33.png"
import image34 from "../assets/images/images/34.png"
import image35 from "../assets/images/images/35.png"
import image36 from "../assets/images/images/36.png"
import image37 from "../assets/images/images/37.png"
import image38 from "../assets/images/images/38.png"
import image39 from "../assets/images/images/39.png"
import image40 from "../assets/images/images/40.png"
import image41 from "../assets/images/images/41.png"
import image42 from "../assets/images/images/42.png"
import image43 from "../assets/images/images/43.png"
import image44 from "../assets/images/images/44.png"
import image45 from "../assets/images/images/45.png"
import image46 from "../assets/images/images/46.png"
import image47 from "../assets/images/images/47.png"
import image48 from "../assets/images/images/48.png"
import image49 from "../assets/images/images/49.png"
import image50 from "../assets/images/images/50.jpg"
import image51 from "../assets/images/images/51.jpg"
import image52 from "../assets/images/images/52.jpg"
import image53 from "../assets/images/images/53.jpg"


const GalleryPage = () => {
  const navigate = useNavigate()
  const mediaItems = [
    {
      type: "image",
      src: image1,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image2,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image3,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image4,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image5,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image6,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image7,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image8,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image9,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image10,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image11,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image12,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image13,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image14,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image15,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image16,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image17,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image18,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image19,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image20,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image21,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image22,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image23,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image23,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image24,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image25,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image26,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image27,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image28,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image29,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image30,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image31,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image32,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image33,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image34,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image35,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image36,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image37,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image38,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image39,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image40,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image41,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image42,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image43,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image44,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image45,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image46,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image47,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image48,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image49,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image50,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image51,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image52,
      alt: "Custom lighting design",
      category: "residential",
    },
    {
      type: "image",
      src: image53,
      alt: "Custom lighting design",
      category: "residential",
    }
  ]

  return (
    <section className="pt-24 pb-12 px-4 container mx-auto">
      <div className="mb-8">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="gap-2 border-2 border-gm-darkblue text-gm-darkblue hover:bg-gm-darkblue hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          Back to Home
        </Button>
      </div>

      {/* Colorful title */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gm-darkblue via-blue-500 to-cyan-500 text-transparent bg-clip-text">
          Our Projects Gallery
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-gm-darkblue to-blue-500 rounded-full"></div>
      </div>

      {/* Responsive gallery with subtle enhancements */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 border border-gray-100">
        <Gallery mediaItems={mediaItems} />
      </div>
    </section>
  )
}

export default GalleryPage
