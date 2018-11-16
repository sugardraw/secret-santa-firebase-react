import App from './App';
import TakePresent from './TakePresent';


import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {App} />
                    <Route path = "/take-your-present" component = {TakePresent} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router;