import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Zap className="w-8 h-8 text-gm-yellow mr-2" />
          <span className="text-2xl font-bold text-gm-yellow">
            GM{" "}
            <span className={isScrolled ? "text-gm-gray" : "text-white"}>
              Electrics
            </span>
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium transition-colors ${
                      isScrolled
                        ? "text-gm-gray hover:text-gm-blue"
                        : "text-white hover:text-gm-yellow"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="hidden md:flex gap-4">
          <Button
            variant="default"
            className="bg-gm-blue hover:bg-gm-darkblue text-white font-medium"
          >
            Our Services
          </Button>

          <Button
            variant="default"
            className="bg-gm-yellow hover:bg-yellow-500 text-gm-darkblue font-medium"
          >
            Get A Quote
          </Button>
        </div>

        <button
          className={`md:hidden ${isScrolled ? "text-gm-gray" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block text-gm-gray hover:text-gm-blue font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="pt-2">
                <Button
                  variant="default"
                  className="w-full bg-gm-blue hover:bg-gm-darkblue text-white font-medium"
                >
                  Our Services
                </Button>
              </li>
              <li className="pt-2">
                <Button
                  variant="default"
                  className="w-full bg-gm-yellow hover:bg-yellow-500 text-gm-darkblue font-medium"
                >
                  Get A Quote
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
