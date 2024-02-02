import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { createBrowserHistory } from "history";

function App() {
  const { pathname } = useLocation();
  const history = createBrowserHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      // Scroll to the top when the route changes
      window.scrollTo(0, 0);
    });

    // Clean up the listener when the component unmounts
    return () => unlisten();
  }, [history]);

  useEffect(() => {
    // Scroll to the top when the component mounts
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
