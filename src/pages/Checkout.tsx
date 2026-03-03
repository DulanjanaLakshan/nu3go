import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Lock, CheckCircle2, ChevronRight, MapPin, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Complete Your Order
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You're one step away from healthier, easier mornings.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Checkout Flow */}
          <div className="lg:w-2/3">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full z-0"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 rounded-full z-0 transition-all duration-500"
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              ></div>
              
              {[
                { num: 1, label: 'Account' },
                { num: 2, label: 'Delivery' },
                { num: 3, label: 'Payment' }
              ].map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    step >= s.num ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {step > s.num ? <CheckCircle2 size={20} /> : s.num}
                  </div>
                  <span className={`text-sm font-medium ${step >= s.num ? 'text-gray-900' : 'text-gray-400'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="••••••••" />
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 flex justify-end">
                    <button 
                      onClick={() => setStep(2)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                      Continue to Delivery <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="border-2 border-emerald-500 bg-emerald-50 rounded-2xl p-6 cursor-pointer relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                        Selected
                      </div>
                      <Package className="text-emerald-600 mb-3" size={24} />
                      <h3 className="font-bold text-gray-900 mb-1">Home Delivery</h3>
                      <p className="text-sm text-gray-600">Delivered fresh to your door</p>
                    </div>
                    <div className="border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30 rounded-2xl p-6 cursor-pointer transition-colors">
                      <MapPin className="text-gray-400 mb-3" size={24} />
                      <h3 className="font-bold text-gray-900 mb-1">Local Pickup</h3>
                      <p className="text-sm text-gray-500">Grab & go from a partner cafe</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="123 Market St" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="San Francisco" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white" placeholder="94105" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Instructions (Optional)</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white resize-none" rows={3} placeholder="Leave at the front desk..."></textarea>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                    <button 
                      onClick={() => setStep(1)}
                      className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                      Continue to Payment <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="text-emerald-500" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900">Secure Payment</h2>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <input type="radio" id="card" name="payment" className="w-4 h-4 text-emerald-500 focus:ring-emerald-500" defaultChecked />
                        <label htmlFor="card" className="font-medium text-gray-900">Credit Card</label>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <div className="relative">
                          <input type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white" placeholder="0000 0000 0000 0000" />
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white" placeholder="John Doe" />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 text-center mb-6">
                    By confirming your subscription, you allow nu3go to charge your card for this payment and future payments in accordance with our terms.
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                    <button 
                      onClick={() => setStep(2)}
                      className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
                    >
                      Back
                    </button>
                    <Link to="/profile" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center gap-2">
                      Subscribe Now <ChevronRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <Package className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hybrid 12-Meal Plan</h4>
                  <p className="text-sm text-gray-500 mt-1">12 meals / month</p>
                  <p className="text-sm text-gray-500">Flexible delivery & pickup</p>
                </div>
              </div>

              <div className="py-6 space-y-4 border-b border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$150.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes</span>
                  <span>$12.50</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-bold text-gray-900">Total Due Today</span>
                  <span className="text-3xl font-bold text-gray-900">$162.50</span>
                </div>
                <p className="text-sm text-gray-500 text-right">Billed monthly</p>
              </div>

              <div className="mt-8 bg-emerald-50 rounded-2xl p-4 flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-emerald-800">
                  <span className="font-semibold block mb-1">Cancel anytime.</span>
                  No long-term commitments. Pause or cancel your plan easily from your account.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
