import React from "react";
import { Search, Newspaper, CalendarDays, ArrowRight } from "lucide-react";

export default function MarketSection() {
    const buyData = [
        { title: "1 No. SLM Any Model in Rajasthan", status: "Closed" },
        { title: "1 No. Concrete Slipform Paver Sp 1700 in Maharashtra", status: "Closed" },
        { title: "1 No. Soil Compactor 100, 110 in AP", status: "Closed" },
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
        {
            title: "Navigating the Impact of U.S. Tariffs on India’s Infrastructure and Industrial Sectors",
            date: "August 19, 2025",
        },
    ];

    return (
        <section className=" pb-8 pt-8">
            <div class="text-left md:mb-8 mb-6 max-w-[1200px] mx-auto px-4">
                <h2 class="text-xl font-bold text-gray-900 mb-2">India's Largest Construction <span class="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">Equipment Inventory</span></h2>
                
                <p class="text-gray-600 md:text-[14px]">Connect with trusted suppliers across major cities</p>
            </div>
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-8 px-4">
                
                <div className="lg:col-span-2 space-y-6">
                    
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex md:flex-row flex-col md:items-center justify-between bg-gray-900 text-white md:px-4 px-4 py-3 md:gap-0 gap-3">
                            <h3 className="text-[14px] font-semibold">Want to <span className="text-orange-400">Sell</span> Your Equipment?</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search equipment..."
                                    className="pl-9 pr-3 py-2 rounded bg-gray-800 border border-gray-700 text-[12px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {buyData.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50">
                                    <p className="text-[12px] text-gray-700">{item.title}</p>
                                    <span
                                        className={`text-[10px] whitespace-nowrap font-medium px-3 py-1 rounded-full ${item.status === "Closed"
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
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex md:flex-row flex-col md:items-center justify-between bg-gray-900 text-white md:px-4 px-4 py-3 md:gap-0 gap-3">
                            <h3 className="text-[14px] font-semibold">Want to <span className="text-orange-400">Rent</span> Your Equipment?</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 text-gray-50" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search equipment..."
                                    className="pl-9 pr-3 py-2 rounded bg-orange-400 text-white text-[12px] placeholder-white/100 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-white/80"
                                />
                            </div>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {rentData.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50">
                                    <p className="text-[12px] text-gray-700">{item.title}</p>
                                    <span
                                        className={`text-[10px] whitespace-nowrap font-medium px-3 py-1 rounded-full ${item.status === "Closed"
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

                
                <div className="bg-white shadow rounded-lg md:p-4 p-3 flex flex-col justify-between">

                    <div className="space-y-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Newspaper className="text-orange-500" size={18} />
                            <h3 className="text-[16px] font-bold text-gray-800">Latest News</h3>
                        </div>
                        {news.map((n, i) => (
                            <div
                                key={i}
                                className="border-l-4 border-orange-400 pl-4 bg-gray-100 hover:bg-orange-50 p-3 rounded-md transition"
                            >
                                <a href="" className="font-semibold text-gray-800 text-[12px] leading-snug mb-3 block">{n.title}</a>
                                <div className="flex items-center text-gray-500 text-[10px] gap-1">
                                    <CalendarDays size={10} />
                                    <span>{n.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-right mt-6">
                        <button className="bg-orange-400 text-white font-semibold md:px-4 px-2 md:py-1 py-1 inline-flex md:text-[12px] text-[14px] rounded-md hover:bg-orange-500 transition flex gap-2 items-center">
                            View All <ArrowRight size={10} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
