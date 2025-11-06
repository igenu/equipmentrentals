import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="">
      <Header />
      
      <Outlet />
        
       <Footer />
    </div>
  );
}
