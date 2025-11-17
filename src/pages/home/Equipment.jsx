import React, { useState } from "react";
import { Flame, CheckCircle, Star, Tag, ArrowRight, Heart, Eye, TrendingUp } from "lucide-react";
import thumb from "../../assets/video-thumb.jpg";

const data = {
  all: [
    {
      id: 1,
      title: "Bauer BG28 Piling Rig",
      desc: "Bauer BG28 Piling Rig",
      img: thumb,
      tag: "Hot deal",
      views: "1.2K",
      price: "₹45L"
    },
    {
      id: 2,
      title: "Excavator",
      desc: "TATA EX-200 SUPER is available for sale!",
      img: thumb,
      tag: "Verified",
      views: "890",
      price: "₹32L"
    },
    {
      id: 6,
      title: "Excavator",
      desc: "TATA EX-200 SUPER is available for sale!",
      img: thumb,
      tag: "Verified",
      views: "756",
      price: "₹28L"
    },
    {
      id: 7,
      title: "Excavator",
      desc: "TATA EX-200 SUPER is available for sale!",
      img: thumb,
      tag: "Verified",
      views: "756",
      price: "₹28L"
    },
  ],
  toppicks: [
    {
      id: 3,
      title: "CASE Dozer",
      desc: "CASE Dozer 2050 M is available for sale!",
      img: thumb,
      tag: "Hot deal",
      views: "2.1K",
      price: "₹52L"
    },
  ],
  latest: [
    {
      id: 4,
      title: "JCB Backhoe Loader",
      desc: "JCB Backhoe loader is available for sale!",
      img: thumb,
      tag: "Hot deal",
      views: "1.5K",
      price: "₹38L"
    },
  ],
  cheap: [
    {
      id: 5,
      title: "Komatsu Grader",
      desc: "Great condition grader at low cost",
      img: thumb,
      tag: "Verified",
      views: "945",
      price: "₹22L"
    },
  ],
};

export default function EquipmentTrends() {
  const [active, setActive] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = [
    { id: "all", label: "All Equipment", icon: <Star size={20} />, gradient: "from-purple-500 to-indigo-600", count: data.all.length },
    { id: "toppicks", label: "Top Picks", icon: <Tag size={20} />, gradient: "from-blue-500 to-cyan-600", count: data.toppicks.length },
    { id: "latest", label: "Latest Arrivals", icon: <CheckCircle size={20} />, gradient: "from-green-500 to-emerald-600", count: data.latest.length },
    { id: "cheap", label: "Best Deals", icon: <Flame size={20} />, gradient: "from-orange-500 to-red-600", count: data.cheap.length },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-4 px-4">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-1 rounded-full text-[11px] font-bold mb-4 shadow-lg">
            <TrendingUp size={14} />
            <span>LIVE MARKETPLACE</span>
          </div>
          <h1 className="text-3xl md:text-xl font-black text-gray-900 mb-3">
            Equipment <span className="text-orange-500">Marketplace</span>
          </h1>
          <p className="text-gray-600 text-[14px] max-w-2xl mx-auto">
            Discover India's largest construction equipment inventory
          </p>
        </div>

        
        <div className="grid lg:grid-cols-4 gap-6">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-xl border border-gray-100 sticky top-6">
              <div className="mb-4 p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-white">
                <h3 className="font-bold text-[14px] mb-1">Browse Categories</h3>
                <p className="text-gray-300 text-xs">Select a category below</p>
              </div>
              
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 group ${
                      active === tab.id
                        ? "shadow-lg scale-105"
                        : "bg-gray-50 hover:bg-gray-100 hover:scale-102"
                    }`}
                  >
                    <div className={`${active === tab.id ? `bg-gradient-to-r ${tab.gradient}` : ''} ${active === tab.id ? 'p-3 rounded-lg' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          active === tab.id 
                            ? "bg-white/20 text-white" 
                            : "bg-white text-gray-700 group-hover:scale-110"
                        } transition-all`}>
                          {tab.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`font-bold text-[14px] mb-1 ${
                            active === tab.id ? "text-white" : "text-gray-900"
                          }`}>
                            {tab.label}
                          </div>
                          <div className={`text-xs ${
                            active === tab.id ? "text-white/80" : "text-gray-500"
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
            </div>
          </div>

          
          <div className="lg:col-span-3">
            
            <div className="bg-white rounded-lg p-4 mb-6 shadow-lg border border-gray-100">
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
                      Showing {data[active].length} premium listings
                    </p>
                  </div>
                </div>
                <a href="/browseequipment" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-bold text-[11px] transition-all hover:scale-105 flex items-center gap-2">
                  View All
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            
            <div className="grid md:grid-cols-3 gap-6">
              {data[active].map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 flex flex-col justify-between"
                >
                  <div>
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                      <span className={`px-3 py-1 inline-block rounded-full text-xs font-bold text-white backdrop-blur-sm ${
                        item.tag === "Hot deal" ? "bg-red-500/90" : "bg-green-500/90"
                      }`}>
                        {item.tag}
                      </span>
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                        <Eye size={11} />
                        {item.views}
                      </div>
                    </div>

                    
                    <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                      hoveredCard === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                    <p className="text-gray-600 text-[13px]  line-clamp-2">
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
                </div>
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