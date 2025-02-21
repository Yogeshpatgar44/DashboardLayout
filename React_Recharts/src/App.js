import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";
import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Orders";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Graphs from "./pages/Graphs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to={isAuthenticated ? "/products" : "/login"} />} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />

       
        <Route path="/products" element={isAuthenticated ? <DashboardLayoutBasic><Products /></DashboardLayoutBasic> : <Navigate to="/login" />} />

     
        <Route path="/home" element={isAuthenticated ? <DashboardLayoutBasic><Home /></DashboardLayoutBasic> : <Navigate to="/login" />} />

        <Route path="/dashboard" element={isAuthenticated ? <DashboardLayoutBasic><Dashboard /></DashboardLayoutBasic> : <Navigate to="/login" />} />
        <Route path="/orders" element={isAuthenticated ? <DashboardLayoutBasic><Order /></DashboardLayoutBasic> : <Navigate to="/login" />} />
        <Route path="/about" element={isAuthenticated ? <DashboardLayoutBasic><About /></DashboardLayoutBasic> : <Navigate to="/login" />} />
        <Route path="/contact" element={isAuthenticated ? <DashboardLayoutBasic><Contact /></DashboardLayoutBasic> : <Navigate to="/login" />} />
        <Route path="/graphs" element={isAuthenticated ? <DashboardLayoutBasic><Graphs /></DashboardLayoutBasic> : <Navigate to="/login" />} />
        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
