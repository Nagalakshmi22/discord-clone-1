import React, {Component} from 'react';
import { render } from 'react-dom';
import RegistPage from './Regist'
import LoginPage from './Login'

export default class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return( <div>
                    <RegistPage/>
                </div>
        );
    }
}

const appDiv = document.getElementById("app")
render(<App name= "rithin" />, appDiv)