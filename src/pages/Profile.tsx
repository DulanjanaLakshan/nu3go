import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Package, CreditCard, Settings, LogOut, MapPin, Bell, ChevronRight, Edit2 } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('subscription');

  const tabs = [
    { id: 'subscription', label: 'My Plan', icon: <Package size={18} /> },
    { id: 'account', label: 'Account Details', icon: <User size={18} /> },
    { id: 'payment', label: 'Payment Methods', icon: <CreditCard size={18} /> },
    { id: 'preferences', label: 'Preferences', icon: <Settings size={18} /> },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl">
                  JD
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">John Doe</h2>
                  <p className="text-sm text-gray-500">Premium Member</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'subscription' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-6">My Subscription</h1>
                  
                  {/* Current Plan Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                      Active
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Hybrid 12-Meal Plan</h3>
                        <p className="text-gray-500">Billed $150.00 monthly</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-sm text-gray-500 mb-1">Next billing date</p>
                        <p className="font-semibold text-gray-900">Oct 15, 2026</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-gray-900">Monthly Credits</h4>
                        <span className="text-emerald-600 font-bold">7 / 12 remaining</span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: '41%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">Credits reset on your next billing date.</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors">
                        Order Meals
                      </button>
                      <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-xl font-medium transition-colors">
                        Change Plan
                      </button>
                      <button className="bg-white border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-gray-700 px-6 py-2.5 rounded-xl font-medium transition-colors ml-auto">
                        Pause Subscription
                      </button>
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h3>
                    <div className="space-y-4">
                      {[
                        { date: 'Sep 28, 2026', items: '3 Meals', type: 'Delivery', status: 'Delivered' },
                        { date: 'Sep 21, 2026', items: '2 Meals', type: 'Pickup (SOMA Cafe)', status: 'Picked Up' },
                        { date: 'Sep 14, 2026', items: '4 Meals', type: 'Delivery', status: 'Delivered' },
                      ].map((order, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500">
                              <Package size={20} />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{order.date}</p>
                              <p className="text-sm text-gray-500">{order.items} • {order.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                              {order.status}
                            </span>
                            <ChevronRight size={20} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'account' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Details</h1>
                  
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
                        <Edit2 size={14} /> Edit
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Full Name</p>
                        <p className="font-medium text-gray-900">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email Address</p>
                        <p className="font-medium text-gray-900">john.doe@example.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                        <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Delivery Address</h3>
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
                        <Edit2 size={14} /> Edit
                      </button>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-gray-400">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Home</p>
                        <p className="text-gray-600 mt-1">
                          123 Market St, Apt 4B<br />
                          San Francisco, CA 94105
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Delivery instructions: Leave at front desk.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h1>
                  
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50/30">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-xs font-bold italic">
                            VISA
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Visa ending in 4242</p>
                            <p className="text-sm text-gray-500">Expires 12/28</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md uppercase tracking-wider">
                          Default
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors flex items-center justify-center gap-2">
                      <CreditCard size={18} />
                      Add New Payment Method
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h1>
                  
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Dietary Preferences</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Keto-Friendly'].map((diet) => (
                        <button key={diet} className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                          diet === 'Gluten-Free' || diet === 'Dairy-Free' 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                            : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-200'
                        }`}>
                          {diet}
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">We'll highlight menu items that match your preferences.</p>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Notifications</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'Order Updates', desc: 'Delivery status and pickup reminders.', active: true },
                        { title: 'New Menu Items', desc: 'Be the first to know about seasonal additions.', active: true },
                        { title: 'Promotions & Offers', desc: 'Exclusive discounts for subscribers.', active: false },
                      ].map((notif, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                          <div className="flex items-start gap-3">
                            <Bell size={18} className="text-gray-400 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-900">{notif.title}</p>
                              <p className="text-sm text-gray-500">{notif.desc}</p>
                            </div>
                          </div>
                          <button className={`w-11 h-6 rounded-full transition-colors relative ${notif.active ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${notif.active ? 'left-6' : 'left-1'}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
