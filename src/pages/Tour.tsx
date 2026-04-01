import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Clock, Check, X, Star, ChevronDown, ShieldCheck, CreditCard } from 'lucide-react';

export default function Tour() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openDay, setOpenDay] = useState<number | null>(1);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero (approx 600px)
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-sand pb-20">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/kyoto/1920/1080" 
            alt="Japan" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 mb-4">
            <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Cultural</span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/30">Moderate Activity</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold tracking-tight mb-4 drop-shadow-lg">
            12-Day Wonders of Japan
          </h1>
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-medium">4.9/5 (128 Reviews)</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Tokyo to Kyoto</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY BOOKING BAR */}
      <div className={`fixed top-[72px] left-0 w-full bg-white shadow-md z-40 transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="hidden md:block">
            <h3 className="font-serif font-bold text-lg text-charcoal">Wonders of Japan</h3>
            <p className="text-sm text-gray-500">Next available: Sep 12, 2026</p>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col text-right">
              <span className="text-xs text-gray-500 uppercase tracking-wider">From</span>
              <span className="text-xl font-bold text-charcoal">$4,500 <span className="text-sm font-normal text-gray-500">pp</span></span>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview & Quick Facts */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6 text-charcoal">The Experience</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Immerse yourself in the perfect blend of ancient traditions and neon-lit modernity. From the bustling streets of Tokyo to the serene temples of Kyoto, this meticulously crafted 12-day journey offers exclusive access to Japan's most guarded secrets. 
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Experience a private tea ceremony with a Geisha, stay in a luxury ryokan with your own private hot spring, and taste world-class sushi at hidden local gems. We handle every logistical detail, so you can simply absorb the magic of the Land of the Rising Sun.
              </p>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Duration</span>
                  <span className="font-bold text-charcoal">12 Days</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Group Size</span>
                  <span className="font-bold text-charcoal">Max 10</span>
                </div>
                <div className="flex flex-col gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Starts/Ends</span>
                  <span className="font-bold text-charcoal">Tokyo / Kyoto</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Best Time</span>
                  <span className="font-bold text-charcoal">Mar-May, Sep-Nov</span>
                </div>
              </div>
            </section>

            {/* Inclusions / Exclusions */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-8 text-charcoal">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-green-700">
                    <Check className="w-5 h-5" /> Included
                  </h3>
                  <ul className="space-y-3">
                    {['11 nights in 4 & 5-star boutique hotels', 'First-class Bullet Train (Shinkansen) passes', 'Daily breakfast and 6 premium dinners', 'Private English-speaking local guides', 'All entrance fees to temples and museums', 'Airport VIP meet & greet transfers'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-700">
                    <X className="w-5 h-5" /> Not Included
                  </h3>
                  <ul className="space-y-3">
                    {['International flights to/from Japan', 'Travel insurance (required)', 'Personal expenses and shopping', 'Gratuities for guides and drivers'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-8 text-charcoal">Daily Itinerary</h2>
              <div className="space-y-4">
                {[
                  { day: 1, title: 'Arrival in Tokyo', desc: 'Arrive at Narita or Haneda airport. Our VIP concierge will meet you at the gate, assist with luggage, and transfer you via private luxury vehicle to your 5-star hotel in Shinjuku. Evening at leisure.' },
                  { day: 2, title: 'Tokyo Contrasts: Asakusa to Shibuya', desc: 'Start the day in historic Asakusa visiting Senso-ji Temple. Enjoy a private sushi-making masterclass for lunch. In the afternoon, experience the neon energy of Shibuya Crossing and Harajuku.' },
                  { day: 3, title: 'Mt. Fuji & Hakone Hot Springs', desc: 'Leave the city behind for the serene mountains of Hakone. Ride the ropeway for views of Mt. Fuji, cruise Lake Ashi, and check into a traditional luxury Ryokan featuring your own private onsen (hot spring).' },
                  { day: 4, title: 'Bullet Train to Kyoto', desc: 'Experience the famous Shinkansen (Bullet Train) in first class, arriving in Kyoto in just 2 hours. Afternoon walking tour of the Gion district, with an exclusive private tea ceremony hosted by a Geiko.' }
                ].map((item) => (
                  <div key={item.day} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenDay(openDay === item.day ? null : item.day)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="bg-sand text-primary font-bold px-3 py-1 rounded-md text-sm">Day {item.day}</span>
                        <span className="font-serif font-bold text-lg text-charcoal">{item.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openDay === item.day ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDay === item.day && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-6 pb-6 pt-2 border-t border-gray-50"
                      >
                        <div className="flex flex-col md:flex-row gap-6 mt-4">
                          <p className="text-gray-600 leading-relaxed flex-1">{item.desc}</p>
                          <img 
                            src={`https://picsum.photos/seed/japan${item.day}/300/200`} 
                            alt={`Day ${item.day}`} 
                            className="w-full md:w-48 h-32 object-cover rounded-xl shrink-0"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="text-center pt-4">
                  <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                    View Full 12-Day Itinerary
                  </button>
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-3xl font-serif font-bold mb-8 text-charcoal">Immersive Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="https://picsum.photos/seed/g1/400/400" alt="Gallery" className="w-full h-48 md:h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/g2/400/400" alt="Gallery" className="w-full h-48 md:h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop" alt="Gallery" className="w-full h-48 md:h-64 object-cover rounded-xl md:col-span-1 col-span-2" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/g4/800/400" alt="Gallery" className="w-full h-48 md:h-64 object-cover rounded-xl md:col-span-2 col-span-2" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/g5/400/400" alt="Gallery" className="w-full h-48 md:h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-8">
              <h3 className="text-2xl font-serif font-bold mb-2 text-charcoal">Choose Your Dates</h3>
              <p className="text-gray-500 text-sm mb-6">Prices are per person, double occupancy.</p>

              <div className="space-y-4 mb-8">
                {/* Date Option 1 */}
                <label className="flex items-center justify-between p-4 border-2 border-primary rounded-xl cursor-pointer bg-primary/5">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="date" className="w-4 h-4 text-primary focus:ring-primary" defaultChecked />
                    <div>
                      <p className="font-bold text-charcoal">Sep 12 - Sep 23, 2026</p>
                      <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mt-1">Only 4 spots left</p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">$4,500</span>
                </label>

                {/* Date Option 2 */}
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="date" className="w-4 h-4 text-primary focus:ring-primary" />
                    <div>
                      <p className="font-bold text-charcoal">Oct 05 - Oct 16, 2026</p>
                      <p className="text-xs text-green-600 font-bold uppercase tracking-wider mt-1">Available</p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">$4,800</span>
                </label>

                {/* Date Option 3 */}
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="date" className="w-4 h-4 text-primary focus:ring-primary" />
                    <div>
                      <p className="font-bold text-charcoal">Nov 10 - Nov 21, 2026</p>
                      <p className="text-xs text-green-600 font-bold uppercase tracking-wider mt-1">Available</p>
                    </div>
                  </div>
                  <span className="font-bold text-lg">$4,500</span>
                </label>
              </div>

              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-lg transition-colors mb-4 shadow-lg shadow-primary/30">
                Secure Your Spot
              </button>
              
              <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-charcoal py-4 rounded-xl font-medium transition-colors mb-6">
                Request Custom Quote
              </button>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-charcoal">Worry-Free Booking</p>
                    <p className="text-xs text-gray-500 mt-1">Fully refundable deposit up to 60 days before departure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-charcoal">Secure Payment</p>
                    <p className="text-xs text-gray-500 mt-1">256-bit encryption. We accept all major cards.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
