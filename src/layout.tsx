import React, { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">State Managment Flavor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="postgresql">🧊PostgreSql</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="redux">🔥Redux</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="context/provider">🌍Context/Provider</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      {children}
    </>
  );
};

export default Layout;
