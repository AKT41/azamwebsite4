import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import ProductDetails from "./pages/products/[slug]";
import Error404 from "./components/errors/404";

import Navbar from "./components/navbar-footer/navbar";
import MobileNavbar from "./components/navbar-footer/mobile-navbar";
import Footer from "./components/navbar-footer/footer";

import { Routes, Route } from "react-router-dom";

import { Helmet } from "react-helmet";

// fonts
import "./fonts/Cinematografica-Bold-trial.ttf";
import "./fonts/Gilroy-Light.ttf";
import "./fonts/Gilroy-Medium.ttf";
import "./fonts/Gilroy-Regular.ttf";
import "./fonts/Gilroy-SemiBold.ttf";
import { t } from "i18next";

function App() {
  return (
    <>
      <Helmet>
        <title>Azam Tx</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.hizliresim.com/rzffzme.jpg"
        />
      </Helmet>
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${t("NavbarAbout")}`} element={<About />} />
        <Route path={`/${t("NavbarContact")}`} element={<Contact />} />
        <Route path={`/${t("NavbarProducts")}`} element={<Products />} />
        <Route
          path={`/${t("NavbarProducts")}/:slug`}
          element={<ProductDetails />}
        />
        {/* <Route path="/Ürünlerimiz/:slug" element={<ProductDetails />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
