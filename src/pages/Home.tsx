import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, ShieldCheck, Clock, Compass, Star, ArrowRight } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/luxurytravel/1920/1080" 
            alt="Luxury Travel Destination" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.h1 
            initial="hidden" animate="visible" variants={FADE_UP}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold tracking-tight mb-6 drop-shadow-lg"
          >
            Experience the Extraordinary.<br />We'll Handle the Rest.
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md font-light"
          >
            Bespoke itineraries, exclusive access, and 24/7 concierge support for the world's most breathtaking destinations.
          </motion.p>

          {/* Search/Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl p-2 md:p-4 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center"
          >
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <MapPin className="text-primary w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Where to?</span>
                <input type="text" placeholder="e.g. Kyoto, Japan" className="w-full outline-none text-charcoal placeholder:text-gray-400 bg-transparent" />
              </div>
            </div>
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <Calendar className="text-primary w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">When?</span>
                <input type="text" placeholder="Select dates" className="w-full outline-none text-charcoal placeholder:text-gray-400 bg-transparent" />
              </div>
            </div>
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2">
              <Users className="text-primary w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guests</span>
                <input type="text" placeholder="2 Adults" className="w-full outline-none text-charcoal placeholder:text-gray-400 bg-transparent" />
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shrink-0">
              <Search className="w-5 h-5" />
              <span>Find Escape</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Recognized By & Accredited</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Placeholder Logos */}
            <div className="text-xl font-serif font-bold">Condé Nast</div>
            <div className="text-xl font-serif font-bold">NatGeo</div>
            <div className="text-xl font-serif font-bold">Travel+Leisure</div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold">Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Travel Without the 'What Ifs'</h2>
            <p className="text-gray-600 text-lg">From airport transfers to private guides, every detail is meticulously vetted by our on-the-ground experts.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={FADE_UP} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Curated Itineraries</h3>
              <p className="text-gray-600 leading-relaxed">Hand-crafted journeys designed around your specific interests, pace, and travel style.</p>
            </motion.div>
            <motion.div variants={FADE_UP} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Vetted Local Guides</h3>
              <p className="text-gray-600 leading-relaxed">We only partner with the most knowledgeable, passionate, and reliable experts in each destination.</p>
            </motion.div>
            <motion.div variants={FADE_UP} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">24/7 Concierge Support</h3>
              <p className="text-gray-600 leading-relaxed">Total peace of mind with round-the-clock assistance from the moment you leave until you return.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED TOURS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trending Escapes</h2>
              <p className="text-gray-600 text-lg">Curated Journeys. Once-in-a-Lifetime Memories.</p>
            </div>
            <Link to="/" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors">
              View All Tours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <Link to="/tour/japan" className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/kyoto/800/600" alt="Japan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-charcoal uppercase tracking-wider">
                  Selling Fast
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">12 Days â 11 Nights</p>
                    <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors">Wonders of Japan</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">Immerse yourself in the perfect blend of ancient traditions and neon-lit modernity from Tokyo to Kyoto.</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">From</span>
                    <span className="text-lg font-bold text-charcoal">$4,500 <span className="text-sm font-normal text-gray-500">pp</span></span>
                  </div>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Itinerary <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Tour Card 2 */}
            <Link to="/tour/italy" className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/amalfi/800/600" alt="Italy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">8 Days â 7 Nights</p>
                    <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors">Amalfi Coast Escape</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">Sail the Mediterranean, taste world-class wines, and relax in cliffside boutique villas.</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">From</span>
                    <span className="text-lg font-bold text-charcoal">$3,200 <span className="text-sm font-normal text-gray-500">pp</span></span>
                  </div>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Itinerary <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Tour Card 3 */}
            <Link to="/tour/safari" className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/safari/800/600" alt="Safari" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">10 Days â 9 Nights</p>
                    <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors">Serengeti Luxury Safari</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">Witness the Great Migration from the comfort of exclusive, eco-friendly luxury tented camps.</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">From</span>
                    <span className="text-lg font-bold text-charcoal">$6,800 <span className="text-sm font-normal text-gray-500">pp</span></span>
                  </div>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Itinerary <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors">
              View All Tours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DESTINATION BENTO BOX */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore by Region</h2>
            <p className="text-gray-400 text-lg">Discover hand-picked experiences across the globe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            {/* Large Item */}
            <Link to="/" className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/seed/europe/800/800" alt="Europe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif font-bold mb-2">Europe</h3>
                <p className="text-white/80">32 Curated Itineraries</p>
              </div>
            </Link>
            
            {/* Medium Items */}
            <Link to="/" className="group relative md:col-span-2 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/seed/asia/800/400" alt="Asia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-serif font-bold mb-1">Asia</h3>
                <p className="text-white/80 text-sm">18 Curated Itineraries</p>
              </div>
            </Link>

            <Link to="/" className="group relative rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/seed/southamerica/400/400" alt="South America" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-serif font-bold mb-1">South America</h3>
                <p className="text-white/80 text-sm">12 Itineraries</p>
              </div>
            </Link>

            <Link to="/" className="group relative rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/seed/africa/400/400" alt="Africa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-serif font-bold mb-1">Africa</h3>
                <p className="text-white/80 text-sm">9 Itineraries</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stories from the Road</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it. Hear from our travelers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  "Absolutely flawless execution. We didn't have to think about a single logistical detail. The private access to the Vatican was a core memory we will never forget. Aura truly delivers on their promise."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/person${i}/100/100`} alt="Traveler" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-charcoal">Sarah & James M.</h4>
                    <p className="text-sm text-gray-500">Traveled to Italy, Sep 2025</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD MAGNET / FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/sunset/1920/600" alt="Sunset" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Not sure where to start?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Get our exclusive 2026 Travel Inspiration Guide. 50 pages of insider secrets, hidden gems, and expert advice.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-colors"
              required
            />
            <button type="submit" className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-colors whitespace-nowrap">
              Download Free Guide
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
