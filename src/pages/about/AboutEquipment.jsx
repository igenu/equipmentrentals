import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView
import aboutImg from "../../assets/about-equipments.jpg";
import puneetImg from "../../assets/Puneet.png";

// Animation Variants for general fade-up effect
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const AboutERI = () => {
  const initialBars = [
    { title: "Operational Excellence", value: 0, target: 90 },
    { title: "Customer Satisfaction", value: 0, target: 95 },
    { title: "Innovative Solutions", value: 0, target: 92 },
    { title: "Sustainable Practices", value: 0, target: 88 },
  ];
  const [progressBars, setProgressBars] = useState(initialBars);

  // Ref for the progress bar section to trigger the animation
  const barRef = useRef(null);
  const isBarsInView = useInView(barRef, { once: true, amount: 0.5 }); // Trigger when 50% visible, only once

  // Progress Bar Animation Logic
  useEffect(() => {
    if (isBarsInView) {
      const timer = setInterval(() => {
        setProgressBars((prev) =>
          prev.map((bar) => ({
            ...bar,
            value: bar.value < bar.target ? bar.value + 1 : bar.target,
          }))
        );
      }, 20); // Speed of the count

      return () => clearInterval(timer);
    } else {
      // Reset values when scrolled out (optional, for re-runs)
      setProgressBars(initialBars.map(bar => ({ ...bar, value: 0 })));
    }
  }, [isBarsInView]);

  return (
    <section id="about-section" className="md:py-18 py-10 relative">
      {/* Decorative Elements (kept) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ========== COLUMN 1: Image Section ========== */}
          <motion.div
            className="relative group"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            transition={{ duration: 0.8 }}
          >
            
            {/* Image Styling (kept) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl z-10"></div>
            <img
              src={aboutImg}
              alt="About Equipment Rentals India"
              className="rounded-2xl w-full h-full object-cover  transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Floating Badge (Animation added) */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-2xl z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Trust</div>
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-4 z-20 bg-gray-100 p-3 rounded-2xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <img src={puneetImg} alt="Puneet" className="rounded-2xl w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500" />
            </motion.div>
          </motion.div>

          {/* ========== COLUMN 2: Content Section ========== */}
          <div className="flex flex-col justify-center col-span-2">

            {/* Tag (Animation added) */}
            <motion.div
              className="inline-block"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="uppercase text-[9px] font-bold tracking-widest text-orange-500 bg-gray-900 px-3 py-1.5 rounded-full inline-block">
                About Us
              </h4>
            </motion.div>

            {/* Title (Animation added) */}
            <motion.h2
              className="md:text-lg text-md font-bold text-gray-800 mt-4 leading-tight"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2 }}
            >
              Discover Our{" "}
              <span className="text-orange-500 italic font-semibold relative">
                Journey and Vision
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M0 4 Q50 0, 100 4 T200 4" stroke="#f97316" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </motion.h2>

            {/* Narrative Paragraphs (Animation added) */}
            <motion.div
              className="space-y-4 mt-6 text-[13px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                Equipment Rentals India (ERI) is a unit of Clicks & Sales Pvt Ltd.
                Clicks & Sales Pvt Ltd has been a pioneer in web and digital
                technologies, at the forefront of disrupting digital marketing and
                introducing innovations in web and mobile applications.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                Mr. Puneet Chadha, the co-founder of Clicks & Sales Pvt Ltd, is
                the visionary behind ERI. With a background at Greaves Cotton Ltd,
                ICICI Bank, CitiBank, SREI, and GE Capital, he brings deep
                expertise in construction equipment and financial operations.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                ERI was founded to serve as a construction equipment aggregator in
                India, focusing on the used and rental segments. It bridges the
                gap between companies with idle equipment and those in need,
                creating a fast, transparent, and efficient deployment process.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                ERI has offices in New Delhi, Bangalore, Chennai, and Mumbai. For
                inquiries, partnerships, or investments, please reach out at{" "}
                <a
                  href="mailto:info@equipmentrentalsindia.com"
                  className="text-orange-500 font-semibold hover:text-orange-600   underline-offset-4"
                >
                  info@equipmentrentalsindia.com
                </a>
                .
              </p>
            </motion.div>

            <div className="flex gap-6 mt-8 ">
              {/* Progress Bars (Section triggered by ref) */}
              <motion.div
                ref={barRef} // Attach ref here
                className="space-y-4 bg-white p-4 rounded-lg shadow-lg w-full"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text- font-semibold text-gray-800 mb-4">Our Strengths</h3>
                {progressBars.map((bar, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                      <span className="group-hover:text-orange-500 transition-colors text-[13px]">{bar.title}</span>
                      <span className="text-orange-500 font-bold">{bar.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                        style={{ width: `${bar.value}%` }}
                      >
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              
              {/* Vision & Mission Cards (Animations added) */}
              <motion.div
                className="flex flex-col  gap-6" // Use sm:flex-row for horizontal layout on small screens and up
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.1, delay: 0.5 }} // Staggered children animation
              >
                {/* Vision Card */}
                <motion.div
                  className="relative flex-1 flex flex-col  justify-center bg-gradient-to-br from-orange-50 to-white shadow-lg p-4 rounded-lg  hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center absolute top-3 right-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-md font-bold text-gray-800">Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[13px] ">
                    Revolutionizing equipment rentals with innovation and excellence.
                  </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  className="relative flex-1 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white shadow-lg p-4 rounded-lg  hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center absolute top-3 right-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-md font-bold text-gray-800">Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[13px]">
                    Delivering top-quality rentals and exceptional customer support.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutERI;