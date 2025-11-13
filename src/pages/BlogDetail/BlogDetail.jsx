import React from "react";

export default function BlogDetail() {
      const posts = [
    {
      id: 1,
      title: "Choosing the Right Used Soil Compactor for Sale in 2024",
      badge: "Soil Compactor",
      date: "Dec 5, 2024",
      author: "Admin",
      comments: 8,
      excerpt:
        "Looking for a reliable soil compactor for 2024? This guide helps you choose cost-effective and high-performing models for your projects.",
      image: "/src/assets/blog.jpg",
    },
    {
      id: 2,
      title: "How to Choose a Used Transit Mixer for Rent and Sale",
      badge: "Soil Compactor",
      date: "Nov 28, 2024",
      author: "Rakesh",
      comments: 6,
      excerpt:
        "Buying or renting a used transit mixer requires understanding quality, capacity, and budget. Here's a guide to make the right choice.",
      image: "/src/assets/blog.jpg",
    },
    {
      id: 3,
      title: "Top 10 Types of Concrete Batching Plants and Their Usage",
      badge: "Soil Compactor",
      date: "Nov 20, 2024",
      author: "Anand",
      comments: 10,
      excerpt:
        "Explore different types of concrete batching plants used in modern construction and understand their advantages for large-scale projects.",
      image: "/src/assets/blog.jpg",
    },
  ];

  const categories = [
    "Transit Mixer",
    "Batching Plant",
    "Cranes",
    "Paver Machine",
    "Used Equipment",
    "Construction Tips",
  ];

  const archives = [
    "Dec 2024",
    "Oct 2024",
    "Sep 2024",
    "Jun 2024",
    "Dec 2023",
    "Oct 2023",
  ];

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 pt-0 px-4">
        
        <div className="md:col-span-2">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h1 className="text-3xl font-semibold text-gray-800 mb-3">
            Choosing the Right Used Soil Compactor for Sale in 2024
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-5 space-x-4">
            <span>📅 18 Dec 2023</span>
            <span>👤 Rakesh</span>
            <span>👁️ 20 Views</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to our comprehensive guide on Choosing the Right Used Soil Compactor for Sale in 2024.
            If you're in the market for a reliable and cost-effective solution to enhance soil density, a
            used soil compactor might be the perfect choice for your construction needs. A soil compactor
            is a heavy-duty machine designed to increase soil density by reducing air pockets and improving
            overall stability.
          </p>

          <div className="border-l-4 border-blue-600 bg-blue-50 px-4 py-2 rounded-md text-sm text-gray-700 mb-6">
            Category: <span className="font-medium text-blue-700">Soil Compactor</span>
          </div>

          
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave a Reply</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="5"
                placeholder="Comment"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        </div>

        
        <aside className="space-y-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">
              Latest Posts
            </h3>
            <ul className="space-y-4">
              {posts.slice(0, 3).map((p) => (
                <li key={p.id} className="border-b pb-2">
                  <h4 className="text-gray-700 font-medium hover:text-yellow-500 transition text-sm">
                    {p.title}
                  </h4>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] text-gray-500 border border-gray-400 py-1 px-2 rounded-full">{p.badge}</p>
                    <p className="text-xs text-gray-500">{p.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-gray-700">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="hover:text-yellow-500 cursor-pointer transition"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">
              Archives
            </h3>
            <ul className="space-y-2 text-gray-700">
              {archives.map((arc) => (
                <li
                  key={arc}
                  className="hover:text-yellow-500 cursor-pointer transition"
                >
                  {arc}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
