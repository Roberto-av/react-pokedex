import { Navbar, Container } from "react-bootstrap";
import Logo from "./Logo";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 custom-navbar">
      <Container fluid>
        <Navbar.Brand className="navbar-brand"><Logo className="logo" />
        <h1 className="navbar-title">POKEDEX</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
