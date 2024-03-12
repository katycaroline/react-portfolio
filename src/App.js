import React  from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import About from './components/about';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
<div className="App">
            <Router>
                <div className='topnav'>
                    <div className='topnav-left'>
                        <Link to="/about">ABOUT</Link>
                    </div>
                </div>
        <hr />

        <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
);
}

export default App;