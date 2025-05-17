import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gm-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gm-blue text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gm-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gm-gray">
            Reach out to us for any inquiries about our services or to request a
            quote. Our team is ready to assist you with your electrical
            engineering needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gm-darkblue mb-6">
              Send Us a Message
            </h3>
            <form 
              className="space-y-6"
              action="mailto:juniormanene@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gm-gray mb-1"
                  >
                    Full Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" className="w-full" required />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gm-gray mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gm-gray mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gm-gray mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="w-full min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gm-blue hover:bg-gm-darkblue text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-gm-blue text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Physical Address</h4>
                    <p className="opacity-90">
                      Kicukiro, Niboye, Avenue KK502, Kigali, Rwanda
                    </p>
                    <p className="opacity-90 mt-1">
                      P.O. BOX: 1569, Kigali-Rwanda
                    </p>
                  </div>
                </div>

                {/* Chairman Contact */}
                <div className="border-t border-gm-lightblue pt-4">
                  <div className="flex items-start mb-3">
                    <User className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Chairman</h4>
                    </div>
                  </div>
                  <div className="flex items-start ml-8 mb-2">
                    <Phone className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                    <div>
                      <p className="opacity-90">
                        <a href="tel:+250788306260">+250 788 306 260</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start ml-8">
                    <Mail className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                    <a
                      href="mailto:bpmasterjerb@gmail.com"
                      className="text-white/80 hover:text-gm-yellow text-sm"
                    >
                      bpmasterjerb@gmail.com
                    </a>
                  </div>
                </div>

                {/* Managing Director Contact */}
                <div className="border-t border-gm-lightblue pt-4">
                  <div className="flex items-start mb-3">
                    <User className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Managing Director</h4>
                    </div>
                  </div>
                  <div className="flex items-start ml-8 mb-2">
                    <Phone className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                    <div>
                      <p className="opacity-90">
                        <a href="tel:+250789532044">+250 789 532 044</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start ml-8">
                    <Mail className="w-5 h-5 text-gm-yellow mr-3 mt-1" />
                    <div>
                      <a
                        href="mailto:bpmasterjerb@gmail.com"
                        className="text-white/80 hover:text-gm-yellow text-sm"
                      >
                        gmelectricsrw@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gm-darkblue mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gm-gray">Monday - Friday</span>
                  <span className="font-medium text-gm-darkblue">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gm-gray">Saturday</span>
                  <span className="font-medium text-gm-darkblue">
                    9:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gm-gray">Sunday</span>
                  <span className="font-medium text-gm-darkblue">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
