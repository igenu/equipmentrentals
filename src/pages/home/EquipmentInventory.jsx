import React, { useState } from "react";
import { ChevronRight, Search, FileText } from "lucide-react";
import thumb from "../../assets/video-thumb.jpg";
const tabs = ["Cranes", "Earthmoving", "Road", "Concreting", "Plant", "Miscellaneous"];

const equipmentData = {
  Cranes: {
    title: "Terrific Material Lifting Machines",
    description: "Equipment Rentals India connects construction equipment buyers and sellers, aiming to be the largest aggregator of lifting machines. Our platform features Crawler Cranes, Hydraulic Cranes, Overhead Cranes, Tower Cranes, Telescopic Cranes, Jib Cranes, and Mobile Cranes.",
    locations: "Available in Pune, Ahmedabad, Jaipur, Chandigarh, and other major cities.",
    list: [
      "Crawler Cranes",
      "Hydraulic Cranes",
      "Mobile Cranes",
      "Overhead Cranes",
      "Rough Terrain Cranes",
      "Telescopic Cranes",
    ],
    image: thumb
  },
  Earthmoving: {
    title: "Powerful Earthmoving Equipment",
    description: "From excavators to bulldozers, we offer a comprehensive range of earthmoving machinery for all construction needs. Our suppliers provide well-maintained equipment with competitive pricing and flexible rental terms.",
    locations: "Serving construction sites across Mumbai, Delhi, Bangalore, and Chennai.",
    list: [
      "Excavators",
      "Bulldozers",
      "Backhoe Loaders",
      "Wheel Loaders",
      "Motor Graders",
      "Skid Steer Loaders",
    ],
    image: thumb
  },
  Road: {
    title: "Advanced Road Construction Machinery",
    description: "Quality road construction equipment for building and maintaining highways, streets, and pathways. Our network includes verified suppliers offering the latest technology in road building and maintenance equipment.",
    locations: "Equipment available throughout India for road infrastructure projects.",
    list: [
      "Asphalt Pavers",
      "Road Rollers",
      "Milling Machines",
      "Compactors",
      "Bitumen Sprayers",
    ],
    image: thumb
  },
  Concreting: {
    title: "Complete Concreting Solutions",
    description: "Concrete mixers, batching plants, and transit mixers from trusted suppliers. We provide access to modern concreting equipment that ensures quality output and timely project completion.",
    locations: "Pan-India availability with quick delivery options.",
    list: [
      "Concrete Mixers",
      "Batching Plants",
      "Transit Mixers",
      "Concrete Pumps",
      "Vibrators",
    ],
    image: thumb
  },
  Plant: {
    title: "Industrial Plant Equipment",
    description: "Crushing plants, screening plants, and batching facilities for large-scale construction projects. Our platform connects you with suppliers offering state-of-the-art plant machinery with maintenance support.",
    locations: "Available across industrial hubs and construction zones nationwide.",
    list: [
      "Crushing Plants",
      "Screening Plants",
      "Batching Plants",
      "Asphalt Plants",
    ],
    image: thumb
  },
  Miscellaneous: {
    title: "Essential Construction Accessories",
    description: "Generators, forklifts, scaffolding, and other essential equipment to support your construction operations. Browse our extensive inventory of miscellaneous equipment from reliable vendors.",
    locations: "Stocked in warehouses across all major metropolitan areas.",
    list: [
      "Generators",
      "Forklifts",
      "Scaffolding",
      "Material Hoists",
      "Welding Machines",
    ],
    image: thumb
  },
};

export default function EquipmentInventory() {
  const [activeTab, setActiveTab] = useState("Cranes");
  const currentData = equipmentData[activeTab];

  return (
    <section className="bg-gray-100 py-8 px-4">
      
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h2 className="text-xl  font-bold text-gray-900 mb-3">
          India's Largest Construction
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent ml-2">
            Featured Category
          </span>
        </h2>
        <p className="text-gray-600 text-[14px]">
          Connect with trusted suppliers across major cities
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold rounded-full transition-all duration-300 text-[14px] ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-orange-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="max-w-[1200px] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-3 gap-0">
          
          <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold mb-4 self-start">
              Featured Category
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {currentData.title}
            </h3>
            <p className="text-gray-600  mb-3 text-[13px]">
              {currentData.description}
            </p>
            <p className="text-gray-600  mb-5 text-[13px]">
              {currentData.locations}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-xs font-medium">
                ✓ Verified Suppliers
              </span>
              <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-lg text-xs font-medium">
                ✓ Best Prices
              </span>
            </div>
          </div>

          
          <div className="relative overflow-hidden">
            <img 
              src={currentData.image}
              alt={activeTab}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 text-white">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-[12px]">
                {currentData.list.length}
              </span>
              {activeTab} Available
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-6">
              <ul className="space-y-2">
                {currentData.list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-white/90 group-hover:text-white font-medium text-[13px]">{item}</span>
                    <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-white m-auto text-[12px] text-orange-600 hover:bg-gray-50 font-bold py-2 px-4 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 group">
              View All Equipment
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={13} />
            </button>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 max-w-2xl mx-auto">
        <button className="text-[13px]  bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl transition-all hover:shadow-xl flex items-center justify-center gap-3 group">
          <Search size={12} className="group-hover:scale-110 transition-transform" />
          Search Equipment
        </button>
        <button className="text-[13px]  bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-xl transition-all hover:shadow-xl flex items-center justify-center gap-3 group">
          <FileText size={12} className="group-hover:scale-110 transition-transform" />
          List Equipment
        </button>
      </div>
    </section>
  );
}