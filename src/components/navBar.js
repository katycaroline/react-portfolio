import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import About from './about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

function Navbar() {

    return (
        <Router>
            <div className='topnav'>
                <div className='topnav-left'>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className='topnav-right'>
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/resume">RESUME</Link>
                    <Redirect from="/" exact to="/about" />
                </div>
            </div>

            <Switch>
            <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default Navbar;