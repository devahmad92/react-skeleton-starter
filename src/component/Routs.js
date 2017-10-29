import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./Home";

class Routs extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routs;