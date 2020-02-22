import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../images/CSSLogo.png';
import Container from 'react-bootstrap/Container';

function MainPage()
{
    const contentStyle =
    {
        display: "inline-block",
        backgroundColor: "gray",
        flexDirection: "column",
        position: "relative",
        margin: "auto",
        padding: "auto"
    }
    return(
    <section className="Content" style={contentStyle}>
    <Image rounded src={logo} width="400"/>
    <p>Cat Splat Studios is an aspiring team of developers who are looking 
    to break into the Video Game Industry. Our main focus will be to 
    deliver great gameplay experiences for all platforms, while maintaining 
    a small footprint in terms of overhead costs. Our vision is not to 
    re-invent the wheel, but to find different and interesting ways to celebrate
    the familiar tropes that we enjoy.</p>
    <Row className="justify-content-md-center">
        <img className="mainImage" src={logo} width="150" />
        <img className="mainImage" src={logo} width="150" />
    </Row>
    <Row className="justify-content-md-center">
        <img className="mainImage" src={logo} width="150" />
        <img className="mainImage" src={logo} width="150" />
    </Row>
    </section>
    );

}

export default MainPage;