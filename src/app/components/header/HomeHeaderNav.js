import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { data } from '../../../configurationData'
import { browserHistory } from "react-router";

class HomeHeaderNav extends Component {
  constructor(props) {
    super(props)
    this.createDropdownElement = this.createDropdownElement.bind(this)
    this.createChildrenElement = this.createChildrenElement.bind(this)
  }
  navigate(value){
    browserHistory.push(value)
  }
  createChildrenElement(data){
    let children = data.map((element, index) => (
      <NavDropdown.Item href="#action/3.2">{element.value}</NavDropdown.Item>
    ))
    return children

  }
  createDropdownElement(element) {
    let row = [];
    if (element.children) {
      let childrenData = this.createChildrenElement(element.children)
     row.push(
      <NavDropdown title={element.value} id="basic-nav-dropdown" className = "navBarItems">
        {childrenData}
      </NavDropdown>

     )
    }
    else {
      row.push(
        <Nav href={element.href} className="navBarItems" onClick={()=>this.navigate(element.href)}>{element.value}</Nav>
      )
    }
    return row

  }
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
            {data.header.navOptions.map((element, index) => (
              this.createDropdownElement(element)
            ))}
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