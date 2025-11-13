import { Calendar, User, MessageSquare } from "lucide-react";

export default function BlogPage() {
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
    <section className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-8 px-4">
        
        <div className="lg:col-span-2 space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <a href="/BlogDetail" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-yellow-500 transition">
                  {post.title}
                </a>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" /> {post.comments}
                  </span>
                </div>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <a href="/BlogDetail" className="mt-5 inline-block bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-medium transition">
                  Read More
                </a>
              </div>
            </article>
          ))}

          
          <div className="flex justify-center items-center space-x-2 mt-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="px-4 py-2 rounded-full text-gray-700 bg-white shadow hover:bg-yellow-400 hover:text-white transition"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        
        <aside className="space-y-10">
          
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">
              Latest Posts
            </h3>
            <ul className="space-y-4">
              {posts.slice(0, 3).map((p) => (
                <li key={p.id} className="border-b border-gray-300 pb-3">
                  <h4 className="text-gray-700 font-medium hover:text-yellow-500 transition text-sm">
                    {p.title}
                  </h4>
                  <div className="flex justify-between items-center mt-3">
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
    </section>
  );
}
