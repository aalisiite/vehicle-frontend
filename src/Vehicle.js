import React, {Component} from 'react';
import {Button, Container} from 'reactstrap';
import './App.css';
import {Link} from 'react-router-dom'

class Vehicle extends Component {
    render() {
        return (
            <Container className="App">
                <div>
                    <Button color="light" tag={Link} to="/create-vehicle"> Create vehicle</Button>
                </div>
                <div>
                    <Button color="light" tag={Link} to="/bicycles"> All bicycles</Button>
                </div>
                <div>
                    <Button color="light" tag={Link} to="/cars"> All cars</Button>
                </div>
            </Container>
        )
    }
}

export default Vehicle;