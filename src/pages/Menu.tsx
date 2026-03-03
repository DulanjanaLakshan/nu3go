import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Flame, Clock } from 'lucide-react';

const categories = ['All', 'Bowls', 'Oats', 'Smoothies', 'Wraps'];

const menuItems = [
  {
    id: 1,
    name: 'Acai Power Bowl',
    category: 'Bowls',
    description: 'Organic acai, house-made granola, fresh berries, banana, chia seeds.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
    calories: 420,
    protein: 12,
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 2,
    name: 'Protein Overnight Oats',
    category: 'Oats',
    description: 'Rolled oats, almond milk, vanilla protein, almond butter, cacao nibs.',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800',
    calories: 380,
    protein: 24,
    tags: ['High Protein']
  },
  {
    id: 3,
    name: 'Green Detox Smoothie',
    category: 'Smoothies',
    description: 'Spinach, kale, pineapple, mango, ginger, coconut water.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    calories: 210,
    protein: 5,
    tags: ['Vegan', 'Low Calorie']
  },
  {
    id: 4,
    name: 'Spicy Egg White Wrap',
    category: 'Wraps',
    description: 'Egg whites, spinach, feta, turkey bacon, sriracha aioli, whole wheat wrap.',
    image: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=800',
    calories: 350,
    protein: 28,
    tags: ['High Protein']
  },
  {
    id: 5,
    name: 'Matcha Chia Pudding',
    category: 'Bowls',
    description: 'Ceremonial grade matcha, chia seeds, coconut milk, fresh raspberries.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800',
    calories: 290,
    protein: 8,
    tags: ['Vegan', 'Keto-Friendly']
  },
  {
    id: 6,
    name: 'Berry Blast Smoothie',
    category: 'Smoothies',
    description: 'Mixed berries, greek yogurt, honey, almond milk, flax seeds.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    calories: 280,
    protein: 15,
    tags: ['Vegetarian']
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = menuItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Chef-crafted, nutritionist-approved. Every meal is designed to give you the perfect start to your day.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Flame size={16} className="text-orange-500" />
                    <span className="font-medium">{item.calories} cal</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Leaf size={16} className="text-emerald-500" />
                    <span className="font-medium">{item.protein}g protein</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
