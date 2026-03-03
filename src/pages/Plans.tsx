import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Plans() {
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('delivery');
  const [planType, setPlanType] = useState<'weekly' | 'hybrid'>('hybrid');

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Choose your perfect plan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Flexible subscriptions designed for your lifestyle. No commitments, cancel anytime.
        </p>
      </div>

      {/* Toggles */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex relative">
          <button
            onClick={() => setDeliveryType('pickup')}
            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors ${
              deliveryType === 'pickup' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Pickup
          </button>
          <button
            onClick={() => setDeliveryType('delivery')}
            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors ${
              deliveryType === 'delivery' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Delivery
          </button>
          <motion.div
            layoutId="deliveryToggle"
            className="absolute top-1.5 bottom-1.5 w-1/2 bg-white rounded-xl shadow-sm"
            initial={false}
            animate={{ x: deliveryType === 'pickup' ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        <div className="bg-emerald-50 p-1.5 rounded-2xl inline-flex relative border border-emerald-100">
          <button
            onClick={() => setPlanType('weekly')}
            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors ${
              planType === 'weekly' ? 'text-emerald-900' : 'text-emerald-600 hover:text-emerald-700'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setPlanType('hybrid')}
            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors ${
              planType === 'hybrid' ? 'text-emerald-900' : 'text-emerald-600 hover:text-emerald-700'
            }`}
          >
            Hybrid (Monthly)
          </button>
          <motion.div
            layoutId="planToggle"
            className="absolute top-1.5 bottom-1.5 w-1/2 bg-white rounded-xl shadow-sm border border-emerald-200"
            initial={false}
            animate={{ x: planType === 'weekly' ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        {/* Card 1 */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-500 mb-6">Perfect for trying us out.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-gray-900">
              ${planType === 'weekly' ? '45' : '150'}
            </span>
            <span className="text-gray-500 font-medium">/{planType === 'weekly' ? 'week' : 'month'}</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-gray-600">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{planType === 'weekly' ? '3 meals per week' : '12 meals per month'}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{deliveryType === 'delivery' ? 'Standard delivery fee' : 'Free pickup'}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Standard menu access</span>
            </li>
          </ul>
          <Link to="/signup" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold py-4 rounded-xl transition-colors">
            Select Starter
          </Link>
        </div>

        {/* Card 2 - Highlighted */}
        <div className="bg-gray-900 rounded-[2rem] p-8 shadow-2xl flex flex-col relative transform md:-translate-y-4 border border-gray-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <p className="text-gray-400 mb-6">For the daily routine.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">
              ${planType === 'weekly' ? '70' : '220'}
            </span>
            <span className="text-gray-400 font-medium">/{planType === 'weekly' ? 'week' : 'month'}</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <span className="font-medium">{planType === 'weekly' ? '5 meals per week' : '20 meals per month'}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>{deliveryType === 'delivery' ? 'Free delivery included' : 'Priority pickup'}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>Premium menu access</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>1 free smoothie per week</span>
            </li>
          </ul>
          <Link to="/signup" className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-emerald-500/20">
            Select Pro
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite</h3>
          <p className="text-gray-500 mb-6">Total morning optimization.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-gray-900">
              ${planType === 'weekly' ? '95' : '300'}
            </span>
            <span className="text-gray-500 font-medium">/{planType === 'weekly' ? 'week' : 'month'}</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-gray-600">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{planType === 'weekly' ? '7 meals per week' : '28 meals per month'}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{deliveryType === 'delivery' ? 'Free priority delivery' : 'Priority pickup'}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>All menu access + Add-ons</span>
            </li>
          </ul>
          <Link to="/signup" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold py-4 rounded-xl transition-colors">
            Select Elite
          </Link>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="py-4 px-6 font-semibold text-gray-500 w-1/3">Features</th>
                <th className="py-4 px-6 font-bold text-gray-900 text-center w-1/5">Starter</th>
                <th className="py-4 px-6 font-bold text-emerald-600 text-center w-1/5 bg-emerald-50/50 rounded-t-2xl">Pro</th>
                <th className="py-4 px-6 font-bold text-gray-900 text-center w-1/5">Elite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { feature: 'Pause or cancel anytime', starter: true, pro: true, elite: true },
                { feature: 'Nutritional info provided', starter: true, pro: true, elite: true },
                { feature: 'Premium menu items', starter: false, pro: true, elite: true },
                { feature: 'Free delivery', starter: false, pro: true, elite: true },
                { feature: 'Nutritionist consultation', starter: false, pro: false, elite: true },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-gray-700 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {row.starter ? <CheckCircle2 size={20} className="text-emerald-500 mx-auto" /> : <X size={20} className="text-gray-300 mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center bg-emerald-50/30">
                    {row.pro ? <CheckCircle2 size={20} className="text-emerald-500 mx-auto" /> : <X size={20} className="text-gray-300 mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.elite ? <CheckCircle2 size={20} className="text-emerald-500 mx-auto" /> : <X size={20} className="text-gray-300 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-50 rounded-[3rem] p-12 text-center max-w-4xl mx-auto border border-emerald-100">
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">Still not sure?</h2>
        <p className="text-emerald-700 mb-8 max-w-xl mx-auto">
          Try our Starter plan for a week. If you don't love it, we'll refund your first order. No questions asked.
        </p>
        <Link to="/signup" className="inline-flex bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5">
          Start Your Trial
        </Link>
      </div>
    </div>
  );
}
