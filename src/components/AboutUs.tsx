
import { ArrowRight, CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gm-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-gm-blue/10 text-gm-blue rounded-full text-sm font-medium inline-block mb-4">
            About Us
          </span>
          <h2 className="text-gm-blue text-3xl md:text-4xl font-bold mb-4">About GM Electrics</h2>
          <div className="w-20 h-1 bg-gm-yellow mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-gm-yellow opacity-20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Electrical engineers at work" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gm-blue/90 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-semibold text-xl">Established 2004</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gm-darkblue mb-4">Our Story</h3>
            <p className="text-gm-gray mb-4">
              GM Electrics Co. Ltd is a legally registered company in Rwanda since February 2016, expanding from its initial establishment in Dar es Salaam, Tanzania, in August 2004. Founded by experienced Electrical Engineering professionals, our company specializes in Electrical Machine repairs, Automation, Field Services, Contracting, and Generator Solutions.
            </p>
            <p className="text-gm-gray mb-6">
              Our dedicated team, with experience ranging from 4 to 22 years, ensures quality, efficiency, and innovation in service delivery across Rwanda and East Africa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gm-blue mt-1 shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gm-blue">Experienced Team</h4>
                  <p className="text-gm-gray">Professional engineers with 4-22 years of industry experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gm-blue mt-1 shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gm-blue">Quality Focus</h4>
                  <p className="text-gm-gray">Commitment to delivering high-quality electrical services</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-6 border-l-4 border-gm-yellow">
              <h4 className="text-xl font-semibold text-gm-blue mb-2">Our Mission</h4>
              <p className="text-gm-gray italic">
                "Providing Quality, Speedy, Efficient, and Cost-effective Electrical Services & Solutions."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gm-blue">
              <h4 className="text-xl font-semibold text-gm-blue mb-2">Our Vision</h4>
              <p className="text-gm-gray italic">
                "To be the leading indigenous Electrical Engineering company in Rwanda and East Africa."
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#services" className="inline-flex items-center text-gm-blue font-medium hover:text-gm-darkblue transition-colors group">
                <span>Explore Our Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
