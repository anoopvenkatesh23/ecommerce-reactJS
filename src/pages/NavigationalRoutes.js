import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Products from "./Products";

const NavigationalRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default NavigationalRoutes;
