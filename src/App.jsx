import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import FooterBar from './components/footer/FooterBar';
// Import pages
import Home from "./pages/Home"
import WhoWeAre from "./pages/WhoWeAres";
import OurBusiness from "./pages/OurBusiness";
import OurProducts from "./pages/OurProducts";
import Sustainability from "./pages/Sustainability";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import QuickQuote from "./pages/QuickQuote";
import GovernmentContracting from "./pages/GovernmentContracting";
import News from "./pages/News";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-business" element={<OurBusiness />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/quick-quote" element={<QuickQuote />} />
        <Route path="/government-contracting" element={<GovernmentContracting />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <FooterBar />
    </Router>
  );
};

export default App;
