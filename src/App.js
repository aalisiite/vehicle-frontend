import './App.css';
import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Vehicle from './Vehicle'
import history from './history'
import CreateVehicle from './CreateVehicle'
import Bicycles from './Bicycles'
import Cars from './Cars'


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/vehicles" component={Vehicle}/>
                        <Route path="/create-vehicle" component={CreateVehicle}/>
                        <Route path="/bicycles" component={Bicycles}/>
                        <Route path="/cars" component={Cars}/>
                    </Switch>
                </div>
            </Router>

        )
    }

}

export default App;
