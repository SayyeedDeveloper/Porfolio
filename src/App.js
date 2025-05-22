import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
