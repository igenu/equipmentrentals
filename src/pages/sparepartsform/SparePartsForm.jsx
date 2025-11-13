import React, { useState } from 'react';
import { Plus, X, Upload, CheckCircle } from 'lucide-react';
import SparePartsImage from "../../assets/SparePartsImage.jpg"; 
export default function SparePartsForm() {
  const [equipmentSections, setEquipmentSections] = useState([
    { id: 1, parts: [{ id: 1 }] }
  ]);

  const addEquipment = () => {
    setEquipmentSections([
      ...equipmentSections,
      { id: Date.now(), parts: [{ id: 1 }] }
    ]);
  };

  const addPart = (equipmentId) => {
    setEquipmentSections(equipmentSections.map(eq => 
      eq.id === equipmentId 
        ? { ...eq, parts: [...eq.parts, { id: Date.now() }] }
        : eq
    ));
  };

  const removePart = (equipmentId, partId) => {
    setEquipmentSections(equipmentSections.map(eq => 
      eq.id === equipmentId 
        ? { ...eq, parts: eq.parts.filter(p => p.id !== partId) }
        : eq
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const features = [
    '2,500+ SKU from 45+ leading brands',
    'Order single bolt or bulk kit — no minimum quantity',
    '48-hour project-site delivery via our metro hubs',
    'ERI-Assured genuine quality parts',
    'Easy online quotes & digital payments'
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-4" >
        
        <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8 mb-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality <span className="text-orange-500">SPARE PARTS</span> for your equipment
          </h1>
          <p className="text-gray-700 leading-relaxed">
            We bring the same market-leading reliability to spare parts that we do to equipment. Discover India's widest catalogue of high-quality aftermarket parts for excavators, loaders, cranes, pavers, and more — available to buy or request in just a few clicks. With refreshed inventory, doorstep delivery, and real-time listings from trusted suppliers, ERI makes keeping your machines running smoother than ever.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
              <img 
                src={SparePartsImage}
                alt="Construction Equipment"
                className="w-full rounded-xl mb-6"
              />
              
              <div className="border-l-4 border-orange-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Why Order with <span className="text-orange-500">ERI?</span>
                </h2>
              </div>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="border-l-4 border-orange-500 pl-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Customer Information</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <div className="flex gap-2">
                    <select className="w-24 px-2 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Phone No *"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="GST No."
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Customer State *</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                  </select>
                </div>

                <div className="mt-4">
                  <select className="w-full md:w-1/3 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Customer City *</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                  </select>
                </div>
              </div>

              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="border-l-4 border-orange-500 pl-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Equipment + Parts Information</h2>
                </div>

                {equipmentSections.map((equipment, eqIndex) => (
                  <div key={equipment.id} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Equipment #{eqIndex + 1}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>Select Equipment *</option>
                        <option>Excavator</option>
                        <option>Loader</option>
                        <option>Crane</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Machine Make"
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Machine Model"
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>Year of Manufacture *</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                      </select>
                      <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>Machine State *</option>
                        <option>Maharashtra</option>
                        <option>Karnataka</option>
                      </select>
                      <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>Machine City *</option>
                        <option>Mumbai</option>
                        <option>Bangalore</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <input
                        type="text"
                        placeholder="Shipment Address*"
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Machine Location Pin Code"
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    
                    {equipment.parts.map((part, partIndex) => (
                      <div key={part.id} className="bg-gray-50 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-md font-semibold text-gray-800">Part #{partIndex + 1}</h4>
                          {equipment.parts.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removePart(equipment.id, part.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <input
                            type="text"
                            placeholder="Part Name *"
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                          />
                          <input
                            type="text"
                            placeholder="Part Number"
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                          />
                          <input
                            type="number"
                            placeholder="Quantity *"
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                          />
                        </div>

                        <div className="flex gap-4">
                          <input
                            type="text"
                            placeholder="Preferred Brand"
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                          />
                          <label className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition-colors bg-white">
                            <Upload className="w-5 h-5 text-gray-500" />
                            <span className="text-sm text-gray-600">Upload Image/Video</span>
                            <input type="file" className="hidden" accept="image/*,video/*" />
                          </label>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addPart(equipment.id)}
                      className="flex items-center gap-2 px-4 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      Add Part
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addEquipment}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Equipment and Parts
                </button>
              </div>

              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold shadow-lg transition-all transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}