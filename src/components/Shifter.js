import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import RRLogo from '../images/RRLogo.png';

function Shifter()
{
    return(
        <Container>
            <h1>Codename: Shifter</h1>
            <Carousel>
                <Image width="500" src={RRLogo} />
            </Carousel>
        </Container>
    );
}

export default Shifter;