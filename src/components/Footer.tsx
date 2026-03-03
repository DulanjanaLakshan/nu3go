import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-emerald-500 text-white p-1.5 rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                <Leaf size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">nu3go</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Healthy, delicious breakfast delivered fresh to your door or ready for pickup. Fuel your mornings right.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 tracking-tight">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/corporate" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Corporate Wellness</Link></li>
              <li><Link to="/careers" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 tracking-tight">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/pickup-locations" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Pickup Locations</Link></li>
              <li><Link to="/delivery" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">Delivery Areas</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 tracking-tight">Stay Fresh</h3>
            <p className="text-gray-500 text-sm mb-4">Subscribe for healthy morning tips and exclusive offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} nu3go. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
