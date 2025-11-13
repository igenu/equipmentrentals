import { ChevronRight } from "lucide-react";

export default function AboutHeader() {
  return (
    <section className="relative  py-3 border-b border-gray-200 max-w-7xl mx-auto  px-4">
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10" />

      <div className="relative z-10  mx-auto text-center px-4">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
          About <span className="text-orange-500">Us</span>
        </h1>

        
        <div className="flex items-center justify-center text-sm font-medium text-gray-600 space-x-2">
          <a
            href="/"
            className="hover:text-orange-500 transition-colors duration-200"
          >
            Home
          </a>
          <ChevronRight size={16} className="text-orange-500" />
          <span className="text-gray-800 uppercase tracking-wide">About</span>
        </div>

        
        <div className="mt-6 w-24 h-1 bg-orange-500 mx-auto rounded-full" />
      </div>
    </section>
  );
}
