import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from 'react-router-dom'; 
import poles from "../assets/images/poles.jpeg";
import stad from "../assets/images/stadium.png";
import airport from "../assets/images/kia.jpg";

const Projects = () => {
  const navigate = useNavigate()
  return (
    <section id="projects" className="py-16 md:py-24 bg-gm-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineering Excellence
          </h2>
          <div className="w-20 h-1 bg-gm-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto opacity-90">
            GM Electrics Co. Ltd continues to lead the way in electrical
            engineering, delivering high-performance solutions for major
            infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Airport Project */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-gm-yellow text-gm-darkblue hover:bg-gm-yellow/90">
                Aviation
              </Badge>
              <h3 className="text-2xl font-semibold">
                Kigali International Airport
              </h3>
            </div>
            <p className="opacity-90 mb-6">
              MEP Installation – Aircraft Recovery Storage at Kigali
              International Airport ✈️
            </p>
            <div className="space-y-3">
              {[
                "Successfully implemented pre-approved electrical design, ensuring flawless integration of power distribution and automation systems",
                "Installed high-efficiency power outlets, electrical panels, and lighting systems to support aircraft recovery operations",
                "Advanced fire alarm and protection systems installed, meeting strict aviation safety standards",
                "Integration of modern data and voice communication networks, ensuring smooth coordination in the facility",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gm-yellow shrink-0 mt-0.5" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
              <img
                src={airport}
                alt="Kigali International Airport Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gm-darkblue/70 to-transparent"></div>
            </div>
          </div>

          {/* Stadium Project */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-gm-yellow text-gm-darkblue hover:bg-gm-yellow/90">
                Sports
              </Badge>
              <h3 className="text-2xl font-semibold">Stadium Developments</h3>
            </div>
            <p className="opacity-90 mb-6">
              Design & Implementation – Ngoma, Bugesera & Nyagatare Stadiums 🏟️
            </p>
            <div className="space-y-3">
              {[
                "Designed and installed powerful stadium lighting systems, ensuring top-notch visibility for games and events",
                "Electrical panels to power outlets installation for efficient stadium functionality",
                "Cutting-edge fire alarm and lightning protection systems installed, safeguarding players, staff, and spectators",
                "Implementation of CCTV surveillance and access control systems, ensuring a secure environment",
                "Advanced public address and data networks for smooth event management and real-time coordination",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gm-yellow shrink-0 mt-0.5" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
              <img
                src={stad}
                alt="Stadium Development Projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gm-darkblue/70 to-transparent"></div>
            </div>
          </div>

          {/* Manufacturing Project - NEW */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-gm-yellow text-gm-darkblue hover:bg-gm-yellow/90">
                Manufacturing
              </Badge>
              <h3 className="text-2xl font-semibold">
                Metal Street Lights Poles
              </h3>
            </div>
            <p className="opacity-90 mb-6">
              Design & Production – High-Quality Street Lighting Infrastructure
              💡
            </p>
            <div className="space-y-3">
              {[
                "State-of-the-art manufacturing facility producing durable, weather-resistant metal street light poles",
                "Custom designs available to match architectural aesthetics of urban and rural environments",
                "Galvanized steel construction ensuring longevity and minimal maintenance requirements",
                "Integrated electrical conduits for safe and efficient wiring installation",
                "Compliance with international standards for structural integrity and electrical safety",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gm-yellow shrink-0 mt-0.5" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
              <img
                src={poles}
                alt="Metal Street Lights Poles Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gm-darkblue/70 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl mb-3 font-semibold">
            Innovation. Precision. Reliability.
          </h3>
          <p className="max-w-2xl mx-auto opacity-90">
            GM Electrics is proud to be a driving force behind Rwanda's
            electrical transformation, empowering industries and communities
            through cutting-edge engineering solutions. 🚀
          </p>
        </div>
      </div>
      <div className="mb-12 mt-5 flex justify-center">
        <Button
          onClick={() => navigate('/gallery')}
          variant="outline"
          className="gap-2 border-2 border-gm-darkblue text-gm-darkblue 
                    hover:bg-gm-darkblue hover:text-white transition-colors 
                    duration-300 rounded-lg px-6 py-3 text-lg font-medium 
                    shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="h-5 w-5" />
          View Full Gallery
        </Button>
      </div>
    </section>
  );
};

export default Projects;
