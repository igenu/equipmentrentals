import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHeader() {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // Outer section still controls the overall width/centering and horizontal padding
    <section className="max-w-[1200px] mx-auto px-4 mt-10">
      
      {/* Inner container: Now uses a dark gradient and white/light text */}
      <motion.div 
        className="relative z-10 flex flex-col justify-center items-center overflow-hidden py-8 
                   bg-gradient-to-br from-gray-900 via-gray-950 to-orange-900/50 
                   rounded-lg " 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* MAIN TITLE (Small: text-xl/2xl) - Switched to White/Light Gray */}
        <motion.h1 
          className="text-lg md:text-xl font-extrabold text-white mb-2 tracking-tight"
          variants={itemVariants}
        >
          Company <span className="text-orange-400">Overview</span>
        </motion.h1>

        {/* ORANGE DIVIDER - Kept the accent color */}
        <motion.div 
            className="w-10 h-0.5 bg-orange-500 mx-auto mb-4 rounded-full"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100 }}
        />
        
        {/* BREADCRUMB / PATH (Small: text-xs/sm) - Switched to Gray text on dark BG */}
        <motion.div 
          className="flex items-center text-xs font-normal text-gray-400 space-x-2"
          variants={itemVariants}
        >
          <a
            href="/"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Home
          </a>
          <ChevronRight size={14} className="text-gray-500" />
          <span className="text-gray-200 uppercase tracking-wide font-medium">
            About
          </span>
        </motion.div>
        
      </motion.div>
    </section>
  );
}