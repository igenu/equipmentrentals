import React from 'react'
import { ArrowRight, ArrowRightFromLine, ArrowRightIcon, ArrowRightSquare, Play } from "lucide-react";
import machine from "../../assets/machine.png";
import videoThumb from "../../assets/video-thumb.jpg"; 

export default function Hero() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-8 md:gap-8 gap-4 mb-10 mt-5">
        
        
        <div className="col-span-3 md:space-y-6 space-y-4">
          <p className="uppercase text-sm font-semibold text-gray-700 tracking-wider">
            Welcome to Equipment Rentals India
          </p>

          <h1 className="md:text-[35px] text-[20px]  font-extrabold text-[#1E1E1E] leading-tight">
            Rent • Buy • Sell • Finance • Spare Parts for Construction, Mining and Industrial Equipment{" "}
            
          </h1>

          <p className="text-gray-600 md:mb-10  md:text-[16px] text-[14px]">
            Equipment Rentals India is India’s leading marketplace to rent, buy, sell, finance and source spare parts for heavy construction equipment. Our database is updated daily with the latest machines and parts available nationwide.
          </p>

          <a href='/equipmentform' className="bg-orange-500 text-white font-semibold md:px-6 px-3 md:py-3 py-1 inline-flex md:text-[16px] text-[14px] rounded-lg hover:bg-orange-600 transition flex gap-2 items-center">
            Post Equipment Requirement <ArrowRight className='w-4'/>
          </a>
          <a href='/equipmentform' className="bg-orange-500 text-white font-semibold md:px-6 px-3 md:py-3 py-1 inline-flex md:text-[16px] text-[14px] rounded-lg hover:bg-orange-600 transition flex gap-2 items-center">
            View Equipment Requirement <ArrowRight className='w-4'/>
          </a>

          
          <div className="flex items-center gap-3 md:pt-8 py-2">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/28.jpg"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-orange-500">
                ★★★★★
              </div>
              <p className="text-gray-500 text-sm">
                Trusted by <span className="font-semibold">2k+ Clients</span>
              </p>
            </div>
          </div>
        </div>

        
        <div className="col-span-3 bg-orange-500 rounded-3xl">
          <div className=" relative p-4 md:p-8 flex justify-center items-center">
            <img
              src={machine}
              alt="machine"
              className="md:max-w-[146%] max-w-[70%] h-auto drop-shadow-xl md:mr-20 mr-10"
            />
            
            <div className="absolute bottom-6 right-6 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] rounded-2xl px-6 py-4 text-center">
              <p className="text-2xl font-bold text-gray-800">2.7k</p>
              <p className="text-xs font-semibold text-gray-600 uppercase">
                Happy Client
              </p>
            </div>
          </div>
        </div>

        
        <div className="md:col-span-2 col-span-3 space-y-6 bg-white p-4 rounded-xl">
          

          <div className="bg-gray-100">
          <div className="relative w-[200px] m-auto pb-5 pt-3 ">
            <img
              src={videoThumb}
              alt="video"
              className="rounded-xl w-[] object-cover"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full shadow-lg">
              <Play size={24} />
            </button>
            
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping bg-orange-500 opacity-30 w-16 h-16 rounded-full"></span>
          </div>
          </div>

          
          <div className="">
            <h3 className="text-md font-semibold text-gray-800 mb-4">
              SUBMIT YOUR REQUIREMENTS
            </h3>

            <select className="bg-white text-[14px] w-full mb-3 rounded-lg border border-gray-200 px-3 py-3 focus:outline-none">
              <option> I have equipment which I want to </option>
              <option> Sell </option>
              <option> Rent Out </option>
              <option> I am ok for sell or renting out </option>
            </select>
            <select className="bg-white text-[14px] w-full mb-3 rounded-lg border border-gray-200 px-3 py-3 focus:outline-none">
              <option> I need equipment for  </option>
              <option> Rent </option>
              <option> I want to purchase used equipment </option>
              <option> I am ok for rent or purchase </option>
            </select>
            <input className="bg-white text-[14px] w-full mb-3 rounded-lg border border-gray-200 px-3 py-3 focus:outline-none" placeholder='Full Name' />
            <input className="bg-white text-[14px] w-full mb-3 rounded-lg border border-gray-200 px-3 py-3 focus:outline-none" placeholder='Email ID' />
            <input className="bg-white text-[14px] w-full mb-3 rounded-lg border border-gray-200 px-3 py-3 focus:outline-none" placeholder='Phone No' />
            <input className="bg-white text-[14px] w-full mb-3 rounded-lg border border-gray-200 px-3 py-3 focus:outline-none" placeholder='Current location of equipment' />
            
            

            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

