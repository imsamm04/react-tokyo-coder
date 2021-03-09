import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/todo">Todo</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink>
            <Link to="/sign-in">Login with Google</Link>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;
