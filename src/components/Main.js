import React from 'react';
import About from '../components/About';
import MainPage from '../components/MainPage';
import QuickLinks from '../components/QuickLinks';
import RocketRecover from '../components/RocketRecover';
import Shifter from '../components/Shifter';
import { Switch, Route } from 'react-router-dom';

const Main = () =>
(
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/About" component={About} />
        <Route path="/QuickLinks" component={QuickLinks} />
        <Route path="/RocketRecover" component={RocketRecover} />
        <Route path="/Shifter" component={Shifter} />
    </Switch>
)

export default Main;