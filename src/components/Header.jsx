import React from 'react'
import { useAuth } from "../utils/idb.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { LogOut, CircleUserRound, Bell, Mail, PhoneCall, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

// Define animation variants for the mobile menu (slide from right)
const mobileMenuVariants = {
    closed: { x: "100%" },
    open: { x: 0, transition: { type: "tween", duration: 0.3 } },
};

// Define animation variants for the search overlay (slide from top)
const searchOverlayVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.3 } },
    exit: { y: "-100%", opacity: 0, transition: { type: "tween", duration: 0.2 } },
};

// Define animation variants for the backdrop (fade in/out)
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

// 1. **PAGE LOAD ANIMATION VARIANTS**
const headerContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.1, // Start a little later
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const headerItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

// 2. **DROPDOWN ANIMATION VARIANTS**
const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.8, originY: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } }
};


export default function Header() {
    const { user, logout } = useAuth(); // Assume user object is available if logged in
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false); // State for the Search Offcanvas

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Function to close both menu and search
    const closeAll = () => {
        setMenuOpen(false);
        setOpen(false);
    };

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        navigate('/');
    };


    return (
        <header className="">
            <div className="max-w-[1200px] mx-auto md:px-4 px-4 md:pt-5 pt-3">

                
                <div className="bg-gray-800 md:py-3 py-3 md:px-4 px-3 text-white rounded-t-xl">
                    <div className="flex justify-between gap-4 text-[13px]">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-1">
                            <a href="mailto:info@equipmentrentalsindia.com" className="flex items-center md:gap-2 gap-1">
                                <Mail className="text-orange-500 w-3 md:w-3" />
                                <span className="text-[12px]">info@equipmentrentalsindia.com</span>
                            </a>
                            <div className="flex flex-row md:flex-row md:items-center md:gap-4 gap-2">
                                <a href="tel:+91-11-46562783" className="flex items-center md:gap-2 gap-1">
                                    <PhoneCall className="text-orange-500 w-3 md:w-3" />
                                    <span className="text-[12px]">+91-11-46562783</span>
                                </a>
                                <a href="tel:+91-9311494448" className="flex items-center md:gap-2 gap-1">
                                    <PhoneCall className="text-orange-500 w-3 md:w-3" />
                                    <span className="text-[12px]">+91-9311494448</span>
                                </a>
                            </div>
                        </div>
                        <div className=" gap-4 items-center hidden md:flex">
                            <a href="/equipmentform" className="hidden md:block bg-orange-400 text-white font-medium px-3 py-1 rounded hover:bg-orange-500 transition md:text-[11px]">
                                Post Equipment for Free
                            </a>
                            
                            {!user ? (
                                <>
                                    <a href="/LoginPage" className="md:text-[12px] hover:text-orange-400">login</a>
                                    /
                                    <a href="/RegisterPage" className="md:text-[12px] hover:text-orange-400">Register</a>
                                </>
                            ) : (
                                <div className="relative" ref={dropdownRef}>
                                    <motion.button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="p-2 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors"
                                        whileHover={{ scale: 1.1 }} // Utility icon hover
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <CircleUserRound className="w-4 h-4 text-white" />
                                    </motion.button>
                                    <AnimatePresence>
                                        {dropdownOpen && (
                                            <motion.div
                                                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 overflow-hidden text-gray-800"
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <div className="p-3 border-b text-[12px] font-semibold text-orange-600">
                                                    Welcome, {user.name || 'User'}!
                                                </div>
                                                <a href="/profile" className="flex items-center gap-2 p-3 text-[12px] hover:bg-gray-100 transition-colors">
                                                    <CircleUserRound className="w-4 h-4" /> My Profile
                                                </a>
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full text-left flex items-center gap-2 p-3 text-[12px] hover:bg-red-50 text-red-600 transition-colors"
                                                >
                                                    <LogOut className="w-4 h-4" /> Logout
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                
                <motion.div
                    className="bg-white shadow-[41px_21px_51px_-59px_rgba(0,0,0,0.03)] z-50 flex-1 md:py-3 py-3 md:px-4 px-3 flex justify-between gap-4 items-center rounded-b-xl"
                    variants={headerContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    
                    <motion.div variants={headerItemVariants} className="flex items-center gap-2">
                        <a href="/" className="">
                            <img src={logo} alt="logo" className="md:h-10 h-12" />
                        </a>
                    </motion.div>

                    
                    <nav className="hidden md:flex items-center gap-6 md:text-[13px]">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About Us" },
                            { to: "/browseequipment", label: "Browse Equipment List" },
                            { to: "/equipmentform", label: "List Your Equipment" },
                            { to: "/ERIAssist", label: "ERI Assist Plan" },
                            { to: "/sparepartsform", label: "Spare Parts" },
                            { to: "/contactus", label: "Contact Us" },
                        ].map((link, index) => (
                            <motion.div key={index} variants={headerItemVariants}>
                                <NavLink
                                    to={link.to}
                                    onClick={closeAll}
                                    className={({ isActive }) => isActive ? "text-orange-500 font-medium transition-colors" : "text-gray-700 hover:text-orange-500 transition-colors"}
                                >
                                    {link.label}
                                </NavLink>
                            </motion.div>
                        ))}

                        
                        <motion.button
                            onClick={() => setOpen(true)}
                            className="bg-orange-400 hover:bg-orange-500 py-1 px-2 rounded"
                            whileHover={{ scale: 1.1 }} // Utility icon hover
                            whileTap={{ scale: 0.9 }}
                            variants={headerItemVariants}
                        >
                            <Search className="w-4 text-white" />
                        </motion.button>
                    </nav>

                    
                    <motion.button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(true)}
                        whileHover={{ scale: 1.1 }} // Utility icon hover
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu className="h-7" />
                    </motion.button>
                </motion.div>

                
                <AnimatePresence>
                    {menuOpen && (
                        <>
                            
                            <motion.div
                                className="fixed inset-0 bg-black/70 bg-opacity-40 z-50"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={backdropVariants}
                                onClick={() => setMenuOpen(false)}
                            />

                            
                            <motion.div
                                className="z-[99] fixed top-0 right-0 w-64 h-full bg-white shadow-lg"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileMenuVariants}
                            >
                                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
                                    <h2 className="text-[14px] font-semibold">Menu</h2>
                                    <button onClick={() => setMenuOpen(false)}>
                                        <X size={20} />
                                    </button>
                                </div>

                                <nav className="flex flex-col items-start p-4 space-y-3 text-[12px]">
                                    
                                    <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>Home</NavLink>
                                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>About Us</NavLink>
                                    <NavLink to="/browseequipment" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>Browse Equipment List</NavLink>
                                    <NavLink to="/equipmentform" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>List Your Equipment</NavLink>
                                    <NavLink to="/ERIAssist" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>ERI Assist Plan</NavLink>
                                    <NavLink to="/sparepartsform" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>Spare Parts</NavLink>
                                    <NavLink to="/contactus" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>Contact Us</NavLink>
                                    <NavLink to="/LoginPage" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>login</NavLink>
                                    <NavLink to="/RegisterPage" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"}>Register</NavLink>
                                    <a href="/equipmentform" className="inline-block bg-orange-500 text-white font-medium px-3 py-1.5 rounded hover:bg-orange-600 transition text-[11px]">
                                        Post Equipment for Free
                                    </a>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className={`fixed inset-0 w-full bg-gray-900/90 z-[99] h-full`}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={searchOverlayVariants}
                        >
                            <div className="py-5 max-w-[1200px] mx-auto px-4">
                                <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full px-4 py-2 border border-gray-400 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    <button
                                        className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                    >
                                        Search
                                    </button>

                                    
                                    <button onClick={() => setOpen(false)} className="py-2 bg-red-600 hover:bg-red-700 rounded-lg px-3 text-white">
                                        <XIcon className="w-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    );
}