import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/logo192.png'
import { UserContext } from '../../context/UserContext';

function Header() {
  const { logout, user } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    let token = localStorage.getItem('token');
    if (token) {
      logout();
      navigate('/login')
      toast.success('Log out success')
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img src={logo} alt="logo" style={{ height: '30px', width: '30px', marginRight: '5px' }} />
          <span>Bui Quang Huong</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {((user && user.auth) || window.location.pathname === '/') &&
            <>
              <Nav className="me-auto">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/users">Manage User</NavLink>
              </Nav>
              <Nav>
                {user && user.email && <div className="nav-link">Welcome {user.email}</div>}
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  {user && user.auth === true
                    ? <NavDropdown.Item onClick={() => handleLogout()}>Log Out</NavDropdown.Item>
                    : <NavLink className='dropdown-item' to="/login">Log In</NavLink>
                  }
                </NavDropdown>
              </Nav>
            </>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;