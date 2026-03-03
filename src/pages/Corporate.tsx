import { motion } from 'motion/react';
import { Building2, Users, Heart, TrendingUp, ArrowRight } from 'lucide-react';

export default function Corporate() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Building2 size={16} />
              <span>nu3go for Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Fuel your team's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                best work.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Healthy, chef-crafted breakfasts delivered directly to your office. 
              Boost morale, increase productivity, and show your team you care.
            </p>
            <button className="inline-flex justify-center items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-lg transition-all hover:-translate-y-1">
              Request Information
              <ArrowRight size={20} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#FAFAF8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Increase in Productivity', value: '24%' },
              { label: 'Employee Satisfaction', value: '98%' },
              { label: 'Meals Delivered', value: '50k+' },
              { label: 'Partner Companies', value: '120+' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why companies choose nu3go
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="text-blue-500" size={32} />,
              title: 'Team Bonding',
              desc: 'Encourage cross-functional collaboration by bringing teams together for a healthy morning meal.'
            },
            {
              icon: <Heart className="text-emerald-500" size={32} />,
              title: 'Health & Wellness',
              desc: 'Support your employees\' health goals with nutritionist-approved meals that prevent the mid-morning crash.'
            },
            {
              icon: <TrendingUp className="text-orange-500" size={32} />,
              title: 'Talent Retention',
              desc: 'Offer a premium perk that stands out. Companies with food programs see higher retention rates.'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Get a Custom Quote</h2>
            <p className="text-gray-400 mb-8">Tell us about your team and we'll design the perfect plan.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Work Email</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Team Size</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                    <option>10 - 50</option>
                    <option>51 - 200</option>
                    <option>201 - 500</option>
                    <option>500+</option>
                  </select>
                </div>
              </div>
              <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
