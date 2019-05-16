import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Vehicle from './Vehicle'
import history from './history'
import CreateVehicle from './CreateVehicle'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/vehicle" component={Vehicle}/>
                        <Route path="/create-vehicle" component={CreateVehicle}/>
                    </Switch>
                </div>
            </Router>

        )
    }


}

export default App;
