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



export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Restaurant Routes (NO layout) */}
        <Route path="/login" element={<p>Login</p>} />

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/browseequipment" element={<BrowseEquipment />} />
            <Route path="/equipmentform" element={<EquipmentForm />} />
            <Route path="/sparepartsform" element={<SparePartsForm />} />
            <Route path="/ERIAssist" element={<ERIAssist />} />

          </Route>
        </Route>
        
      </Routes>
    </Router>
  );
}
