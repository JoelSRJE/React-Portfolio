import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  {
    /*

  const location = useLocation();
  const [titleOfPage, setTitleOfPage] = useState("Portfolio");
  const [titleColor, setTitleColor] = useState("bg-pastel-purple");

useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitleOfPage("Portfolio");
        setTitleColor("bg-pastel-purple");
        break;
      case "/About":
        setTitleOfPage("About");
        setTitleColor("bg-pastel-blue");
        break;
      case "/Projects":
        setTitleOfPage("Projects");
        setTitleColor("bg-pastel-green");
        break;
      case "/Contact":
        setTitleOfPage("Contact");
        setTitleColor("bg-pastel-pink");
        break;
      default:
        setTitleOfPage("Portfolio");
        setTitleColor("bg-pastel-purple");
        break;
    }
  }, [location]); */
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
