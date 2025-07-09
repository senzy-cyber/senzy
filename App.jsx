
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateQuiz from "../pages/CreateQuiz";
import TakeQuiz from "../pages/TakeQuiz";
import NotFound from "../pages/NotFound";
import Navbar from "../Navbar";
import ClassQuiz from "../pages/ClassQuiz";
import FreeSoftwares from "../pages/FreeSoftwares";
import Footer from "../components/Footer";
import React, { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";


export default function App() {
  const [showNotif, setShowNotif] = useState(false);
  const notifInterval = 2 * 60 * 1000; // 2 minutes
  const firstDelay = 3000; // 3 seconds for first notification
  const notifMessage = "Subscribe To Senzy FF On YouTube.";
  const notifTimerRef = useRef(null);
  const notifIntervalRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // Only start timers once, even if component re-renders
    if (startedRef.current) return;
    startedRef.current = true;
    notifTimerRef.current = setTimeout(() => {
      setShowNotif(true);
      notifIntervalRef.current = setInterval(() => {
        setShowNotif(true);
      }, notifInterval);
    }, firstDelay);
    return () => {
      if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
      if (notifIntervalRef.current) clearInterval(notifIntervalRef.current);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quiz/:id" element={<TakeQuiz />} />
          <Route path="/class/:classNum" element={<ClassQuiz />} />
          <Route path="/free-softwares" element={<FreeSoftwares />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Notification
        open={showNotif}
        onClose={() => setShowNotif(false)}
        message={notifMessage}
      />

      <Footer />
    </BrowserRouter>
  );
}

