import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Header() {
  const {isLogin, logoutUser} = useContext(AuthContext)
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
          {
            isLogin==true?( <button className="btn btn-danger" onClick={logoutUser}>Logout</button> ):( <Link to="/signin" className="btn btn-light text-dark">Login</Link>)
          }
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

export default Header;