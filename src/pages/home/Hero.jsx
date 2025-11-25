import React from 'react';
// Framer Motion-ai import pannunga
import { motion } from "framer-motion"; 
import { ArrowRight } from "lucide-react";

// Image Imports (Nenga use pannira files ithu)
import banimage from "../../assets/equipment-ban.png";
import banimage2 from "../../assets/equipment-ban3.png";
import machine from "../../assets/machine.png";
import videoThumb from "../../assets/video-thumb.jpg"; 

// Animation Variables (motion components-ku idhu dhaan thevai)
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15, // Children elements oru chinna delay-la varum
    },
  },
};

// Individual elements-ku
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


export default function Hero() {
  return (
    <section className="">
      <div className="max-w-[1200px] mx-auto px-4 ">
        
        {/* Main Background Div (Background Image) */}
        <div className='rounded-lg bg-contain bg-[url(https://kfkit.rometheme.pro/built/wp-content/uploads/sites/73/2023/11/industrial-motor-grader-and-backhoe-excavator-on-h-2021-08-26-15-28-01-utc.jpg)] '>
        
        {/* Main Grid Wrapper */}
        <div className='grid md:grid-cols-8 md:gap-6 gap-4 mt-8 mb-4 bg-white/91 py-4 px-4 rounded-lg'>
        
        {/* === COLUMN 1: TEXT & BUTTONS (ANIMATED) === */}
        <motion.div 
          className="col-span-4 md:space-y-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Text Elements */}
          <motion.p variants={itemVariants} className="uppercase text-sm font-semibold text-gray-700 tracking-wider">
            Welcome to Equipment Rentals India
          </motion.p>

          <motion.h1 variants={itemVariants} className="md:text-[18px] text-[16px] font-extrabold text-[#1E1E1E] leading-tight">
            Rent • Buy • Sell • Finance • Spare Parts for Construction, Mining and Industrial Equipment{" "}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 md:mb-6 text-[13px]">
            Equipment Rentals India is India’s leading marketplace to rent, buy, sell, finance and source spare parts for heavy construction equipment. Our database is updated daily with the latest machines and parts available nationwide.
          </motion.p>

          {/* Animated Buttons */}
          <motion.a 
            variants={itemVariants}
            href='/equipmentform' 
            className="bg-orange-400 text-white font-semibold md:px-4 px-2 md:py-1 py-1 inline-flex text-[12px] rounded-md hover:bg-orange-500 transition flex gap-2 items-center">
            Post Equipment Requirement <ArrowRight className='w-3'/>
          </motion.a> <br />
          
          <motion.a 
            variants={itemVariants}
            href='/equipmentform' 
            className="bg-orange-400 text-white font-semibold md:px-4 px-2 md:py-1 py-1 inline-flex text-[12px] rounded-md hover:bg-orange-500 transition flex gap-2 items-center">
            View Equipment Requirement <ArrowRight className='w-3'/>
          </motion.a>

          {/* Animated Stat Block */}
          <motion.div variants={itemVariants} className=" mt-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className='bg-white/80 rounded-lg p-3 md:p-3 text-gray-900 shadow-2xl'>
                <div className="text-[16px] font-bold text-blue-600">1000+</div>
                <div className="text-xs text-gray-600">Listings</div>
              </div>
              <div className='bg-white/80 rounded-lg p-3 md:p-3 text-gray-900 shadow-2xl'>
                <div className="text-[16px] font-bold text-blue-600">All India</div>
                <div className="text-xs text-gray-600">Coverage</div>
              </div>
              <div className='bg-white/80 rounded-lg p-3 md:p-3 text-gray-900 shadow-2xl'>
                <div className="text-[16px] font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* === COLUMN 2: IMAGE (Hover Effect added) === */}
        <div 
          className="col-span-2 bg-orange-100 rounded-2xl h-full 
          // Subtle hover scale and shadow transition added here
          hover:scale-[1.03] transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          <div
            className="relative p-4 md:p-8 flex justify-center items-center h-full bg-cover bg-center bg-no-repeat rounded-xl"
            style={{ backgroundImage: `url(${banimage2})` }}
          >
          </div>
        </div>

        {/* === COLUMN 3: FORM (Button Pulse added) === */}
        <div className="md:col-span-2 col-span-3 space-y-6 bg-gray-300 p-4 rounded-md">
          <div className="">
            <h3 className="text-[13px] text-center font-semibold text-orange-500 mb-4">
              SUBMIT YOUR REQUIREMENTS
            </h3>

            <select className="bg-white text-[11px] w-full mb-3 rounded border border-gray-200 px-2 py-2 focus:outline-none text-gray-400">
              <option>I have equipment which I want to </option>
              <option>Sell </option>
              <option>Rent Out </option>
              <option>I am ok for sell or renting out </option>
            </select>
            <select className="bg-white text-[11px] w-full mb-3 rounded border border-gray-200 px-2 py-2 focus:outline-none text-gray-400">
              <option>I need equipment for </option>
              <option>Rent </option>
              <option>I want to purchase used equipment </option>
              <option>I am ok for rent or purchase </option>
            </select>
            <input className="bg-white text-[11px] w-full mb-3 rounded border border-gray-200 px-2 py-2 focus:outline-none text-gray-400" placeholder='Full Name' />
            <input className="bg-white text-[11px] w-full mb-3 rounded border border-gray-200 px-2 py-2 focus:outline-none text-gray-400" placeholder='Email ID' />
            <input className="bg-white text-[11px] w-full mb-3 rounded border border-gray-200 px-2 py-2 focus:outline-none text-gray-400" placeholder='Phone No' />
            <input className="bg-white text-[11px] w-full mb-3 rounded border border-gray-200 px-2 py-2 focus:outline-none text-gray-400" placeholder='Current location of equipment' />
            
            {/* Tailwind Pulse Animation added here: */}
            <button 
              className="w-full bg-orange-400 text-[12px] text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition 
              relative overflow-hidden 
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-0 
              before:animate-[pulse_2s_ease-out_infinite]"
            >
              Next
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}