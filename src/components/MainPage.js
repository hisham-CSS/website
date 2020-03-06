import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../images/CSSLogo.png';
import Sample from '../images/sample.svg';
import RRLogo from '../images/RRLogo.png';
import Zoom from 'react-reveal/Zoom';
import shortid from 'short-id';
import { SocialIcon } from 'react-social-icons';


function MainPage()
{

    const imgAboutStyle =
    {
        borderRadius: "20%",
        height: "100px",
        margin: "10px"
    };

    const descrptionStyle =
    {
        opacity: "50%",
        backgroundColor: "white"
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

    const contentStyle =
    {
        display: "inline-block",
        backgroundColor: "gainsboro",
        flexDirection: "column",
        position: "relative",
        margin: "auto",
        padding: "auto"
    }

    const socialIconStyle =
    {
        height: "30px",
        width: "30px"
    }

    const [display, setDisplay] = useState(0);

    function curDisplay()
    {
        switch (display)
        {
            case 0:
                return(
                    <Zoom>
                        <React.Fragment>
                        <Image rounded src={logo} width="400"/>
                        <p>Cat Splat Studios is an aspiring team of developers who are looking 
                        to break into the Video Game Industry. Our main focus will be to 
                        deliver great gameplay experiences for all platforms, while maintaining 
                        a small footprint in terms of overhead costs. Our vision is not to 
                        re-invent the wheel, but to find different and interesting ways to celebrate
                        the familiar tropes that we enjoy.</p>
                        </React.Fragment>
                    </Zoom>)
            case 1:
                return(
                    <Zoom>
                        <React.Fragment>
                        <Image style={{paddingTop: '40px'}} src={RRLogo} width="400"/>
                        <p>Rocket Recover - Out Now On Google Play!</p>
                        <p>An endless advoidance runner. You can play and customise your experience!</p>
                        <p>Choose from a varity of ships, backgrounds, obstcles and even custom music!</p>
                        <p>Click to be taken to the Google Play download page!</p>
                        </React.Fragment>
                    </Zoom>)
            case 2:
                return(
                    <Zoom>
                        <React.Fragment>
                        <Image rounded src={logo} width="400"/>
                        <p>Quick Links Coming Soon</p>
                        </React.Fragment>
                    </Zoom>)
            case 3:
                return(
                    <Zoom>
                        <React.Fragment>
                        <Image rounded src={logo} width="400"/>
                        <p>Codename: Shifter - Pre-Alpha</p>
                        </React.Fragment>
                    </Zoom>)
        }
    }



    return(
    <section className="Content" style={contentStyle}>
    

    <div key={shortid.generate()} style={{height: '500px'}}>
    {curDisplay()}
    </div>

    <Row className="justify-content-md-center">
        <a href="https://play.google.com/store/apps/details?id=com.CatSplatStudios.RocketRecover" target="_blank">
        <img className="mainImage" src={RRLogo} width="150" height="150"
        onMouseOver={() => setDisplay(1)}
        onMouseOut={() => setDisplay(0)}
        />
        </a>

        <img className="mainImage" src={logo} width="150" 
        onMouseOver={() => setDisplay(2)}
        onMouseOut={() => setDisplay(0)}
        />

        <img className="mainImage" src={logo} width="150" 
        onMouseOver={() => setDisplay(3)}
        onMouseOut={() => setDisplay(0)}
        />
    </Row>
    

    <div className="AboutUs">
    <hr style={{borderTop: '3px solid black', width: '80%'}} />
    <h1 style={{fontWeight: "bold", marginBottom: "5px"}}>Meet The Team!</h1>
    <hr style={{borderTop: '3px solid black', width: '80%'}} />
    <Row style={{width: '80%'}}>
        <Col xs={12} lg={4}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />   
            <div style={descrptionStyle}>
            <h4>Hisham Ata</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}} />
            <h6>Founder - Business Operations Manager</h6>
            Hisham Ata founded Cat Splat Studios in 2015. His background in programming, IT and project management he manages the business operations of Cat Splat Studios.
            
            <div style={{marginTop: '10px', marginLeft: '60px', marginRight: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between'}}>
                <SocialIcon url="http://www.twitter.com/anagramMC" style={socialIconStyle}/>
                <SocialIcon url="http://www.instagram.com/anagrammc_music" style={socialIconStyle}/>
                <SocialIcon url="https://www.linkedin.com/in/hishamata/" style={socialIconStyle}/>
            </div>
            </div>
        </Col>

        <Col xs={12} lg={4}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />
            <div style={descrptionStyle}>
            <h4>Kyle Skidmore</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}} />
            <h6>Project Manager - Game Designer</h6>
            Kyle Skidmore is the project manager and part of the design team. He combines his business and game design experience to bring a unique 
            perspective to our design team.
            
            <div style={{marginTop: '10px', marginLeft: '60px', marginRight: '60px'}}>
                <SocialIcon url="https://www.linkedin.com/in/kyleskidmore03/" style={socialIconStyle}/>
            </div>
            </div>
        </Col>

        <Col xs={12} lg={4}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />
            <div style={descrptionStyle}>
            <h4>Matthew Douglas</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}} />
            <h6>Technical Director</h6>
            Matthew Douglas is a software developer who excels in game applications. His drive to bring the best experience to the user has given him skills 
            developing many gameplay mechanics.
            
            <div style={{marginTop: '10px', marginLeft: '60px', marginRight: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between'}}>
                <SocialIcon url="https://twitter.com/Matt_W_Douglas" style={socialIconStyle}/>
                <SocialIcon url="https://www.instagram.com/matthew_w_douglas/" style={socialIconStyle}/>
                <SocialIcon url="https://www.linkedin.com/in/matthewwalterdouglas/" style={socialIconStyle}/>
            </div>
            </div>
        </Col>
    </Row>
    </div>


    </section>

    );

}

export default MainPage;