import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
  <header>
      <Navbar expand="lg" className="bg-black header">
      <Container>
        <Navbar.Brand href="#home"><i className='bi bi-house mx-2'></i>Brand Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
           <Link to="/">Home</Link>
           <Link to="/users">Users</Link>
           <Link to="/books">Books</Link>
          </Nav>
          <Link to="/signin" className="btn btn-light text-dark">Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

export default Header;