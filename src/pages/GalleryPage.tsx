"use client"
import Gallery from "../components/Gallery"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// Image imports
import ElectricalInstallation from "../assets/images/about.jpg"
import PanelUpgrade from "../assets/images/about.jpg"
import LightingDesign from "../assets/images/about.jpg"

const GalleryPage = () => {
  const navigate = useNavigate()

  const mediaItems = [
    {
      type: "image",
      src: ElectricalInstallation,
      alt: "Commercial electrical installation",
      category: "commercial",
    },
    {
      type: "image",
      src: PanelUpgrade,
      alt: "Electrical panel upgrade",
      category: "industrial",
    },
    {
      type: "image",
      src: LightingDesign,
      alt: "Custom lighting design",
      category: "residential",
    },
  ]

  return (
    <section className="pt-24 pb-12 px-4 container mx-auto">
      {/* Back button with improved visibility */}
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
