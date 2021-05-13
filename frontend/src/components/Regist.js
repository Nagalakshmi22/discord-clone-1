import React, {Component} from 'react';
import LoginPage from './Login'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export default class RegistPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<Router>
            <Switch>
                <Route exact path="/"><h1>
                    hello
                </h1>
                </Route>
                <Route path="/login" component={LoginPage}>
                </Route>

            </Switch>
        </Router>
        );
    }
}