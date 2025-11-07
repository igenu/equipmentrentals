import React from "react";
import { Search, Newspaper, CalendarDays, ArrowRight } from "lucide-react";

export default function MarketSection() {
    const buyData = [
        { title: "1 No. SLM Any Model in Rajasthan", status: "Closed" },
        { title: "1 No. Concrete Slipform Paver Sp 1700 in Maharashtra", status: "Closed" },
        { title: "1 No. Soil Compactor 100, 110 in AP", status: "Closed" },
    ];

    const rentData = [
        { title: "1 No. Mini Crusher Any in Maharashtra for 2 Months", status: "Quote Now" },
        { title: "2 No. Piling Rig Bauer 40/45 in West Bengal for 6 Months", status: "Quote Now" },
        { title: "2 No. Crawler Crane 80 Ton in Maharashtra for 13 Months", status: "Closed" },
    ];

    const news = [
        {
            title: "Lighting the Path to Growth and Collaboration – Happy Diwali from ERI",
            date: "October 20, 2025",
        },
        {
            title: "India’s Infrastructure Sector: Post-Monsoon Outlook and Emerging Challenges",
            date: "September 20, 2025",
        },
        {
            title: "Navigating the Impact of U.S. Tariffs on India’s Infrastructure and Industrial Sectors",
            date: "August 19, 2025",
        },
    ];

    return (
        <section className="bg-gray-50 py-12">
            <div class="text-center mb-12 max-w-3xl mx-auto">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">India's Largest Construction</h2>
                <h2 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">Equipment Inventory</h2>
                <p class="text-gray-600 text-lg">Connect with trusted suppliers across major cities</p>
            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-4">
                
                <div className="lg:col-span-2 space-y-6">
                    
                    <div className="bg-white shadow rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between bg-gray-900 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">Want to Sell Your Equipment?</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search equipment..."
                                    className="pl-9 pr-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {buyData.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50">
                                    <p className="text-sm text-gray-700">{item.title}</p>
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${item.status === "Closed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-orange-100 text-orange-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div className="bg-white shadow rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between bg-orange-500 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">Want to Rent Your Equipment?</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-300" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search equipment..."
                                    className="pl-9 pr-3 py-2 rounded-md bg-orange-400 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80"
                                />
                            </div>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {rentData.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50">
                                    <p className="text-sm text-gray-700">{item.title}</p>
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${item.status === "Closed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-orange-100 text-orange-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                
                <div className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between">

                    <div className="space-y-5">
                        <div className="flex items-center gap-2 mb-5">
                            <Newspaper className="text-orange-500" size={22} />
                            <h3 className="text-lg font-bold text-gray-800">Latest News</h3>
                        </div>
                        {news.map((n, i) => (
                            <div
                                key={i}
                                className="border-l-4 border-orange-400 pl-4 hover:bg-orange-50 p-2 rounded-md transition"
                            >
                                <a href="" className="font-semibold text-gray-800 text-sm leading-snug mb-3 block">{n.title}</a>
                                <div className="flex items-center text-gray-500 text-xs gap-1">
                                    <CalendarDays size={14} />
                                    <span>{n.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm rounded-md font-semibold transition">
                            View All <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
