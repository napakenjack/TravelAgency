import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Always solid on non-home pages, transparent at top of home page
  const isHome = location.pathname === '/';
  const isSolid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={cn(
              "font-serif text-2xl font-bold tracking-tight transition-colors",
              isSolid ? "text-charcoal" : "text-white"
            )}>
              AURA<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-primary", isSolid ? "text-charcoal" : "text-white/90")}>Destinations</Link>
            <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-primary", isSolid ? "text-charcoal" : "text-white/90")}>Tour Styles</Link>
            <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-primary", isSolid ? "text-charcoal" : "text-white/90")}>About</Link>
            <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-primary", isSolid ? "text-charcoal" : "text-white/90")}>Journal</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={cn("p-2 transition-colors hover:text-primary", isSolid ? "text-charcoal" : "text-white")}>
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/"
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                isSolid 
                  ? "bg-charcoal text-white hover:bg-charcoal/90" 
                  : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-charcoal"
              )}
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2", isSolid ? "text-charcoal" : "text-white")}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link to="/" className="block px-3 py-4 text-base font-medium text-charcoal border-b border-gray-50">Destinations</Link>
            <Link to="/" className="block px-3 py-4 text-base font-medium text-charcoal border-b border-gray-50">Tour Styles</Link>
            <Link to="/" className="block px-3 py-4 text-base font-medium text-charcoal border-b border-gray-50">About</Link>
            <Link to="/" className="block px-3 py-4 text-base font-medium text-charcoal border-b border-gray-50">Journal</Link>
            <div className="pt-4 px-3">
              <Link to="/" className="block w-full text-center px-6 py-3 text-base font-medium rounded-full bg-charcoal text-white">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
