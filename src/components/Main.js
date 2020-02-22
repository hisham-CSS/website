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
        <Route exact path={process.env.PUBLIC_URL + '/'} component={MainPage} />
        <Route path={process.env.PUBLIC_URL + '/About'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/QuickLinks'} component={QuickLinks} />
        <Route path={process.env.PUBLIC_URL + '/RocketRecover'} component={RocketRecover} />
        <Route path={process.env.PUBLIC_URL  + '/Shifter'} component={Shifter} />
    </Switch>
)

export default Main;