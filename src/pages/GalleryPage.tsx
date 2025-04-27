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
