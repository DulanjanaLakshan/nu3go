import { motion } from 'motion/react';
import { Leaf, Heart, ShieldCheck, Sprout } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            We believe mornings <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              set the tone.
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            nu3go was born from a simple realization: the most important meal of the day is often the most neglected. We're here to change that with chef-crafted, nutrient-dense breakfasts.
          </p>
        </motion.div>
      </div>

      {/* Story Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1490818387583-1b5f222234ce?q=80&w=2000&auto=format&fit=crop" 
            alt="Fresh ingredients" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Mission & Values */}
      <div className="bg-[#FAFAF8] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-gray-600">Everything we do is guided by our commitment to health, quality, and sustainability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf size={32} />, title: "Real Ingredients", desc: "No artificial preservatives, colors, or flavors. Just real, whole foods." },
              { icon: <Heart size={32} />, title: "Chef-Crafted", desc: "Designed by nutritionists, perfected by chefs for incredible taste." },
              { icon: <ShieldCheck size={32} />, title: "Transparent", desc: "You'll always know exactly what's in your food and where it came from." },
              { icon: <Sprout size={32} />, title: "Sustainable", desc: "Eco-friendly packaging and responsible sourcing practices." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
              >
                <div className="text-emerald-500 mb-6 bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
