
import { Wrench, Zap, Building, Truck, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-gm-yellow" />,
      title: "Repair & Maintenance",
      description: "Professional repair and maintenance of electrical motors, generators, and transformers with expert precision."
    },
    {
      icon: <Zap className="w-10 h-10 text-gm-yellow" />,
      title: "Electrical Contracting",
      description: "Comprehensive electrical contracting and consultancy services for commercial and industrial projects."
    },
    {
      icon: <Truck className="w-10 h-10 text-gm-yellow" />,
      title: "Generator Solutions",
      description: "Supply, installation, and commissioning of diesel generators with full support and maintenance."
    },
    {
      icon: <Building className="w-10 h-10 text-gm-yellow" />,
      title: "Building Maintenance",
      description: "Specialized maintenance and service contracts for commercial and residential buildings."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-gm-yellow" />,
      title: "Electrical Supplies",
      description: "Sales of cables, electrical accessories, and motor starters with guaranteed quality and reliability."
    },
    {
      icon: <Rocket className="w-10 h-10 text-gm-yellow" />,
      title: "Refrigeration & AC",
      description: "Professional refrigeration and air conditioning contracting services for commercial and residential needs."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-gm-yellow/20 text-gm-darkblue rounded-full text-sm font-medium inline-block mb-4">
            What We Do
          </span>
          <h2 className="text-gm-blue text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
          <div className="w-20 h-1 bg-gm-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gm-gray">
            We provide a comprehensive range of electrical and engineering services to meet the needs
            of residential, commercial, and industrial clients throughout Rwanda and East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gm-lightgray border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="h-1 bg-gradient-to-r from-gm-blue to-gm-yellow"></div>
              <CardContent className="p-8">
                <div className="p-3 bg-white rounded-lg inline-block shadow-sm mb-4 group-hover:bg-gm-blue transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gm-darkblue mb-3">{service.title}</h3>
                <p className="text-gm-gray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
