import React, { useState } from "react";
import { Flame, CheckCircle, Star, Tag, ArrowRight, Heart, Eye, TrendingUp } from "lucide-react";
import thumb from "../../assets/video-thumb.jpg";
import { motion } from "framer-motion"; 

const data = {
  all: [
    {
      id: 1,
      title: "Bauer BG28 Piling Rig",
      desc: "Bauer BG28 Piling Rig is a hot commodity in the market due to its versatility and power. Contact us today!",
      img: thumb,
      tag: "Hot deal",
      views: "1.2K",
      price: "₹45L"
    },
    {
      id: 8, 
      title: "CAT 320 Excavator",
      desc: "Highly reliable CAT 320 Excavator available for short and long-term rental contracts across Maharashtra.",
      img: thumb,
      tag: "Verified",
      views: "950",
      price: "₹42L"
    },
    {
      id: 2,
      title: "TATA EX-200 SUPER",
      desc: "TATA EX-200 SUPER is available for sale! Well-maintained unit with low engine hours.",
      img: thumb,
      tag: "Verified",
      views: "890",
      price: "₹32L"
    },
    {
      id: 9, 
      title: "Volvo Wheel Loader",
      desc: "L120H Wheel Loader, perfect for aggregate and material handling jobs. Finance options available.",
      img: thumb,
      tag: "Latest",
      views: "756",
      price: "₹28L"
    },
    {
      id: 6,
      title: "Pneumatic Roller",
      desc: "Used Sakai Pneumatic Tired Roller, excellent for asphalt compaction and road work.",
      img: thumb,
      tag: "Best Deal",
      views: "756",
      price: "₹18L"
    },
    {
      id: 7,
      title: "Tractor Dozer",
      desc: "Mahindra Tractor Dozer, great for small farm land leveling and basic earthmoving.",
      img: thumb,
      tag: "Hot deal",
      views: "500",
      price: "₹12L"
    },
  ],
  toppicks: [
    {
      id: 3,
      title: "CASE Dozer",
      desc: "CASE Dozer 2050 M is available for sale! High horsepower unit ready for mining applications.",
      img: thumb,
      tag: "Top Pick",
      views: "2.1K",
      price: "₹52L"
    },
    {
      id: 1,
      title: "Bauer BG28 Piling Rig",
      desc: "Bauer BG28 Piling Rig is a hot commodity in the market due to its versatility and power.",
      img: thumb,
      tag: "Hot deal",
      views: "1.2K",
      price: "₹45L"
    },
  ],
  latest: [
    {
      id: 4,
      title: "JCB Backhoe Loader",
      desc: "Brand new JCB Backhoe loader is available for sale! Zero hours, direct from dealer.",
      img: thumb,
      tag: "Latest",
      views: "1.5K",
      price: "₹38L"
    },
    {
      id: 9,
      title: "Volvo Wheel Loader",
      desc: "L120H Wheel Loader, perfect for aggregate and material handling jobs.",
      img: thumb,
      tag: "Latest",
      views: "756",
      price: "₹28L"
    },
  ],
  cheap: [
    {
      id: 5,
      title: "Komatsu Grader",
      desc: "Great condition grader at low cost, perfect for budget-conscious buyers.",
      img: thumb,
      tag: "Best Deal",
      views: "945",
      price: "₹22L"
    },
    {
      id: 6,
      title: "Pneumatic Roller",
      desc: "Used Sakai Pneumatic Tired Roller, excellent for asphalt compaction and road work.",
      img: thumb,
      tag: "Best Deal",
      views: "756",
      price: "₹18L"
    },
    {
      id: 7,
      title: "Tractor Dozer",
      desc: "Mahindra Tractor Dozer, great for small farm land leveling and basic earthmoving.",
      img: thumb,
      tag: "Hot deal",
      views: "500",
      price: "₹12L"
    },
  ],
};


const containerVariants = {
  
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1, 
      when: "afterChildren"
    }
  },
  
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2, 
      when: "beforeChildren",
    },
  },
};



const itemVariants = {
  
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  },
};


const getDelay = (index) => 0.1 + index * 0.05; 

export default function EquipmentTrends() {
  const [active, setActive] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = [
    
    { id: "all", label: "All Equipment", icon: <Star size={20} />, gradient: "from-purple-500 to-indigo-600", count: data.all.length },
    { id: "toppicks", label: "Top Picks", icon: <Tag size={20} />, gradient: "from-blue-500 to-cyan-600", count: data.toppicks.length },
    { id: "latest", label: "Latest Arrivals", icon: <CheckCircle size={20} />, gradient: "from-green-500 to-emerald-600", count: data.latest.length },
    { id: "cheap", label: "Best Deals", icon: <Flame size={20} />, gradient: "from-orange-500 to-red-600", count: data.cheap.length },
  ];

  
  const activeData = data[active] || data.all;


  return (
    <section className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* HEADER: Still animates on load for a fast start */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-400 text-white px-5 py-1 rounded-full text-[11px] font-bold mb-4 shadow-lg">
            <TrendingUp size={14} />
            <span>LIVE MARKETPLACE</span>
          </div>
          <h1 className="text-xl md:text-xl font-black text-gray-900 mb-3">
            Equipment <span className="text-orange-500">Marketplace</span>
          </h1>
          <p className="text-gray-600 text-[13px] max-w-2xl mx-auto">
            Discover India's largest construction equipment inventory
          </p>
        </motion.div>

        {/* --- */}

        <div className="grid lg:grid-cols-4 gap-8">

          {/* LEFT SIDE: TAB NAVIGATION (Still animates on load) */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 sticky top-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* ... (Tab navigation content remains the same) ... */}
              <div className="mb-4 p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-white">
                <h3 className="font-bold text-[14px] mb-1">Browse Categories</h3>
                <p className="text-gray-300 text-xs">Select a category below</p>
              </div>

              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 group ${active === tab.id
                      ? "shadow-lg scale-[1.02]"
                      : "bg-gray-50 hover:bg-gray-100 hover:scale-[1.01]"
                      }`}
                  >
                    <div className={`${active === tab.id ? `bg-gradient-to-r ${tab.gradient} p-3 rounded-lg` : 'p-0'}`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${active === tab.id
                          ? "bg-white/20 text-white"
                          : "bg-white text-gray-700 group-hover:scale-110"
                          } transition-all`}>
                          {tab.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`font-bold text-[14px] mb-1 ${active === tab.id ? "text-white" : "text-gray-900"
                            }`}>
                            {tab.label}
                          </div>
                          <div className={`text-xs ${active === tab.id ? "text-white/80" : "text-gray-500"
                            }`}>
                            {tab.count} items
                          </div>
                        </div>
                        {active === tab.id && (
                          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white">
                <div className="text-lg font-black mb-1">500+</div>
                <div className="text-xs text-white/90">Total Equipment Available</div>
              </div>
            </motion.div>
          </div>

          {/* --- */}

          {/* RIGHT SIDE: EQUIPMENT CARDS (Scroll-Triggered) */}
          <div className="lg:col-span-3">

            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${tabs.find(t => t.id === active).gradient} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                    {tabs.find(t => t.id === active).icon}
                  </div>
                  <div>
                    <h2 className="text-[16px] font-black text-gray-900">
                      {tabs.find(t => t.id === active).label}
                    </h2>
                    <p className="text-gray-500 text-[13px]">
                      Showing {activeData.length} premium listings
                    </p>
                  </div>
                </div>
                <a href="/browseequipment" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-bold text-[11px] transition-all hover:scale-105 flex items-center gap-2">
                  View All
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* SCROLL TRIGGER: Items will now animate as they enter the viewport */}
            <div className="grid md:grid-cols-3 gap-6">
              {activeData.map((item, index) => (
                <motion.div
                  key={item.id}
                  
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.4 }} 
                  variants={itemVariants}
                  transition={{
                    ...itemVariants.visible.transition,
                    delay: getDelay(index), 
                  }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 flex flex-col justify-between"
                >
                  {/* ... (Card content remains the same) ... */}
                  <div>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                        <span className={`px-3 py-1 inline-block rounded-full text-xs font-bold text-white backdrop-blur-sm ${item.tag === "Hot deal" ? "bg-red-500/90" : (item.tag === "Verified" || item.tag === "Latest" ? "bg-green-500/90" : "bg-blue-500/90")
                          }`}>
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                          <Eye size={11} />
                          {item.views}
                        </div>
                      </div>

                      <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${hoveredCard === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 py-2 rounded-lg font-bold text-[13px] transition-all shadow-lg">
                            Quick View
                          </button>
                          <button className="bg-white hover:bg-red-50 p-2 rounded-lg transition-all shadow-lg">
                            <Heart size={14} className="text-red-500" />
                          </button>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-black text-[13px] shadow-xl">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-black text-[16px] text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-[13px] line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <a href="/EquipmentDetail" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-[12px] text-white font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group">
                      <span>View Details</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-right mt-8">
              <a href="/browseequipment" className="bg-white hover:bg-gray-50 text-[13px] text-gray-900 font-bold px-6 py-2 inline-block rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-orange-500">
                Load More Equipment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}