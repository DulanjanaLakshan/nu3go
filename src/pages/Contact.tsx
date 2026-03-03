import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, HelpCircle, ArrowRight, FileText, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            How can we help you today?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Whether you have a question about your plan, need help with an order, or just want to say hello, our team is here for you.
          </motion.p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <MessageSquare size={32} />,
              title: 'Live Chat',
              desc: 'Chat with our support team in real-time.',
              action: 'Start Chat',
              color: 'emerald'
            },
            {
              icon: <Mail size={32} />,
              title: 'Email Us',
              desc: 'We aim to respond within 24 hours.',
              action: 'hello@nu3go.com',
              color: 'orange'
            },
            {
              icon: <Phone size={32} />,
              title: 'Call Us',
              desc: 'Mon-Fri from 9am to 6pm PST.',
              action: '1-800-NU3-GOOO',
              color: 'blue'
            }
          ].map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto bg-${method.color}-50 text-${method.color}-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.desc}</p>
              <span className={`inline-flex items-center gap-2 font-semibold text-${method.color}-600 group-hover:text-${method.color}-700 transition-colors`}>
                {method.action} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
            
            <form className="space-y-6">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Issue</option>
                  <option>Subscription Help</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white resize-none" 
                  rows={5} 
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Self-Service Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find answers quickly</h2>
              <p className="text-gray-600 mb-8">
                Before reaching out, you might find the answer you're looking for in our help center or FAQ section.
              </p>
            </div>

            <div className="space-y-4">
              <Link to="/faq" className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">Frequently Asked Questions</h3>
                    <p className="text-sm text-gray-500">Browse answers to common questions about plans, delivery, and more.</p>
                  </div>
                </div>
              </Link>

              <Link to="/plans" className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">Plan Details & Pricing</h3>
                    <p className="text-sm text-gray-500">Learn more about how our subscriptions work and what's included.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-emerald-900 rounded-3xl p-8 text-white mt-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Corporate Inquiries</h3>
                <p className="text-emerald-100 mb-6">
                  Looking to bring healthy breakfasts to your office? We offer special corporate plans and bulk discounts.
                </p>
                <Link to="/corporate" className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
