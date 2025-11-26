import React, { useState } from "react";
import { Wrench, Truck, Settings, ClipboardList, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; // Import motion

// Animation Variants for general fade-up effect
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1, // Stagger children to appear one after another
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const WhatWeOffer = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Comprehensive Machinery Selection",
      desc: "Access a wide range of construction and heavy equipment from trusted brands to suit every project requirement.",
      features: ["Multiple Brands", "Latest Models", "All Categories"],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Flexible and Customizable Rental Plans",
      desc: "Choose from hourly, daily, weekly, or monthly rental options designed to fit your specific project timelines and budgets.",
      features: ["Hourly Plans", "Daily/Weekly", "Monthly Options"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Professional Maintenance Support",
      desc: "Ensure uninterrupted performance with regular maintenance, on-site service, and 24/7 technical assistance.",
      features: ["24/7 Support", "On-site Service", "Regular Maintenance"],
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Expert & Personalized Consultation",
      desc: "Get professional advice from our experts to choose the right equipment and rental strategy for your project.",
      features: ["Expert Guidance", "Custom Solutions", "Project Planning"],
    },
  ];

  return (
    <section className=" pt-2 pb-10 relative">
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        
        <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-block">
            <span className="uppercase text-[9px] font-bold tracking-widest text-orange-500 bg-gray-900 px-3 py-1.5 rounded-full inline-block">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mt-6 leading-tight">
            <span className="text-orange-600 italic font-semibold relative">
              Top-Tier
              <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8"><path d="M0 4 Q50 0, 100 4 T200 4" stroke="#f97316" stroke-width="2" fill="none"></path></svg>
            </span>{" "}
            Machinery & Equipment Rentals for Every Project Need
          </h2>
          
          <p className="text-[13px] text-gray-600 mt-4 leading-relaxed">
            From small-scale projects to large industrial developments, ERI
            delivers reliable, efficient, and affordable equipment rental
            solutions to help you achieve your goals faster.
          </p>
        </motion.div>

        
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} 
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants} 
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
            >
              <div className="p-8">
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'bg-orange-500 text-white scale-110' 
                      : 'bg-orange-50 text-orange-500'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
                  {service.desc}
                </p>

                
                <div className="space-y-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-[13px] text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                
                <button className="text-[13px] text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              
              <div className={`h-1 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ${
                hoveredCard === index ? 'w-full' : 'w-0'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div 
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 shadow-xl text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-md md:text-2xl font-bold text-white mb-3">
            Ready to Get Started with Your Project?
          </h3>
          <p className="text-[13px] text-orange-50 mb-6 max-w-2xl mx-auto">
            Connect with our equipment specialists today and discover the perfect rental solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-[13px]">
              Discover More
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition-all text-[13px]">
              Contact Us
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhatWeOffer;