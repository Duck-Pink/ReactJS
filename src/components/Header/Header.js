import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo192.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    let token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token')
      navigate('/login')
      toast.success('Log out success')
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ height: '30px', width: '30px', marginRight: '5px' }} />
          <span>Bui Quang Huong</span>
          abcd
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/users">Manage User</NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavLink className='dropdown-item' to="/login">Log In</NavLink>
              <NavDropdown.Item onClick={() => handleLogout()}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;