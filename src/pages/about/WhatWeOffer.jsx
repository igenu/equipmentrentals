import React from "react";
import { Wrench, Truck, Settings, ClipboardList } from "lucide-react"; // icons
// import excavatorImg from "../../assets/excavator.jpg"; // replace with your image

const WhatWeOffer = () => {
  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-orange-500" />,
      title: "Comprehensive Machinery Selection",
      desc: "Access a wide range of construction and heavy equipment from trusted brands to suit every project requirement.",
    },
    {
      icon: <Truck className="w-10 h-10 text-orange-500" />,
      title: "Flexible and Customizable Rental Plans",
      desc: "Choose from hourly, daily, weekly, or monthly rental options designed to fit your specific project timelines and budgets.",
    },
    {
      icon: <Settings className="w-10 h-10 text-orange-500" />,
      title: "Professional Maintenance Support",
      desc: "Ensure uninterrupted performance with regular maintenance, on-site service, and 24/7 technical assistance.",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-orange-500" />,
      title: "Expert & Personalized Consultation",
      desc: "Get professional advice from our experts to choose the right equipment and rental strategy for your project.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto  px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-end">
          
          <div className="col-span-1">
            <h4 className="uppercase text-sm font-semibold text-gray-500 mb-3">
              What We Offer
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              <span className="text-orange-500 italic font-semibold">
                Top-Tier
              </span>{" "}
              Machinery & Equipment Rentals for Every Project Need
            </h2>
            <p className="text-gray-600 mt-5">
              From small-scale projects to large industrial developments, ERI
              delivers reliable, efficient, and affordable equipment rental
              solutions to help you achieve your goals faster.
            </p>
            <button className="mt-6 bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Discover More
            </button>
          </div>

          

          
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
                <button className="mt-3 text-orange-500 text-sm font-medium flex items-center gap-1 hover:text-orange-600">
                  Learn More <span>›</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
