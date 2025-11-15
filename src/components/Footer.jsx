import React, { useState } from "react";
import { ChevronDown, Upload, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

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
      
      <div className="max-w-7xl mx-auto px-4 md:py-16 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500"></span>
              EQUIPMENT CATEGORIES
            </h2>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="border-b border-gray-800">
                  <button
                    onClick={() => setOpenCategory(openCategory === index ? null : index)}
                    className={`w-full py-3 px-4 flex items-center justify-between transition-all text-[14px] md:text-[16px] ${
                      category.highlight 
                        ? "" 
                        : "hover:bg-gray-800 text-gray-300"
                    }`}
                  >
                    <span>{category.name}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${openCategory === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openCategory === index && (
                    <div className="bg-gray-800/50 px-4 py-3 space-y-2">
                      {category.items.map((item, i) => (
                        <div key={i} className="text-sm text-gray-400 hover:text-orange-500 cursor-pointer pl-4 py-1">
                          • {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          
          <div className="lg:col-span-4 flex flex-col justify-center items-center text-center bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl p-8 border border-orange-500/20">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/50">
              <Upload className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3">STARTING A NEW PROJECT?</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Upload your equipment requirement and get competitive quotes from verified suppliers
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Equipment Requirement
            </button>
          </div>

          
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">E</span>
                </div>
                <div>
                  <h4 className="font-bold">Equipment Rentals India</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Facebook className="w-4 h-4 text-blue-500" />
                    <span>3.4K followers</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                <Facebook className="w-5 h-5" />
                Follow Page
              </button>
            </div>

            
            <div className="bg-gray-800/50 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
              
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91-9311494448</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-orange-500" />
                <span> +91-11-46562783</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@equipmentrentalsindia.com</span>
              </div>
            </div>

            
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:gap-4 gap-6 text-sm text-gray-400">
            <p>© 2025 Equipment Rentals India. All rights reserved.</p>
            <div className="flex gap-6 text-[12px] md:text-[14px]">
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