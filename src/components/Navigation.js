import React from 'react';
import CSSLogoNav from'../images/CSSLogoNav.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navigation()
{
    return(
    
    <Navbar bg="light">
        <Navbar.Brand href="/">
            <img src={CSSLogoNav}
            width="30"
            className="d-inline-block align-center"
            alt="Cat Splat Studios Nav Logo" />{' '}Cat Splat Studios
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        <Nav>
            <Nav.Link href="/#/RocketRecover/" className="navitem">Rocket Recover</Nav.Link>
            <Nav.Link href="/#/QuickLinks/" className="navitem">Quick Links</Nav.Link>
            <Nav.Link href="/#/Shifter/" className="navitem">Codename: Shifter</Nav.Link>
            <Nav.Link href="/#/About/" className="navitem">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Navigation;