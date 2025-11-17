import React from "react";

export default function EquipmentInfo() {
  return (
    <section className="bg-gray-50 md:py-12 py-8 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center">
          <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3">
            Lowest Price, Exclusive and Largest Choice of <br />
          </h2>
          <div className="text-orange-500 font-bold mb-3">
            Construction Equipment’s in India
          </div>
          <p className="text-gray-600 mt-2 leading-relaxed text-[13px]">
            All contractors, equipment hiring agencies, financiers and
            manufacturers trust our database and enquire with us for their
            requirements. 400+ equipment traded through us till now and
            counting.
          </p>
        </div>

        
        <div className="bg-white rounded-xl  shadow-md overflow-hidden hover:shadow-lg transition-all p-3 flex items-center">
          
          <div className="relative">
            <video
              controls
              className="w-full object-cover"
              poster="https://www.equipmentrentalsindia.com/public/img/video-poster.png"
            >
              <source src="https://www.equipmentrentalsindia.com/public/img/videoplayback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        
        <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all text-center p-4 m-auto">
          <p className="text-sm text-white uppercase tracking-wide mt-3">
            Advertisement
          </p>
          <img
            src="https://www.equipmentrentalsindia.com/public/img/GraderAdvertisement/canvanitish.png"
            alt="Advertisement"
            className="w-[60%] border-t-4 border-orange-500 mt-2 m-auto"
          />
        </div>
      </div>
    </section>
  );
}
