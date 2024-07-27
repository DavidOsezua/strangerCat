import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Footer } from "./Components";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="transition">
      <BrowserRouter>
        {/* <ScrollToTop */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
