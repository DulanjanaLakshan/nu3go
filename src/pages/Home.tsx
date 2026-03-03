import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Leaf, MapPin, Building2, Star, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 left-0 w-72 h-72 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-80 h-80 bg-yellow-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Now delivering in 50+ cities
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Healthy Breakfast. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                Delivered Fresh.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Chef-crafted, nutrient-dense morning meals designed for busy professionals. 
              Start your day right with zero prep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/plans"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Start Your Plan
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-medium shadow-sm transition-all flex items-center justify-center"
              >
                View Plans
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-900">4.9/5</span>
                <span>from 2,000+ reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square rounded-full bg-gradient-to-tr from-emerald-100 to-orange-50 p-8">
              <img
                src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1000"
                alt="Healthy Breakfast Bowl"
                className="w-full h-full object-cover rounded-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3"
              >
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                  <Leaf size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Protein</p>
                  <p className="text-sm font-bold text-gray-900">24g per meal</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3"
              >
                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Quality</p>
                  <p className="text-sm font-bold text-gray-900">100% Organic</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed for your lifestyle</h2>
            <p className="text-gray-600 text-lg">We've reimagined breakfast to fit seamlessly into your busy mornings, without compromising on nutrition.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PlayCircle size={24} />,
                title: "Flexible Subscription",
                desc: "Pause, skip, or cancel anytime. You're in complete control."
              },
              {
                icon: <Leaf size={24} />,
                title: "Hybrid 12-Meal Plan",
                desc: "Mix and match meals to suit your weekly schedule."
              },
              {
                icon: <MapPin size={24} />,
                title: "Pickup & Delivery",
                desc: "Get it delivered or grab it from a local partner cafe."
              },
              {
                icon: <Building2 size={24} />,
                title: "Corporate Wellness",
                desc: "Fuel your team with healthy options at the office."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-600 text-lg">Three simple steps to better mornings.</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "Choose Plan", desc: "Select your meals from our weekly rotating chef-crafted menu." },
                { step: "02", title: "Pickup or Delivery", desc: "Choose home delivery or grab from a convenient local spot." },
                { step: "03", title: "Enjoy Fresh", desc: "Wake up to delicious, ready-to-eat healthy breakfasts." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/30 mb-6 ring-8 ring-[#FAFAF8]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Highlight Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                  <Star size={14} className="fill-emerald-400 text-emerald-400" />
                  Most Popular
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Hybrid 12-Meal Plan</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Perfect for the modern professional. Get 12 meals per month to use whenever you need them. 
                  Skip a week, double up, or pause anytime. Total flexibility.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Credits never expire while subscribed",
                    "Mix and match any menu items",
                    "Free delivery on orders of 4+ meals"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white">
                      <CheckCircle2 size={20} className="text-emerald-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/plans"
                  className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                >
                  Get the Hybrid Plan
                </Link>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-medium">Monthly Progress</h3>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square rounded-xl flex items-center justify-center ${
                          i < 5 ? 'bg-emerald-500 text-white' : 'bg-white/5 border border-white/10 text-white/30'
                        }`}
                      >
                        {i < 5 ? <CheckCircle2 size={20} /> : i + 1}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>5 used</span>
                    <span>7 remaining</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '41%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-600 text-lg">Choose the plan that fits your morning routine.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly Starter</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for trying us out.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$45</span>
                <span className="text-gray-500">/week</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> 3 meals per week</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Pickup only</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Standard menu</li>
              </ul>
              <Link to="/plans" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-xl transition-colors">
                Choose Starter
              </Link>
            </div>

            {/* Plan 2 - Highlighted */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-emerald-500/10 border-2 border-emerald-500 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hybrid 12</h3>
              <p className="text-gray-500 text-sm mb-6">Ultimate flexibility.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$150</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> 12 meals per month</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Free delivery</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Premium menu access</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Pause anytime</li>
              </ul>
              <Link to="/plans" className="w-full block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl transition-colors shadow-md">
                Choose Hybrid
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly Pro</h3>
              <p className="text-gray-500 text-sm mb-6">For the daily routine.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$70</span>
                <span className="text-gray-500">/week</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> 5 meals per week</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Free delivery</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 size={18} className="text-emerald-500" /> Premium menu access</li>
              </ul>
              <Link to="/plans" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-xl transition-colors">
                Choose Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by early risers</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it.</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { name: "Sarah J.", role: "Product Manager", text: "The Hybrid plan is a lifesaver. I travel for work, so being able to pause and use my credits when I'm back is incredible." },
              { name: "Michael T.", role: "Software Engineer", text: "Finally, a healthy breakfast that actually tastes good and keeps me full until lunch. The overnight oats are amazing." },
              { name: "Emily R.", role: "Fitness Coach", text: "I recommend nu3go to all my clients. The macros are perfect and the ingredients are top tier." },
              { name: "David L.", role: "Designer", text: "Beautiful packaging, delicious food, and the pickup option at my local coffee shop makes my morning routine seamless." }
            ].map((testimonial, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-gray-50 rounded-3xl p-8 snap-center border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your mornings?</h2>
            <p className="text-emerald-50 text-lg mb-10">
              Join thousands of others who have discovered the secret to a better, healthier start to their day.
            </p>
            <Link
              to="/plans"
              className="inline-flex items-center justify-center bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <p className="mt-6 text-emerald-100/80 text-sm">No commitment. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
