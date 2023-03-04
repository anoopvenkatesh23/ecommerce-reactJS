import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationalRoutes from "./pages/NavigationalRoutes";
import NavbarHeader from "./pages/Navbar";
import FooterBar from "./pages/Footer";
// import "../public/css/home.css";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <NavigationalRoutes />
      <FooterBar />
    </Router>
  );
}

export default App;
