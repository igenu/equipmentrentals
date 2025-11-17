import React from "react";
import aboutImg from "../../assets/about-equipments.jpg";
const EquipmentDetail = () => {
  return (
    <div className=" min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center  py-4 px-4">
          <h1 className="text-xl font-semibold">Hamm-311</h1>
          <nav className="text-sm">
            <a href="/" className="hover:text-orange-400">Home</a>
            <span className="mx-2">/</span>
            <span className="text-orange-400">View Details</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8">
        
        {/* Left: Image Section */}
        <div className="lg:col-span-1">
          <img
            src={aboutImg}
            alt="Hamm-311"
            className="w-full rounded-xl shadow-md"
          />
          <div className="flex gap-3 mt-3">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={aboutImg}
                alt=""
                className="w-20 h-16 object-cover rounded-lg border hover:border-orange-500 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right: Details Section */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Equipment Overview
            </h2>
            <p className="text-sm text-gray-500 mb-4">By Equipment Rentals India | 10 Nov 2025</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Detail label="Equipment ID" value="ERI 0290295139" />
              <Detail label="Availability Type" value="Rent Out" />
              <Detail label="Model" value="7017840164" />
              <Detail label="Year Of Manufacture" value="2019" />
              <Detail label="No. of Working Hours" value="1800" />
              <Detail label="RC Available" value="Yes" />
              <Detail label="Under Finance" value="Yes" />
              <Detail label="Insurance Available" value="No" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">
              Available Location
            </h3>
            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value="North India"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-1/2"
                readOnly
              />
              <div className="flex gap-2">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  Add to Watchlist
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
                  Show Interest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Equipments */}
      <div className="max-w-[1200px] mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Related Equipments
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={aboutImg}
                alt="Equipment"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Wheel Loader</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Wheel Loader X9000 available for Sale
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <button className="text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white transition">
                    Add to Watchlist
                  </button>
                  <button className="text-sm bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Component
const Detail = ({ label, value }) => (
  <div className="border border-gray-200 rounded-lg px-4 py-3 bg-white shadow-sm">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium text-gray-800">{value}</p>
  </div>
);

export default EquipmentDetail;
