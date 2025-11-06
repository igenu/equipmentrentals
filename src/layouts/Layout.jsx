import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
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
