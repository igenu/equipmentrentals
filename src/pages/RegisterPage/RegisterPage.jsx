import React, { useState } from "react";
import logo from "../../assets/logo.png"; // your logo path

const RegisterPage = () => {
  const [registerType, setRegisterType] = useState("Self");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      <div className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-semibold">Login / Create Your Account</h1>
          <nav className="mt-2 text-sm">
            <a href="/" className="text-white/70 hover:text-white">
              Home
            </a>{" "}
            / <span className="text-yellow-400 font-medium">Register</span>
          </nav>
        </div>
      </div>

      
      <div className="flex-grow flex items-center justify-center px-6 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-lg">
          
          <div className="bg-yellow-500 text-white p-10 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Why Registration?</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Register with us and get updates for new equipment available for sale or lease.
              You’ll also be able to list your equipment for sale or rent.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/95 mb-6">
              <li>Get updates on latest equipment</li>
              <li>Search over 2300+ machines</li>
              <li>List your own equipment easily</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Having trouble signing up?</h3>
            <p className="flex items-center gap-2 mb-2">
              📧 info@equipmentrentalsindia.com
            </p>
            <p className="flex items-center gap-2">
              📞 +91-11-46562783
            </p>
          </div>

          
          <div className="bg-gray-50 p-10 md:w-1/2">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="ERI Logo" className="w-20" />
            </div>

            
            <div className="flex justify-center gap-3 mb-8">
              <button
                onClick={() => setRegisterType("Self")}
                className={`px-5 py-2 rounded-full font-semibold ${
                  registerType === "Self"
                    ? "bg-yellow-500 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Self
              </button>
              <button
                onClick={() => setRegisterType("Organisation")}
                className={`px-5 py-2 rounded-full font-semibold ${
                  registerType === "Organisation"
                    ? "bg-yellow-500 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Organisation
              </button>
            </div>

            
            {registerType === "Self" ? (
              /* ===================== SELF FORM ===================== */
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Username*"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="E-mail Address*"
                    className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-yellow-500" /> I agree
                    to the{" "}
                    <a href="#" className="text-yellow-600 hover:underline">
                      Terms and Conditions
                    </a>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-yellow-500" /> I want
                    to receive the latest updates
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-full mt-6 transition"
                >
                  SIGN UP
                </button>
              </form>
            ) : (
              /* ===================== ORGANISATION FORM ===================== */
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Company Name*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="text" placeholder="Website URL" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Type / Designation*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="text" placeholder="CIN No." className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Username*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="email" placeholder="E-mail Address*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="text" placeholder="Last Name*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Mobile Number*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="text" placeholder="Location*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Address Line 1*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                  <input type="text" placeholder="Address Line 2 (Optional)" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
                </div>

                <input type="text" placeholder="Zip Code*" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none" />

                <div className="flex items-start space-x-2 mt-4">
                  <input type="checkbox" className="mt-1 accent-yellow-500" />
                  <label className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-yellow-600 underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1 accent-yellow-500" />
                  <label className="text-sm text-gray-600">
                    Keep me informed about latest updates from Equipment Rentals India
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 mt-4"
                >
                  SIGN UP
                </button>

                <p className="text-sm text-center mt-4 text-gray-600">
                  Already have an account?{" "}
                  <a href="#" className="text-yellow-600 font-medium hover:underline">
                    Login Now
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
