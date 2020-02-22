import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sample from '../images/sample.svg';
import Container from 'react-bootstrap/Container';

function About()
{
    const imgAboutStyle =
    {
        borderRadius: "20%",
        height: "100px",
        margin: "10px"
    };

    const descrptionStyle =
    {
        margin: "10px", 
        opacity: "50%"
    };

    const topContainer =
    {
        display: "inline-flex",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
        position: "relative",
        margin: "auto",
        width: "100%",
        alignItems: "center",
        margin: "auto",
        padding: "10px"
    };

    return(
    <React.Fragment>
    <div style={topContainer}>
        <h1 style={{fontWeight: "bold"}}>About Us</h1>
        <hr style={{borderTop: '3px solid red', width: '50%'}} />
        <p style={{margin: '50px', padding: '5px'}}>Cat Splat Studios Inc. was founded by Hisham Ata in 2015 while he was getting his game development degree at the Toronto Film School. There he met Kyle Skidmore and Matthew Douglas and continued working on various independent projects. In 2019 - Kyle and Matthew became part of the offical ownership and now all three of them are working to put out a wide variety of games in differing genre's.</p>
        
    </div>
    
    <div className="AboutUs">
    <h1 style={{fontWeight: "bold", marginBottom: "5px"}}>Meet The Team!</h1>
    <hr style={{borderTop: '3px solid black', width: '80%'}} />
    <Row>
        <Col xs={12} lg={true}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />   
            <div style={descrptionStyle}>
            <h4>Hisham Ata</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}} />
            <h6>Founder - Business Operations Manager</h6>
            <p style={{fontSize: "15px"}}>Hisham Ata founded Cat Splat Studios in 2015. 
            His background in programming, IT and project management he manages the business operations of Cat Splat Studios.</p>
            </div>  
        </Col>

        <Col xs={12} lg={true}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />
            <div style={descrptionStyle}>
            <h4>Kyle Skidmore</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}} />
            <h6>Project Manager - Game Designer</h6>
            <p style={{fontSize: "15px"}}>Kyle Skidmore is the project manager and part of the design team. He combines his business and game design experience to bring a unique 
            perspective to our design team.</p>
            </div>
        </Col>

        <Col xs={12} lg={true}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />
            <div style={descrptionStyle}>
            <h4>Matthew Douglas</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}} />
            <h6>Technical Director</h6>
            <p style={{fontSize: "15px"}}>Matthew Douglas is a software developer who excels in game applications. His drive to bring the best experience to the user has given him skills 
            developing many gameplay mechanics.</p>
            </div>
        </Col>
    </Row>
    </div>
    </React.Fragment>
    )
}

export default About;