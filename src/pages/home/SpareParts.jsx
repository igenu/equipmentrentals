import React from "react";
import { Package, Truck, BadgeCheck, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // <-- IMPORTED

export default function SpareParts() {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Wide Catalogue",
      description: "Extensive inventory of aftermarket parts"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Doorstep delivery across India"
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Quality Assured",
      description: "High-quality certified components"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Response",
      description: "Responsive support & competitive pricing"
    }
  ];

  // Animation variants for the features grid items (Staggered fade-up)
  const featureItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Animation variants for the main content block (Left side, slide-in from left)
  const contentVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  // Animation variants for the stats bar (Slide-up from bottom)
  const statsVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
  };

  return (
    <section className="relative md:py-10 py-10 px-4 overflow-hidden bg-gray-900">

      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-orange-400 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-orange-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          
          <motion.div
            className="text-white space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible, only once
            variants={contentVariants}
          >
            <div className="inline-block">
              <span className="text-orange-500 font-semibold text-[13px] tracking-wider uppercase border-l-4 border-orange-500 pl-3">
                Equipment Solutions
              </span>
            </div>

            <h2 className="text-xl md:text-3xl font-bold leading-tight"> 
              SPARE{" "}
              <span className="text-orange-500 relative">
                PARTS
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C60 2 140 2 198 10" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-gray-300 text-[15px] leading-relaxed">
              Equipment Rentals India brings the same market-leading reliability to spare parts that we do to equipment. Discover India's widest catalogue of high-quality aftermarket parts for excavators, loaders, cranes, pavers, and more.
            </p>

            <p className="text-gray-400 text-[15px] leading-relaxed">
              Available to buy or request in just a few clicks. With doorstep delivery, responsive support, and competitive pricing, ERI makes keeping your machines running easier and faster than ever.
            </p>

            <a href="/sparepartsform" className="group bg-orange-500 hover:bg-orange-600 text-[13px] text-white font-bold px-4 py-2 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105">
              Find Spare Parts
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>


          
          <div className="grid grid-cols-2 gap-6"> 
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible, only once
                variants={featureItemVariants}
                transition={{ delay: index * 0.15 }} // Stagger the animation start
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.03] group shadow-xl" // Added shadow and scale for better effect
              >
                <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-[16px] mb-2"> 
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-[14px]"> 
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


        
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible, only once
          variants={statsVariants}
        >
          <div className="text-center p-4 py-7 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
            <div className="text-2xl font-bold text-orange-500 mb-1">10K+</div> 
            <div className="text-gray-400 text-[13px]">Parts Available</div>
          </div>
          <div className="text-center p-4 py-7 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
            <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
            <div className="text-gray-400 text-[13px]">Support</div>
          </div>
          <div className="text-center p-4 py-7 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
            <div className="text-2xl font-bold text-orange-500 mb-1">48h</div>
            <div className="text-gray-400 text-[13px]">Delivery Time</div>
          </div>
          <div className="text-center p-4 py-7 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
            <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
            <div className="text-gray-400 text-[13px]">Genuine Parts</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}