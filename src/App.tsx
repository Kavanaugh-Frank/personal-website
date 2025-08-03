import { Routes, Route } from 'react-router-dom';
import './App.css'
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useEffect } from 'react';
import LandingPage from "./pages/LandingPage"

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div>
      <BackgroundBeams className="fixed inset-0 h-[200vh]" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App
