import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
class HomeHeaderNav extends Component {

  render() {
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    // } else {
    //     header.classList.remove("sticky");
    // }

    return (
        <Navbar bg="light" expand="lg" sticky="bottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className = "navBarItems">Pocetna</Nav.Link>
              <NavDropdown title="Usluge" id="basic-nav-dropdown" className = "navBarItems">
                <NavDropdown.Item href="#action/3.1">Popravka</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Izrada</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Prodaja</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className = "navBarItems">O nama</Nav.Link>
              <Nav.Link href="#link" className = "navBarItems">Kontakt</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <img src={'../../../../public/image/facebook.png'} width="30px" />

              </Nav.Link>
              <Nav.Link href="#memes">
              <img src={'../../../../public/image/instagram.png'} width="30px" />
                            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default HomeHeaderNav;