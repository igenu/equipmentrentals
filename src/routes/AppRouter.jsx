import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "../utils/idb";
import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BrowseEquipment from "../pages/browseequipment/BrowseEquipment";
import EquipmentForm from "../pages/EquipmentForm/EquipmentForm";
import SparePartsForm from "../pages/sparepartsform/SparePartsForm";
import ERIAssist from "../pages/ERIAssist/ERIAssistHome";
import ContactUs from "../pages/contactus/ContactUsHome";
import LoginPage from "../pages/LoginPage/LoginPageHome";
import RegisterPage from "../pages/RegisterPage/RegisterPageHome";
import BlogPage from "../pages/BlogPage/BlogPageHome";
import BlogDetail from "../pages/BlogDetail/BlogDetailHome";
import EquipmentDetail from "../pages/EquipmentDetail/EquipmentDetailHome";



export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        
        <Route path="/login" element={<p>Login</p>} />

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/browseequipment" element={<BrowseEquipment />} />
            <Route path="/equipmentform" element={<EquipmentForm />} />
            <Route path="/sparepartsform" element={<SparePartsForm />} />
            <Route path="/ERIAssist" element={<ERIAssist />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/BlogPage" element={<BlogPage />} />
            <Route path="/BlogDetail" element={<BlogDetail />} />
            <Route path="/EquipmentDetail" element={<EquipmentDetail />} />

          </Route>
        </Route>
        
      </Routes>
    </Router>
  );
}
