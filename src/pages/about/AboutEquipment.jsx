import React from "react";
import aboutImg from "../../assets/about-equipments.jpg"; // replace with your actual image path

const AboutERI = () => {
  return (
    <section className="md:py-16 py-10">
      <div className="max-w-[1200px] mx-auto  px-4">
        <div className=" overflow-hidden flex flex-col md:flex-row gap-10">
          
          <div className="md:w-1/2">
            <img
              src={aboutImg}
              alt="About Equipment Rentals India"
              className="rounded-2xl w-full h-full object-cover"
            />
            
          </div>

          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h4 className="uppercase text-sm font-bold tracking-widest text-gray-600">
              About Us
            </h4>
            <h2 className="md:text-4xl text-2xl  font-bold text-gray-800 mt-2">
              Discover Our{" "}
              <span className="text-orange-500 italic font-semibold">
                Journey and Vision
              </span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Equipment Rentals India (ERI) is a unit of Clicks & Sales Pvt Ltd.
              Clicks & Sales Pvt Ltd has been a pioneer in web and digital
              technologies, at the forefront of disrupting digital marketing and
              introducing innovations in web and mobile applications.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Mr. Puneet Chadha, the co-founder of Clicks & Sales Pvt Ltd, is
              the visionary behind ERI. With a background at Greaves Cotton Ltd,
              ICICI Bank, CitiBank, SREI, and GE Capital, he brings deep
              expertise in construction equipment and financial operations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              ERI was founded to serve as a construction equipment aggregator in
              India, focusing on the used and rental segments. It bridges the
              gap between companies with idle equipment and those in need,
              creating a fast, transparent, and efficient deployment process.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              ERI has offices in New Delhi, Bangalore, Chennai, and Mumbai. For
              inquiries, partnerships, or investments, please reach out at{" "}
              <span className="text-orange-500 font-semibold">
                info@equipmentrentalsindia.com
              </span>
              .
            </p>

            
            <div className="mt-8 space-y-4">
              {[
                { title: "Operational Excellence", value: 90 },
                { title: "Customer Satisfaction", value: 95 },
                { title: "Innovative Solutions", value: 92 },
                { title: "Sustainable Practices", value: 88 },
                { title: "Advanced Technology", value: 96 },
              ].map((bar, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>{bar.title}</span>
                    <span>{bar.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{ width: `${bar.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Vision
                </h3>
                <p className="text-gray-600">
                  Revolutionizing equipment rentals with innovation and
                  excellence.
                </p>
              </div>
              <div className="bg-white shadow p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Mission
                </h3>
                <p className="text-gray-600">
                  Delivering top-quality rentals and exceptional customer
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutERI;
