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
        display: 'flex',
        marginRight: '10px',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }

    return(
    <div className="FootOfPage">
        <Row>
            <Col style={col1Style}>
            <p>© 2014-2020 Cat Splat Studios Inc</p>
            </Col>
            
            <Col style={myStyle}>
                <a href="" target="_blank">
                <p style={{paddingRight: '30px'}}>Terms</p>
                </a>
                <a href="" target="_blank">
                <p style={{paddingRight: '30px'}}>Privacy</p>
                </a>
                <SocialIcon className="socialIcon" url="http://www.twitter.com/catsplatstudios"  style={myStyle}/>
                <SocialIcon className="socialIcon" url="https://www.facebook.com/catsplatstudios" style={myStyle}/>
                <SocialIcon className="socialIcon" url="https://www.instagram.com/catsplatstudios/" style={myStyle}/>
            </Col>
        </Row>
    </div>)    
}
export default Footer;