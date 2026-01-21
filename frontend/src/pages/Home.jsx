import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Shield, Zap, TrendingUp, Clock, Smartphone, ChevronRight, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui';
import SEO from '../components/SEO';


export default function Home() {
  return (
    <>
      <SEO />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Large Logo */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="mb-8 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
                  <img 
                    src="/LOGO-.png" 
                    alt="Soeltan Medsos" 
                    className="relative h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
                  />
                </motion.div>

                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wide uppercase mb-8">
                  🚀 #1 Most Trusted SMM Panel
                </span>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                  Scale Your Social Growth <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Without Limits.</span>
                </h1>
                
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Professional marketing tools to boost your social media presence. 
                  Instant delivery, secure processing, and premium quality results.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/products">
                    <Button className="h-14 px-10 text-lg rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-0 shadow-lg shadow-indigo-500/50">
                      Get Started <ChevronRight size={20} />
                    </Button>
                  </Link>
                  <Link to="/cek-pesanan">
                    <Button variant="secondary" className="h-14 px-10 text-lg rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border-slate-700">
                      Track Order
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-20 relative"
              >
                <div className="absolute inset-x-0 -top-20 -bottom-20 bg-purple-600/10 blur-3xl rounded-full"></div>
                <div className="relative bg-slate-800/50 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden p-2 md:p-4 backdrop-blur-xl">
                   <div className="bg-slate-900/80 rounded-2xl border border-slate-700 aspect-[16/7] w-full flex items-center justify-center relative overflow-hidden">
                      {/* Abstract Representation of Growth */}
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-4 p-8 opacity-30">
                         <div className="col-span-2 row-span-2 bg-slate-700 rounded-xl"></div>
                         <div className="col-span-2 row-span-1 bg-indigo-900/50 rounded-xl"></div>
                         <div className="col-span-2 row-span-3 bg-slate-700 rounded-xl"></div>
                         <div className="col-span-2 row-span-1 bg-purple-900/50 rounded-xl"></div>
                         <div className="col-span-1 row-span-1 bg-slate-700 rounded-xl"></div>
                      </div>
                      <div className="text-center relative z-10">
                         <p className="font-bold text-slate-600 text-4xl mb-2">Social Growth Engine</p>
                         <p className="text-slate-600 text-sm tracking-[0.3em]">AUTOMATED SYSTEM</p>
                      </div>
                   </div>
                </div>
              </motion.div>

          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
             <div className="text-2xl font-bold text-slate-500 flex items-center gap-2">Instagram</div>
             <div className="text-2xl font-bold text-slate-500 flex items-center gap-2">TikTok</div>
             <div className="text-2xl font-bold text-slate-500 flex items-center gap-2">YouTube</div>
             <div className="text-2xl font-bold text-slate-500 flex items-center gap-2">Facebook</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield size={32} className="text-blue-400" />}
              title="Secure & Private"
              desc="We strictly prioritize your data privacy. No password required for 99% of our services."
            />
            <FeatureCard 
              icon={<Zap size={32} className="text-purple-400" />}
              title="Instant Delivery"
              desc="Our automated system processes your orders immediately after payment confirmation."
            />
            <FeatureCard 
              icon={<Star size={32} className="text-cyan-400" />}
              title="Premium Quality"
              desc="Only high-quality accounts and real interactions to ensure safety for your profile."
            />
          </div>
        </div>
      </section>
      {/* Promo Section Removed */}

    </div>
    </>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 shadow-lg hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
