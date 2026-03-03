import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: "Subscription & Plans",
    questions: [
      { q: "How does the Hybrid 12-Meal Plan work?", a: "The Hybrid plan gives you 12 meal credits per month. You can use these credits for either delivery or pickup at any of our partner locations. Credits roll over as long as your subscription is active." },
      { q: "Can I pause or cancel my subscription?", a: "Absolutely. You can pause, skip a week, or cancel your subscription at any time through your account dashboard. No hidden fees, no questions asked." },
      { q: "When do I get charged?", a: "You are charged weekly or monthly depending on your plan, exactly 3 days before your scheduled delivery or pickup day." }
    ]
  },
  {
    category: "Food & Nutrition",
    questions: [
      { q: "Are your meals vegan or gluten-free?", a: "We offer a wide variety of meals, including many vegan, vegetarian, and gluten-free options. You can easily filter our menu by dietary preference." },
      { q: "How long do the meals stay fresh?", a: "Our meals are prepared fresh daily without preservatives. We recommend consuming them within 4-5 days of delivery or pickup for optimal taste and freshness." },
      { q: "Do you use organic ingredients?", a: "We prioritize organic, locally-sourced ingredients whenever possible, especially for the 'Dirty Dozen' produce." }
    ]
  },
  {
    category: "Delivery & Pickup",
    questions: [
      { q: "Where do you deliver?", a: "We currently deliver to the greater metropolitan areas of San Francisco, Los Angeles, New York, and Austin. Enter your zip code on the plans page to check availability." },
      { q: "How does pickup work?", a: "Simply select a partner location near you. Your meals will be waiting in our designated nu3go fridge. Just show your order confirmation to the staff." }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Everything you need to know about the product and billing.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-base focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => {
            const filteredQuestions = category.questions.filter(q => 
              q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
              q.a.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredQuestions.length === 0) return null;

            return (
              <div key={catIdx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {filteredQuestions.map((item, qIdx) => {
                    const index = `${catIdx}-${qIdx}`;
                    const isOpen = openIndex === index;

                    return (
                      <div 
                        key={qIdx} 
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-emerald-200"
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                        >
                          <span className="font-semibold text-gray-900 pr-8">{item.q}</span>
                          <ChevronDown 
                            className={`text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} 
                            size={20} 
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
