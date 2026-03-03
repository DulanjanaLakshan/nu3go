import { useState } from 'react';
import { MapPin, Search, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const locations = [
  {
    id: 1,
    name: 'Downtown Cafe & Roasters',
    address: '120 Main St, Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    pickupTimes: 'Mon-Fri: 7:00 AM - 10:00 AM',
    distance: '0.8 miles',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'The Daily Grind',
    address: '450 Mission St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    pickupTimes: 'Mon-Fri: 6:30 AM - 11:00 AM',
    distance: '1.2 miles',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Green Leaf Market',
    address: '800 Market St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    pickupTimes: 'Mon-Sun: 7:00 AM - 12:00 PM',
    distance: '2.5 miles',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Sunrise Coffee Co.',
    address: '2000 Broadway',
    city: 'Oakland',
    state: 'CA',
    zip: '94612',
    pickupTimes: 'Mon-Fri: 7:00 AM - 10:30 AM',
    distance: '8.4 miles',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Fresh Start Cafe',
    address: '150 University Ave',
    city: 'Palo Alto',
    state: 'CA',
    zip: '94301',
    pickupTimes: 'Mon-Fri: 6:00 AM - 10:00 AM',
    distance: '32.1 miles',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=800'
  }
];

export default function PickupLocations() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = locations.filter(loc => 
    loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.zip.includes(searchQuery) ||
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find a Pickup Location
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Grab your fresh breakfast on the go from one of our partner cafes or markets.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search by city, zip code, or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Preview Placeholder */}
        <div className="lg:col-span-1 order-2 lg:order-1 h-[400px] lg:h-auto bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-200">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-50 grayscale"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <MapPin size={32} className="text-emerald-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-sm text-gray-500 mb-4">View all locations in your area to find the most convenient pickup spot.</p>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
                Open Map View
              </button>
            </div>
          </div>
        </div>

        {/* Location List */}
        <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, idx) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src={location.image} alt={location.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                        {location.distance}
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4">
                      {location.address}, {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} className="text-orange-500" />
                      <span className="font-medium">{location.pickupTimes}</span>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                      Get Directions
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-3xl border border-gray-100">
              <MapPin size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No locations found</h3>
              <p className="text-gray-500">We couldn't find any pickup spots matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
