
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Building, Truck } from "lucide-react";
import electrician from '../assets/images/electrician.jpg'
import construct from '../assets/images/construct.jpg'
import road from '../assets/images/road.jpeg'
import stadium from '../assets/images/stadium.jpg'
const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-gm-blue to-gm-darkblue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gm-yellow blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gm-yellow blur-3xl"></div>
      </div>
      
      {/* Engineer images as background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-gradient-to-l from-black to-transparent"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full lg:block hidden">
          <img 
            src={electrician} 
            alt="Electrical engineers at work" 
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <span className="px-4 py-1 bg-gm-yellow/20 text-gm-yellow rounded-full text-sm font-medium inline-block mb-5">
              Professional Electrical Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Electrical & Engineering Excellence
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              Providing quality, speedy, efficient, and cost-effective electrical services & solutions across Rwanda and East Africa since 2004.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gm-yellow hover:bg-yellow-500 text-gm-darkblue font-medium">
                Our Services
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-2 gap-4 animate-slide-up">
            {[
              { icon: <Wrench size={32} />, title: "Engineering Solutions", desc: "Expert electrical maintenance & repair" },
              { icon: <Zap size={32} />, title: "Electrical Contracting", desc: "Professional installation & commissioning" },
              { icon: <Building size={32} />, title: "Facility Maintenance", desc: "Comprehensive service contracts" },
              { icon: <Truck size={32} />, title: "Supply & Distribution", desc: "Quality electrical equipment & parts" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border border-white/5 shadow-lg"
              >
                <div className="text-gm-yellow mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image strip at bottom */}
        <div className="mt-16 hidden lg:flex gap-4 justify-center animate-fade-in">
          {[
            construct,
            road,
            stadium
          ].map((img, index) => (
            <div key={index} className="w-64 h-36 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform hover:-translate-y-1">
              <img src={img} alt={`Engineer work ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
