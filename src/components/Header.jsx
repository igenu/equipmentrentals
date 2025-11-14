import { useAuth } from "../utils/idb.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { LogOut, CircleUserRound, Bell, Mail, PhoneCall } from "lucide-react";
// import { AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";


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
                    <div className="flex  justify-between gap-4 text-[13px]">
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
                        <div className=" gap-3 items-center hidden md:flex">

                            <a href="/equipmentform" className="hidden md:block bg-orange-500 text-white font-medium px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                                Post Equipment for Free
                            </a>
                            <a href="/LoginPage" className="">
                                login
                            </a>
                            /
                            <a href="/RegisterPage" className="">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-[41px_21px_51px_-59px_rgba(0,0,0,0.03)] z-50 flex-1 py-3 px-6 flex justify-between gap-4 items-center rounded-b-2xl">

                    <div className="flex items-center gap-2">
                        <div className="">
                            <img src={logo} alt="logo" className="md:h-18 h-15" />
                        </div>
                    </div>


                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            About Us
                        </NavLink>

                        <NavLink
                            to="/browseequipment"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Browse Equipment List
                        </NavLink>

                        <NavLink
                            to="/equipmentform"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            List Your Equipment
                        </NavLink>

                        <NavLink
                            to="/ERIAssist"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            ERI Assist Plan
                        </NavLink>

                        <NavLink
                            to="/sparepartsform"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Spare Parts
                        </NavLink>

                        <NavLink
                            to="/contactus"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </nav>





                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>

                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 bg-opacity-40 z-9"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}

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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            About Us
                        </NavLink>

                        <NavLink
                            to="/browseequipment"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Browse Equipment List
                        </NavLink>

                        <NavLink
                            to="/equipmentform"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            List Your Equipment
                        </NavLink>

                        <NavLink
                            to="/ERIAssist"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            ERI Assist Plan
                        </NavLink>

                        <NavLink
                            to="/sparepartsform"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Spare Parts
                        </NavLink>

                        <NavLink
                            to="/contactus"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Contact Us
                        </NavLink>
                        <a href="#" className="hover:text-orange-500">login</a>
                        <a href="#" className="hover:text-orange-500">Register</a>
                        <a href="/equipmentform" className="bg-orange-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                            Post Equipment for Free
                        </a>
                    </nav>
                </div>



            </div>
        </header>
    );
}
