import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Flame, ShieldCheck, Heart, Eye, ChevronRight } from 'lucide-react';
import thumb from "../../assets/video-thumb.jpg";
export default function BrowseEquipment() {
  const [watchlist, setWatchlist] = useState([]);

  const equipmentList = [
    {
      id: 'ERI-301020253212',
      name: 'Crushers',
      image: thumb,
      description: 'Puzzolana is a leading crusher manufacturer that leverages indigenous innovation',
      status: 'Sell',
      verified: true,
      hotDeal: true,
      seller: 'Equipment-Rentals-India',
      date: '07 Nov 2025'
    },
    {
      id: 'ERI-291020253211',
      name: 'Excavator',
      image: thumb,
      description: 'TATA EX-200 SUPER is available for sale!',
      status: 'Sell',
      verified: true,
      hotDeal: true,
      seller: 'Equipment-Rentals-India',
      date: '29 Oct 2025'
    },
    {
      id: 'ERI-291020253210',
      name: 'JCB Backhoe loader',
      image: thumb,
      description: 'JCB Backhoe loader is available for sale',
      status: 'Sell',
      verified: false,
      hotDeal: true,
      seller: 'Equipment-Rentals-India',
      date: '29 Oct 2025'
    },
    {
      id: 'ERI-291020253209',
      name: 'JCB Backhoe Loader',
      image: thumb,
      description: 'JCB Backhoe Loader is available for sale',
      status: 'Sell',
      verified: false,
      hotDeal: true,
      seller: 'Equipment-Rentals-India',
      date: '29 Oct 2025'
    },
    {
      id: 'ERI-291020253208',
      name: 'Hyundai Excavator',
      image: thumb,
      description: 'Hyundai Excavator is available for sale',
      status: 'Sell',
      verified: false,
      hotDeal: true,
      seller: 'Equipment-Rentals-India',
      date: '29 Oct 2025'
    },
    {
      id: 'ERI-291020253207',
      name: 'TATA HITACHI EXCAVATOR',
      image: thumb,
      description: 'TATA HITACHI EXCAVATOR is available for sale',
      status: 'Sell',
      verified: false,
      hotDeal: true,
      seller: 'Equipment-Rentals-India',
      date: '29 Oct 2025'
    }
  ];

  const toggleWatchlist = (id) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-4 lg:px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-orange-600 font-medium">Browse Equipment List</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-4 lg:px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  <h2 className="text-lg font-bold">Refine Listings</h2>
                </div>
              </div>

              <div className="p-4 space-y-6">
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    By Categories
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Please Select</option>
                    <option>Excavators</option>
                    <option>Loaders</option>
                    <option>Crushers</option>
                    <option>Cranes</option>
                  </select>
                </div>

                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Zone
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Please Select</option>
                    <option>North India</option>
                    <option>South India</option>
                    <option>East India</option>
                    <option>West India</option>
                  </select>
                </div>

                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Equipment Type
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Please Select</option>
                    <option>New</option>
                    <option>Used</option>
                    <option>Rental</option>
                  </select>
                </div>

                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Usage (hours)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Enter hours"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full mt-2 bg-slate-800 hover:bg-slate-900 text-white py-2 rounded-lg font-medium transition-colors">
                    Go
                  </button>
                </div>

                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter Equipment Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter Equipment Names"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                  />
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>
              </div>

              
              <div className="bg-slate-800 text-white p-4 rounded-b-xl">
                <h3 className="font-bold mb-3">Equipment Description</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Equipment Rentals India allows the contractors to search construction equipment through the online portal to buy, sell, or hire the equipment. The platform provides its users for viewing the details of the construction equipment online and adding it to their watchlist to save for later.
                </p>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Equipment List</h1>
              <p className="text-gray-600">Discover quality construction equipment available across India</p>
            </div>

            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {equipmentList.map((equipment) => (
                <div 
                  key={equipment.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="relative">
                    <img 
                      src={equipment.image} 
                      alt={equipment.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {equipment.verified && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                      {equipment.hotDeal && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                          <Flame className="w-3 h-3" />
                          Hot deal
                        </span>
                      )}
                    </div>
                    
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{equipment.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">ID: {equipment.id}</p>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">{equipment.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">{equipment.status}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {equipment.date}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <a href='' className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-[12px]">
                        <Eye className="w-4 h-4" />
                        View Details
                      </a>
                      <a href='' className="px-3 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-colors text-[12px]">
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
