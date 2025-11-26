import React, { useState } from "react";
import { ChevronDown, Upload, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// Variants for the overall scroll-in effect (used for the three main columns)
const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            type: "spring",
            stiffness: 70
        }
    }
};

// Variants for the accordion content (expand/collapse animation)
const accordionVariants = {
    collapsed: { height: 0, opacity: 0, overflow: 'hidden' },
    expanded: {
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

// Variants for the continuous pulsing animation on the CTA icon
const pulseVariant = {
    initial: { scale: 1 },
    animate: {
        scale: 1.1,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut"
        }
    }
};


export default function Footer() {
    const [openCategory, setOpenCategory] = useState(null);

    const categories = [
        {
            name: "CRANES",
            items: ["Crawler Cranes", "Hydraulic Cranes", "Mobile Cranes", "Tower Cranes", "Truck Mounted Cranes"]
        },
        {
            name: "ROAD MACHINERY",
            items: ["Asphalt Pavers", "Road Rollers", "Milling Machines", "Compactors", "Motor Graders"]
        },
        {
            name: "EARTH MOVING MACHINERY",
            items: ["Crawler Loader", "Backhoe Loader", "Excavators", "Dumper", "Loader", "Bulldozer"],
            highlight: true
        },
        {
            name: "CONCRETE MACHINERY",
            items: ["Concrete Mixers", "Batching Plants", "Transit Mixers", "Concrete Pumps"]
        },
        {
            name: "PLANTS & MACHINERY",
            items: ["Crushing Plants", "Screening Plants", "Asphalt Plants"]
        },
        {
            name: "MISCELLANEOUS",
            items: ["Generators", "Forklifts", "Scaffolding", "Material Hoists"]
        }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">

            <div className="max-w-[1200px] mx-auto px-4 md:py-16 py-8">
                <div className="grid lg:grid-cols-12 gap-8">

                    
                    <motion.div
                        className="lg:col-span-4"
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h2 className="text-lg font-bold mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-orange-500"></span>
                            EQUIPMENT CATEGORIES
                        </h2>
                        <div className="space-y-2">
                            {categories.map((category, index) => (
                                <div key={index} className="border-b border-gray-800">
                                    <button
                                        onClick={() => setOpenCategory(openCategory === index ? null : index)}
                                        className={`w-full py-3 px-4 flex items-center justify-between transition-all text-[13px] ${category.highlight
                                                ? "text-orange-400 font-semibold"
                                                : "hover:bg-gray-800 text-gray-300"
                                            }`}
                                    >
                                        <span>{category.name}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openCategory === index ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    
                                    <AnimatePresence initial={false}>
                                        {openCategory === index && (
                                            <motion.div
                                                key="content"
                                                initial="collapsed"
                                                animate="expanded"
                                                exit="collapsed"
                                                variants={accordionVariants}
                                            >
                                                <div className="bg-gray-800/50 px-4 py-3 space-y-2">
                                                    {category.items.map((item, i) => (
                                                        <div key={i} className="text-sm text-gray-400 hover:text-orange-500 cursor-pointer pl-4 py-1">
                                                            • {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>


                    
                    <motion.div
                        className="lg:col-span-4 flex flex-col justify-center items-center text-center bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl p-8 border border-orange-500/20"
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        
                        <motion.div
                            className="w-15 h-15 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/50"
                            variants={pulseVariant}
                            initial="initial"
                            animate="animate"
                        >
                            <Upload className="w-6 h-6" />
                        </motion.div>
                        <h3 className="text-lg font-bold mb-3">STARTING A NEW PROJECT?</h3>
                        <p className="text-gray-400 mb-6 text-[12px]">
                            Upload your equipment requirement and get competitive quotes from verified suppliers
                        </p>
                        <button className="text-[13px] bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Upload Equipment Requirement
                        </button>
                    </motion.div>


                    
                    <motion.div
                        className="lg:col-span-4 space-y-6"
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >

                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg p-4 border border-blue-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center">
                                    <span className="text-xl font-bold rounded-full p-2 py-3 bg-white">
                                        <img src={logo} alt="ERI Logo" className="w-10 " />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Equipment Rentals India</h4>
                                    <div className="flex items-center gap-1 text-sm text-gray-400">
                                        <Facebook className="w-4 h-4 text-blue-500" />
                                        <span>3.4K followers</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-[12px] text-white font-semibold py-1.5 rounded-lg transition-all flex items-center justify-center gap-2">
                                <Facebook className="w-3 h-3" />
                                Follow Page
                            </button>
                        </div>


                        
                        <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
                            <h4 className="font-bold text-[14px] mb-4">Get In Touch</h4>

                            
                            {[
                                { icon: Phone, text: "+91-9311494448" },
                                { icon: Phone, text: "+91-11-46562783" },
                                { icon: Mail, text: "info@equipmentrentalsindia.com" }
                            ].map((contact, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 text-[13px] text-gray-400 group cursor-pointer"
                                    whileHover={{ x: 5 }} // Slight shift to the right on hover
                                    transition={{ duration: 0.2 }}
                                >
                                    <contact.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                                    <span className="group-hover:text-white transition-colors">{contact.text}</span>
                                </motion.div>
                            ))}

                        </div>


                        
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all"
                                    whileHover={{ scale: 1.2, rotate: 10 }} // Pop up and rotate on hover
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>


            <div className="border-t border-gray-800">
                <div className="max-w-[1200px] mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-4 gap-6 md:text-[13px] text-[11px] text-gray-400">
                        <p>© 2025 Equipment Rentals India. All rights reserved.</p>
                        <div className="flex gap-6 text-[10px] md:text-[13px]">
                            <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
                            <a href="/BlogPage" className="hover:text-orange-500 transition-colors">View the Latest Blog</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Job Opportunities</a>
                            <a href="#" className="hover:text-orange-500 transition-colors">Advertise With Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}