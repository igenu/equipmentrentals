import React from "react";

export default function EquipmentInfo() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            Lowest Price, Exclusive and Largest Choice of <br />
            <span className="text-orange-500">
              Construction Equipment’s in India
            </span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            All contractors, equipment hiring agencies, financiers and
            manufacturers trust our database and enquire with us for their
            requirements. 400+ equipment traded through us till now and
            counting.
          </p>
        </div>

        
        <div className="bg-white rounded-xl  shadow-md overflow-hidden hover:shadow-lg transition-all">
          
          <div className="relative">
            <video
              controls
              className="w-full h-64 object-cover"
              poster="https://www.equipmentrentalsindia.com/public/img/video-poster.png"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        
        <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all text-center">
          <p className="text-sm text-white uppercase tracking-wide mt-3">
            Advertisement
          </p>
          <img
            src="https://www.equipmentrentalsindia.com/public/img/GraderAdvertisement/canvanitish.png"
            alt="Advertisement"
            className="w-full h-64 border-t-4 border-orange-500 mt-2"
          />
        </div>
      </div>
    </section>
  );
}
