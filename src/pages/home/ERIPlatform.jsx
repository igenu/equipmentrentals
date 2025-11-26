import React from 'react';
import { ShoppingCart, Wrench, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion'; 

export default function ERIPlatform() {
  const features = [
    {
      title: 'New Equipment',
      description: 'Top-quality, brand new machinery from leading manufacturers',
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Used Equipment',
      description: 'Pre-owned machinery with stringent quality checks and competitive prices',
      icon: Wrench,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Bank Owned',
      description: 'Well-maintained equipment from financial institutions at great prices',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Rent Equipment',
      description: 'Flexible rental options for short-term and long-term projects',
      icon: Users,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    'Extensive regularly updated database',
    'Nationwide equipment availability',
    'Transparent buying and selling process',
    'Quality-checked used equipment',
    'Road construction equipment specialists',
    'Wide network of buyers and sellers',
    'Bank owned & seized equipment options',
    'Easy registration and listing process'
  ];

  
  
  

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.2 
      }
    }
  };

  
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  
  const benefitItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden mt-8">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          
        }}></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4">

        
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="inline-block mb-7">
            <span className="bg-blue-500/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-[12px] font-semibold">
              India's Leading Construction Equipment Aggregator
            </span>
          </div>
          <h1 className="text-lg md:text-lg lg:text-xl font-bold mb-6">
            Buy, Sell, Hire Used and New
            <span className="ml-2 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Construction Equipment Online
            </span>
          </h1>
          <p className="text-gray-300  leading-relaxed text-[13px]">
            Equipment Rentals India (ERI) offers a comprehensive platform to buy, sell, and rent heavy construction machinery. Our online portal boasts an extensive and regularly updated database, ensuring that contractors across the nation can easily access equipment available for sale or rent at various locations throughout India.
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12 items-start">

          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-bold mb-6 text-blue-300">What We Offer</h2>
            
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-[1.02] cursor-pointer"
                    variants={cardVariants}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-[15px] font-bold mb-2">{feature.title}</h3>
                    <p className="text-[13px] text-gray-300">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-3 text-blue-300">Equipment Categories</h3>
              <p className="text-gray-300 text-[13px] mb-4">
                Our extensive inventory includes excavators, loaders, bulldozers, cranes, concrete equipment, road construction machinery, and more. Whether you need new, used, second-hand, bank owned, or seized equipment - we've got you covered.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Excavators', 'Loaders', 'Bulldozers', 'Cranes', 'Road Equipment', 'Concrete'].map((cat, idx) => (
                  <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-[11px] font-medium">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>


          
          <motion.div
            className="bg-white rounded-lg p-8 md:p-6 text-gray-900 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }} 
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Why Choose ERI?
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed text-[13px]">
              We recognize the vital role that road construction equipment plays in the development and maintenance of robust infrastructure. Our platform provides a seamless and transparent process for all your construction equipment needs.
            </p>

            
            <motion.div
              className="space-y-3 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={benefitItemVariants} 
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-[13px]">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-2">For Sellers</h3>
              <p className="text-[13px] text-gray-600 mb-3">
                Register on our website and effortlessly upload your used construction equipment for resale, reaching a vast network of potential buyers nationwide.
              </p>
              <h3 className="font-bold text-gray-900 mb-2">For Buyers</h3>
              <p className="text-[13px] text-gray-600">
                Express your interest in investing in construction machinery and connect with sellers across India through our dynamic marketplace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-[12px] text-white px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg">
                Get Started
                <ArrowRight className="w-3 h-3" />
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-[12px] text-gray-900 px-4 py-2 rounded-lg font-bold transition-all border-2 border-gray-200">
                Browse Equipment
              </button>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}