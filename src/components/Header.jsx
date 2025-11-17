import { useAuth } from "../utils/idb.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { LogOut, CircleUserRound, Bell, Mail, PhoneCall, SearchIcon, XIcon } from "lucide-react";
// import { AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";


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

     const [open, setOpen] = useState(false);



    return (
        <header className="">
            <div className="max-w-[1200px] mx-auto md:px-4 px-4 md:pt-5 pt-3">
                <div className="bg-gray-800 md:py-3 py-3 md:px-4 px-3 text-white rounded-t-xl">
                    <div className="flex  justify-between gap-4 text-[13px]">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
                            <a href="mailto:info@equipmentrentalsindia.com" className="flex items-center md:gap-2 gap-1">
                                <Mail className="text-orange-500 w-3 md:w-3" />
                                <span class="text-[10px]">info@equipmentrentalsindia.com</span>
                            </a>
                            <div className="flex flex-row md:flex-row md:items-center md:gap-4 gap-2">
                                <a href="tel:+91-11-46562783" className="flex items-center md:gap-2 gap-1">
                                    <PhoneCall className="text-orange-500 w-3 md:w-3" />
                                    <span class="text-[10px]">+91-11-46562783</span>
                                </a>
                                <a href="tel:+91-9311494448" className="flex items-center md:gap-2 gap-1">
                                    <PhoneCall className="text-orange-500 w-3 md:w-3" />
                                    <span class="text-[10px]">+91-9311494448</span>
                                </a>
                            </div>
                        </div>
                        <div className=" gap-4 items-center hidden md:flex">

                            <a href="/equipmentform" className="hidden md:block bg-orange-400 text-white font-medium px-3 py-1 rounded hover:bg-orange-500 transition md:text-[11px]">
                                Post Equipment for Free
                            </a>
                            <a href="/LoginPage" className="md:text-[11px] hover:text-orange-400">
                                login
                            </a>
                            /
                            <a href="/RegisterPage" className="md:text-[11px] hover:text-orange-400">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-[41px_21px_51px_-59px_rgba(0,0,0,0.03)] z-50 flex-1 md:py-3 py-3 md:px-4 px-3 flex justify-between gap-4 items-center rounded-b-xl">

                    <div className="flex items-center gap-2">
                        <a href="/" className="">
                            <img src={logo} alt="logo" className="md:h-10 h-12" />
                        </a>
                    </div>


                    <nav className="hidden md:flex items-center gap-6 md:text-[12px]">
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Contact Us
                        </NavLink>

                        <button
                            onClick={() => setOpen(true)}
                            className="bg-orange-400 hover:bg-orange-500 py-1 px-2 rounded"
                        >
                            <Search className="w-4 text-white" />
                        </button>
                    </nav>





                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu className="h-7" />
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
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
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Contact Us
                        </NavLink>
                        
                        <NavLink
                            to="/LoginPage"
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            login
                        </NavLink>
                        <NavLink
                            to="/RegisterPage"
                            onClick={()=>{
                                setMenuOpen(false)
                            }}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-500 font-medium"
                                    : "text-gray-700 hover:text-orange-500"
                            }
                        >
                            Register
                        </NavLink>
                        <a href="/equipmentform" className="bg-orange-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                            Post Equipment for Free
                        </a>
                    </nav>
                </div>



            </div>
             {/* Offcanvas */}
      <div
        className={`
          fixed left-0 w-full bg-white shadow-lg z-50
          transition-transform duration-300 h-screen
          ${open ? "block top-0" : "hidden "}
        `}
      >
        <div className="p-5 flex items-center gap-3 border-b max-w-[1200px] mx-auto px-4">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Search
          </button>

          {/* Close Button */}
          <button onClick={() => setOpen(false)} className="py-2 bg-red-600 hover:bg-red-700 rounded-lg px-3 text-white">
            <XIcon className="w-4" />
          </button>
        </div>
      </div>
        </header>
    );
}
