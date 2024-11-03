import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import OurStory from "./components/pages/OurStory.jsx";
import Menu from "./components/pages/Menu.jsx";
import Contact from "./components/pages/Contact.jsx";

const App = () => {
  return (
    <Router basename="/Uncle-Wu">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;