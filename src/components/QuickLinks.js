import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import RRLogo from '../images/RRLogo.png';

function QuickLinks()
{
    return(
        <Container>
            <h1>Quick Links</h1>
            <Carousel>
                <Image src={RRLogo} width="500"/>
            </Carousel>
        </Container>
    );
}

export default QuickLinks;