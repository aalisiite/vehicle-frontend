import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Vehicle from './Vehicle'
import history from './history'
import CreateVehicle from './CreateVehicle'
import Bicycles from './Bicycles'


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/vehicle" component={Vehicle}/>
                        <Route path="/create-vehicle" component={CreateVehicle}/>
                        <Route path="/bicycles" component={Bicycles}/>
                    </Switch>
                </div>
            </Router>

        )
    }


}

export default App;
