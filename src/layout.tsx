import React, { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">State Managment Flavor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="postgresql">🧊PostgreSql</Link>
          </Nav.Link>
          <Nav.Link href="features">🔥Redux</Nav.Link>
          <Nav.Link href="pricing">🌍Context/Provider</Nav.Link>
        </Nav>
      </Navbar>
      {children}
    </>
  );
};

export default Layout;
