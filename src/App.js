import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Error404 from "./components/errors/404";

import Navbar from "./components/navbar-footer/navbar";
import MobileNavbar from "./components/navbar-footer/mobile-navbar";
import Footer from "./components/navbar-footer/footer";

import { Routes, Route } from "react-router-dom";

// fonts
import "./fonts/Cinematografica-Bold-trial.ttf";
import "./fonts/Gilroy-Light.ttf";
import "./fonts/Gilroy-Medium.ttf";
import "./fonts/Gilroy-Regular.ttf";
import "./fonts/Gilroy-SemiBold.ttf";

function App() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hakkımızda" element={<About />} />
        <Route path="/İletişim" element={<Contact />} />
        <Route path="/Ürünlerimiz" element={<Products />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
