import React from "react";
import backgroundImg from "../../assets/excavator-bg.png"; // replace with your image path

const ERIAssistBanner = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-10 max-w-3xl text-center bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg">
        <h2 className="text-yellow-400 text-2xl sm:text-3xl font-semibold mb-3">
          Machines available for Rent or Sale? – Use{" "}
          <span className="font-bold italic text-yellow-500">ERIAssist</span> for Seamless Deployment and Sale!
        </h2>

        <p className="text-yellow-400 text-2xl sm:text-3xl font-semibold mb-3">
          मशीनें किराए पर या बिक्री के लिए उपलब्ध –{" "}
          <span className="font-bold italic text-yellow-500">ERIAssist</span> आपकी
          निर्बाध डिप्लॉयमेंट और बिक्री का साथी!
        </p>

        <p className="text-white mt-4">
          <span className="font-semibold underline">Get Guaranteed leads</span> for selling or renting your equipment
        </p>
        <p className="text-white mt-2">With ERI Assist Plan @Rs. 7000/- only</p>

        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-md transition">
          Buy ERI Assist Plan Today
        </button>
      </div>

      
      <button className="absolute top-5 right-5 text-white bg-black/40 hover:bg-black/60 px-4 py-1 rounded-md transition">
        Skip
      </button>
    </div>
  );
};

export default ERIAssistBanner;
