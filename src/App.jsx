import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="scrollable">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
