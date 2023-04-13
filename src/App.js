import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homescreen from "./screens/Homescreen";
import Aboutscreen from "./screens/Aboutscreen";
import Contactscreen from "./screens/Contactscreen";
import Errorscreen from "./screens/Errorscreen";
import Footer from "./Components/Footer";
import "./index.css";
import Finddogscreen from "./screens/Finddogscreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/find" element={<Finddogscreen />} />
          <Route path="/about" element={<Aboutscreen />} />
          <Route path="/contact" element={<Contactscreen />} />
          <Route path="/*" element={<Errorscreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
