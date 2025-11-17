import React from "react";
import logo from "../../assets/logo.png"; 
import { MailIcon, PhoneIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      <div className="bg-gray-800 text-white py-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-semibold">Log In</h1>
          <nav className="mt-2 text-sm">
            <a href="/" className="text-white/70 hover:text-white">
              Home
            </a>{" "}
            / <span className="text-yellow-400 font-medium">Log In</span>
          </nav>
        </div>
      </div>

      
      <div className="flex-grow flex items-center justify-center px-6 py-10">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-lg">
          
          <div className="bg-yellow-500 text-white p-10 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Log In to Your Account</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Log in to your account to get the latest insights about the
              equipment available for buy/sell/hire.
            </p>

            <h3 className="text-xl font-semibold mb-2">Having trouble logging in?</h3>
            <p className="flex items-center gap-2 mb-2">
              
              <MailIcon size={15} />
              <span>info@equipmentrentalsindia.com</span>
            </p>
            <p className="flex items-center gap-2">
              
              <PhoneIcon size={15} />
              <span>+91-11-46562783</span>
            </p>
          </div>

          
          <div className="bg-gray-50 p-10 md:w-1/2 flex flex-col justify-center items-center">
            <img src={logo} alt="ERI Logo" className="w-24 mb-6" />

            <form className="w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full border border-gray-300 rounded-md px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-full transition"
              >
                LOGIN
              </button>
            </form>

            <p className="mt-6 text-gray-700 text-sm">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-yellow-600 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
