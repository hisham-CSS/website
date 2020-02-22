import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import RRLogo from '../images/RRLogo.png';

function RocketRecover()
{
    return(
    <div className="RRPage">
        <img className="RRLogo" width="500" src={RRLogo} />
        <p>Coming soon!</p>
    </div>
    );
}

export default RocketRecover;