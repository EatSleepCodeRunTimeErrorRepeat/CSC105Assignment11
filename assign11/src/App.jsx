import { useState } from 'react';
import { BrowserRouter ,Router, Route, Routes, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import "./App.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // hide the login button when clicking on a link
  const isLinkClicked = location.pathname !== "/";
  
  return (
    <>
    <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Profile/:id" element={<Profile />} />
              {isLoggedIn && (
            <Route path="/Admin" element={<Admin setIsLoggedIn={setIsLoggedIn} />} />
          )}
          </Routes>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          {!isLinkClicked && (
            <button style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: "none",
              color: "white",
              padding: "20px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "16px",
              margin: "4px 2px",
              borderRadius: "12px",
              backgroundImage: "linear-gradient(to right, blue, purple)",
            }}
              onClick={() => setIsLoggedIn(!isLoggedIn)}>
                  {isLoggedIn ? "Logout" : "Login"}
            </button>
        )}
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <nav>
          <ul>
            <li>
              <NavLink className="navlink" 
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }}
                to='/'>
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" 
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }} 
                to='/About'>
                  About
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" 
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }} 
                to='/Contact'>
                  Contact
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink className="navlink" 
                  style={({ isActive }) => {
                    return isActive ? { color: "red" } : {};
                  }} 
                  to='/Admin'>
                    Admin
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
      </div>
    </>
  );
}

export default App;
