import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../images/CSSLogo.png';
import Sample from '../images/sample.svg';
import RRLogo from '../images/RRLogo.png';
import GooglePlayBadge from '../images/google-play-badge.png'
import Card from 'react-bootstrap/Card';

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
        backgroundColor: "black",
        borderRadius: '15px',
        margin: "auto",
        paddingBottom: "10px",
        color: "white"
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
        height: "60px",
        width: "60px",
        margin: "30px"
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
                        <Image src={RRLogo} width="400"/>
                        <p>Rocket Recover - Out Now On Google Play!</p>
                        <Image src={GooglePlayBadge} />
                        <p>An endless advoidance runner. You can play and customise your experience!
                        Choose from a varity of ships, backgrounds, obstcles and even custom music!
                        Click to be taken to the Google Play download page!</p>
                        </React.Fragment>
                    </Zoom>)
            case 2:
                return(
                    <Zoom>
                        <React.Fragment>
                        <p>Cat Splat Studios is an aspiring team of developers who are looking 
                        to break into the Video Game Industry. Our main focus will be to 
                        deliver great gameplay experiences for all platforms, while maintaining 
                        a small footprint in terms of overhead costs. Our vision is not to 
                        re-invent the wheel, but to find different and interesting ways to celebrate
                        the familiar tropes that we enjoy.</p>
                        </React.Fragment>
                    </Zoom>)
            case 3:
                return(
                    <Zoom>
                        <React.Fragment>
                        <p>Cat Splat Studios is an aspiring team of developers who are looking 
                        to break into the Video Game Industry. Our main focus will be to 
                        deliver great gameplay experiences for all platforms, while maintaining 
                        a small footprint in terms of overhead costs. Our vision is not to 
                        re-invent the wheel, but to find different and interesting ways to celebrate
                        the familiar tropes that we enjoy.</p>
                        </React.Fragment>
                    </Zoom>)
        }
    }



    return(
    <section className="Content">
    <img src={logo} style={{width: '50%', maxWidth: '400px'}}/>

    <div style={{width: "100%", minHeight: "100px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Presents!</h1>
    </div>

    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={RRLogo} style={{width: '60%', maxWidth:'600px' }} />
    </div>

    <a href="https://play.google.com/store/apps/details?id=com.CatSplatStudios.RocketRecover">
        <img src={GooglePlayBadge} width="200px" />
    </a>


    <hr style={{borderTop: '3px solid black', width: '80%'}} />
    <h1 style={{fontWeight: "bold", marginBottom: "5px"}}>Get In Touch</h1>
    <hr style={{borderTop: '3px solid black', width: '80%'}} />

    <SocialIcon url="http://www.twitter.com/catsplatstudios"  bgColor="#000000" fgColor="#FFFFFF" style={socialIconStyle}/>
    <SocialIcon url="https://www.facebook.com/catsplatstudios" bgColor="#000000" fgColor="#FFFFFF" style={socialIconStyle} />
    <SocialIcon url="https://www.instagram.com/catsplatstudios/" bgColor="#000000" fgColor="#FFFFFF" style={socialIconStyle} />
    <SocialIcon url="https://www.linkedin.com/company/cat-splat-studios/" bgColor="#000000" fgColor="#FFFFFF" style={socialIconStyle} />
    <SocialIcon url="mailto:info@catsplatstudios.com" bgColor="#000000" fgColor="#FFFFFF" style={socialIconStyle} network="mailto" />
    

    <a href="https://drive.google.com/drive/folders/1OHfDNc0OVYBOGCAhdl6607Skq8htgnxs?usp=sharing" target="_blank" style={{fontWeight: 'bold', textDecoration: 'none'}}>
    <p>Terms</p>
    </a>
    <a href="https://docs.google.com/document/d/1OAXsbEkM9idgKMaEl5uLz13LieiYTW5kWkQaGoDRqe8/edit?usp=sharing" target="_blank" style={{fontWeight: 'bold', textDecoration: 'none'}}>
    <p>Privacy</p>
    </a>
    <p>© 2014-2020 Cat Splat Studios Inc</p>
                

    {/*<Row className="justify-content-md-center">
        <Col xs={12} lg={12}>
        <div style={{width: "100%", minHeight: "100px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Presents!</h1>
        </div>
        </Col>
    </Row>

    <Row className="justify-content-md-center">
        <Col xs={12} lg={12}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={RRLogo} width="40%" />
        </div>
        </Col>
    </Row>

    <Row className="justify-content-md-center">
        <Col xs={12} lg={12}>
        <a href="https://play.google.com/store/apps/details?id=com.CatSplatStudios.RocketRecover">
        <img src={GooglePlayBadge} width="10%" />
        </a>
        </Col>
    </Row> */}



    {/* <div key={shortid.generate()} style={{height: 'auto', minHeight: '500px', display: 'flex', alignItems: 'center', backgroundColor: 'green'}}>
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
    </Row> */}
    
    {/* <div className="AboutUs">
    <hr style={{borderTop: '3px solid black', width: '80%'}} />
    <h1 style={{fontWeight: "bold", marginBottom: "5px"}}>Meet The Team!</h1>
    <hr style={{borderTop: '3px solid black', width: '80%'}} />
    <Row style={{width: '80%', display: 'flex', alignItems: 'space-between', justifyContent: 'space-between'}}>
        <Col xs={12} lg={3}>
            <div style={descrptionStyle}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />   
            <h4>Hisham Ata</h4>

            <div style={{border: '2px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', margin: '10px'}}>
            <h6>Founder - Business Operations Manager</h6>
            </div>
            
            <div style={{padding: '10px'}}>
            Hisham Ata founded Cat Splat Studios in 2015. His background in programming, IT and project management he manages the business operations of Cat Splat Studios.
            </div>
            <div style={{marginTop: '10px', marginLeft: '60px', marginRight: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between'}}>
                <SocialIcon url="http://www.twitter.com/anagramMC" style={socialIconStyle}/>
                <SocialIcon url="http://www.instagram.com/anagrammc_music" style={socialIconStyle}/>
                <SocialIcon url="https://www.linkedin.com/in/hishamata/" style={socialIconStyle}/>
            </div>
            </div>
        </Col>

        <Col xs={12} lg={3}>
            <div style={descrptionStyle}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />
            <h4>Kyle Skidmore</h4>

            <div style={{border: '2px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', margin: '10px'}}>
            <h6>Project Manager - Game Designer</h6>
            </div>

            <div style={{padding: '10px'}}>
            Kyle Skidmore is the project manager and part of the design team. He combines his business and game design experience to bring a unique 
            perspective to our team.
            </div>
            
            
            <div style={{marginTop: '10px', marginLeft: '60px', marginRight: '60px'}}>
                <SocialIcon url="https://www.linkedin.com/in/kyleskidmore03/" style={socialIconStyle}/>
            </div>
            </div>
        </Col>

        <Col xs={12} lg={3}>
            <div style={descrptionStyle}>
            <img style={imgAboutStyle} src={Sample} alt="Hisham" />
            <h4>Matthew Douglas</h4>

            <div style={{border: '2px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', margin: '10px'}}>
            <h6>Technical Director</h6>
            </div>

            <div style={{padding: '10px'}}>
            Matthew Douglas is a software developer who excels in game applications. His drive to bring the best experience has given him skills 
            developing many gameplay mechanics.
            </div>
            
            
            <div style={{marginTop: '10px', marginLeft: '60px', marginRight: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between'}}>
                <SocialIcon url="https://twitter.com/Matt_W_Douglas" style={socialIconStyle}/>
                <SocialIcon url="https://www.instagram.com/matthew_w_douglas/" style={socialIconStyle}/>
                <SocialIcon url="https://www.linkedin.com/in/matthewwalterdouglas/" style={socialIconStyle}/>
            </div>
            </div>
        </Col>
    </Row>
    </div> */}


    </section>

    );

}

export default MainPage;