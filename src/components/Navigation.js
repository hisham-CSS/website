import React from 'react';
import CSSLogoNav from'../images/CSSLogoNav.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
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
            <Nav.Link>
            <Link to="/RocketRecover" className="navitem">Rocket Recover</Link>
            </Nav.Link>

            <Nav.Link>
            <Link to="/QuickLinks" className="navitem">Quick Links</Link>
            </Nav.Link>
            
            <Nav.Link>
            <Link to="/Shifter" className="navitem">Codename: Shifter</Link>
            </Nav.Link>
            
            <Nav.Link>
            <Link to="/About" className="navitem">About</Link>
            </Nav.Link>

        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Navigation;