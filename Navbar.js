import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Create Quiz", path: "/create" },
    { name: "Take Quiz", path: "/quiz/1" },
    { name: "Free Softwares", path: "/free-softwares" },
    { name: "About", path: "About.jsx" },
  ];
  return (
    <>
      {/* Top Utility Bar removed as requested */}
      <nav className="senzy-navbar">
        <Link to="/" className="senzy-navbar-logo" style={{ textDecoration: 'none' }}>SenzyQuiz</Link>
        <div className="senzy-navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`senzy-navbar-link${location.pathname === item.path ? " active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="senzy-navbar-profile">
          <img src="https://ui-avatars.com/api/?name=Senzy+User&background=2563eb&color=fff&rounded=true" alt="Profile" className="senzy-navbar-avatar" />
          <span className="senzy-navbar-username">Senzy User</span>
          <button className="senzy-navbar-btn" title="Notifications">
            <svg width="22" height="22" fill="none" stroke="#ffe066" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"/></svg>
          </button>
          <button className="senzy-navbar-btn" title="Settings">
            <svg width="22" height="22" fill="none" stroke="#ffe066" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.82 1.65 1.65 0 0 0 3.5 15H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 12c0-.36-.13-.7-.35-.97A1.65 1.65 0 0 0 3 8.6V8a2 2 0 1 1 4 0v.09c.26.09.52.22.74.39.22.17.41.37.57.6.16.23.29.48.39.74H12c.36 0 .7.13.97.35.23.16.43.35.6.57.17.22.3.48.39.74V12c0 .36.13.7.35.97.16.23.35.43.57.6.22.17.48.3.74.39V16c0 .36-.13.7-.35.97-.23.16-.43.35-.6.57-.17.22-.3.48-.39.74V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4z"/></svg>
          </button>
          <button className="senzy-navbar-btn" title="Help">
            <i className="fa-solid fa-circle-question" style={{color:'#ffe066',fontSize:'20px'}}></i>
          </button>
          <button className="senzy-navbar-btn" title="Logout">
            <i className="fa-solid fa-right-from-bracket" style={{color:'#ffe066',fontSize:'20px'}}></i>
          </button>
        </div>
      </nav>
    </>
  );
}
