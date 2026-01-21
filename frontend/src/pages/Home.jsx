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
      {/* Web Dev Promo Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wide uppercase">
                New Service Available
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ingin Punya Website <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Seperti Ini?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Tingkatkan kredibilitas bisnis Anda dengan website profesional. Desain modern, cepat, dan responsif untuk semua perangkat.
                Kami siap membantu mewujudkan website impian Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://wa.me/6282352835382?text=Halo%20Admin,%20saya%20tertarik%20jasa%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-100 border-none shadow-none">
                    Konsultasi Gratis <ArrowRight size={20} />
                  </Button>
                </a>
              </div>

              <div className="flex gap-8 pt-4 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-slate-500">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-500">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
               <motion.div
                 whileHover={{ scale: 1.02, rotate: -1 }}
                 className="relative z-10 bg-slate-800 rounded-3xl p-4 border border-slate-700 shadow-2xl"
               >
                 {/* Browser Mockup */}
                 <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-[4/3] border border-slate-800 relative">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {/* Content Placeholder */}
                    <div className="mt-10 p-8 grid gap-4">
                       <div className="h-32 bg-slate-800 rounded-xl mb-4 opacity-50"></div>
                       <div className="flex gap-4">
                          <div className="flex-1 h-20 bg-slate-800 rounded-xl opacity-50"></div>
                          <div className="flex-1 h-20 bg-slate-800 rounded-xl opacity-50"></div>
                       </div>
                    </div>
                    
                    {/* Floating Label */}
                     <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                        Rp 100k Start
                     </div>
                 </div>
               </motion.div>
               {/* Back Glow */}
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] blur-xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

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
