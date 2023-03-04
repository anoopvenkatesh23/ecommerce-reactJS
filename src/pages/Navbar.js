import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="nav-links" to={"/"}>
            Big Basket
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-links" to={"/"}>
              Home
            </Link>
            <Link className="nav-links" to={"/products"}>
              Products
            </Link>
            <Link className="nav-links" to={"/aboutus"}>
              About Us
            </Link>
            <Link className="nav-links" to={"/contactus"}>
              Contact Us
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-links" to={"/"}>
              Welcome to the store!
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
