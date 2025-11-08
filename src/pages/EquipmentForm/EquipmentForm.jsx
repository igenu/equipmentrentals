import React from "react";

const EquipmentForm = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-3">
          Add Equipment Details
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Equipment Name
            </label>
            <input
              type="text"
              placeholder="Enter equipment name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input type="radio" name="type" id="sell" />
              <label htmlFor="sell" className="text-sm text-gray-700">
                Sell
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="type" id="rent" />
              <label htmlFor="rent" className="text-sm text-gray-700">
                Rent Out
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Equipment Category
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500">
              <option>Select Category</option>
              <option>Excavator</option>
              <option>Crane</option>
              <option>Loader</option>
              <option>Bulldozer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model Number
            </label>
            <input
              type="text"
              placeholder="Enter model number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year of Manufacture
            </label>
            <input
              type="number"
              placeholder="e.g. 2020"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Working Hours Completed
            </label>
            <input
              type="text"
              placeholder="e.g. 500 hours"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Equipment Description
            </label>
            <textarea
              rows="3"
              placeholder="Add details about physical condition, performance, etc."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Upload Equipment Images (Max 4)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center py-6 hover:border-orange-400 transition"
                >
                  <input type="file" id={`img${i}`} className="hidden" />
                  <label
                    htmlFor={`img${i}`}
                    className="cursor-pointer text-sm text-gray-600"
                  >
                    Choose File
                  </label>
                  <p className="text-xs text-gray-400 mt-1">Image {i}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="md:col-span-2 flex justify-end mt-6">
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EquipmentForm;
