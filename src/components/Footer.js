import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';


function Footer()
{
    const col1Style = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }
    const myStyle = {
    }

    return(
        <Row>
            <Col>
            <p>© 2014-2020 Cat Splat Studios Inc</p>
            </Col>
            
            <Col>
                <a href="https://drive.google.com/drive/folders/1OHfDNc0OVYBOGCAhdl6607Skq8htgnxs?usp=sharing" target="_blank" style={{fontWeight: 'bold', textDecoration: 'none'}}>
                <p>Terms</p>
                </a>
                <a href="https://docs.google.com/document/d/1OAXsbEkM9idgKMaEl5uLz13LieiYTW5kWkQaGoDRqe8/edit?usp=sharing" target="_blank" style={{fontWeight: 'bold', textDecoration: 'none'}}>
                <p>Privacy</p>
                </a>
                <SocialIcon className="socialIcon" url="http://www.twitter.com/catsplatstudios"  style={myStyle}/>
                <SocialIcon className="socialIcon" url="https://www.facebook.com/catsplatstudios" style={myStyle}/>
                <SocialIcon className="socialIcon" url="https://www.instagram.com/catsplatstudios/" style={myStyle}/>
            </Col>
        </Row>)    
}
export default Footer;