import { useAuth } from "../utils/idb.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { LogOut, CircleUserRound, Bell, Mail, PhoneCall } from "lucide-react";
// import { AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";


export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

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



    return (
        <header className="">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-gray-800 py-3 px-6 text-white rounded-t-2xl">
                    <div className="flex justify-between gap-4 text-[13px]">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <a href="mailto:info@equipmentrentalsindia.com" className="flex items-center gap-2">
                                <Mail size={20} className="text-orange-500" />
                                <span class="">info@equipmentrentalsindia.com</span> 
                            </a>
                            <div className="flex flex-row md:flex-row md:items-center gap-4">
                                <a href="tel:+91-11-46562783" className="flex items-center gap-2">
                                    <PhoneCall size={20} className="text-orange-500" />
                                    <span class="">+91-11-46562783</span>
                                </a>
                                <a href="tel:+91-9311494448" className="flex items-center gap-2"> 
                                    <PhoneCall size={20} className="text-orange-500" />
                                    <span class="">+91-9311494448</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            {/* Button */}
                            <button className="hidden md:block bg-orange-500 text-white font-medium px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                                Post Equipment for Free
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-[41px_21px_51px_-59px_rgba(0,0,0,0.03)] z-50 flex-1 py-3 px-6 flex justify-between gap-4 items-center rounded-b-2xl">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <div className="">
                            <img src={logo} alt="logo" className=" h-20" />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-orange-500 font-medium">Home</a>
                        <a href="#" className="hover:text-orange-500">About Us</a>
                        <a href="#" className="hover:text-orange-500">Browse Equipment List</a>
                        <a href="#" className="hover:text-orange-500">List Your Equipment</a>
                        <a href="#" className="hover:text-orange-500">ERI Assist Plan</a>
                        <a href="#" className="hover:text-orange-500">Spare Parts</a>

                        {/* <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange-500">
              Equipment <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Excavator</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bulldozer</a>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-orange-500">
              Pages <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Services</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Projects</a>
            </div>
          </div> */}

                        <a href="#" className="hover:text-orange-500">Contact Us</a>
                    </nav>

                    

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
                {/* Overlay */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 bg-opacity-40 z-9"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}
                {/* Off-Canvas Menu */}
                <div
                    className={`z-99 fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button onClick={() => setMenuOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col p-4 space-y-3">
                        <a href="#" className="text-orange-500 font-medium">Home</a>
                        <a href="#" className="hover:text-orange-500">About</a>
                        <a href="#" className="hover:text-orange-500">Equipment</a>
                        <a href="#" className="hover:text-orange-500">Pages</a>
                        <a href="#" className="hover:text-orange-500">Contact Us</a>
                        <button className="bg-orange-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                            Make Appointment
                        </button>
                    </nav>
                </div>

                

            </div>
        </header>
    );
}
