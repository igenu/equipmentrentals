import React, { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className=" pb-16 pt-4 px-6">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact <span className="text-yellow-500">Us</span>
        </h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you!</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
            Get in Touch
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Your Name*
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Your Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Country</label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Other</option>
              </select>
            </div>

            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Mobile No*</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Department</label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Rentals</option>
                <option>Sales</option>
                <option>Support</option>
              </select>
            </div>

            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-medium mb-1">Message*</label>
              <textarea
                placeholder="Enter your message..."
                rows={4}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-3">
            Contact Details
          </h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>+91 11-46562783</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>+91 9311494448</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-500" />
              <span>info@equipmentrentalsindia.com</span>
            </div>
            
          </div>

          
          <div className="rounded-xl overflow-hidden border mt-6">
            <img
              src="https://scontent.fmaa3-3.fna.fbcdn.net/v/t51.82787-15/521073509_18132970804430021_7838825231091728920_n.jpg?stp=dst-jpg_p350x350_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e5c1b6&_nc_ohc=8mFTKj_AilUQ7kNvwEM_6uw&_nc_oc=Admj8ptTyHNLP7z15GKCAX5L_MnnMKtyHbUwAuQ-DAhcXo3wD03odHY-cvACNJnfBjzTzgTDRTvEWXQOR_1yBkhk&_nc_zt=23&_nc_ht=scontent.fmaa3-3.fna&_nc_gid=0rPV0DmCTnLshKpmXzmcQg&oh=00_AfgoL7ti2MH8sKjz5Oye9n1hFDsEfLTL7sC4HKAbV01hvA&oe=691744DA"
              alt="Equipment Rentals"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
