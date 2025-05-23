import { Zap, Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Mail as MailIcon, MessageCircle, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gm-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-gm-yellow mr-2" />
              <span className="text-xl font-bold">GM Electrics</span>
            </div>
            <p className="text-white/80 mb-4">
              Providing quality, speedy, efficient, and cost-effective electrical services & solutions since 2004.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gm-yellow hover:text-gm-darkblue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gm-yellow hover:text-gm-darkblue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/250788306260" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gm-yellow hover:text-gm-darkblue transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bpmasterjerb@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gm-yellow hover:text-gm-darkblue transition-colors"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Team',  'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-white/80 hover:text-gm-yellow flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Electrical Motor Repair', 
                'Generator Installation', 
                'Building Maintenance', 
                'Electrical Contracting',
                'Refrigeration & AC'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-gm-yellow flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-gm-yellow mr-3 shrink-0" />
                <span className="text-white/80">
                  Kicukiro, Niboye, Avenue KK502, Kigali, Rwanda
                </span>
              </li>

              {/* Managing Director Contact */}
              <li className="pt-2">
                <div className="flex items-center mb-1">
                  <User className="w-4 h-4 text-gm-yellow mr-2" />
                  <span className="font-medium text-sm">Managing Director</span>
                </div>
                <div className="flex items-center ml-6 mb-1">
                  <Phone className="w-4 h-4 text-gm-yellow mr-2" />
                  <a href="tel:+250788306260" className="text-white/80 hover:text-gm-yellow text-sm">
                  +250 789 532 044
                  </a>
                </div>
                <div className="flex items-center ml-6">
                  <Mail className="w-4 h-4 text-gm-yellow mr-2" />
                  <a href="mailto:bpmasterjerb@gmail.com" className="text-white/80 hover:text-gm-yellow text-sm">
                  gmelectricsrw@gmail.com
                  </a>
                </div>
              </li>

              {/* Chairman Contact */}
              <li className="pt-2">
                <div className="flex items-center mb-1">
                  <User className="w-4 h-4 text-gm-yellow mr-2" />
                  <span className="font-medium text-sm">Chairman</span>
                </div>
                <div className="flex items-center ml-6 mb-1">
                  <Phone className="w-4 h-4 text-gm-yellow mr-2" />
                  <a href="tel:+250788123456" className="text-white/80 hover:text-gm-yellow text-sm">
                  +250 788 306 260
                  </a>
                </div>
                <div className="flex items-center ml-6">
                  <Mail className="w-4 h-4 text-gm-yellow mr-2" />
                  <a href="mailto:chairman@gm-electrical.com" className="text-white/80 hover:text-gm-yellow text-sm">
                  bpmasterjerb@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} GM Electrics Co. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;