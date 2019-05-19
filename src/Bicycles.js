import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Container} from 'reactstrap';
import axios from 'axios'


class Bicycles extends Component {
    state = {
        bicycles: []
    }

    componentDidMount() {
        axios.get(`/api/vehicles?types=bicycles`
        ).then(response => {
                this.setState({bicycles: response.data})
            }
        )
    }

    render() {
        return (
            <Container>
                <h1>Bicycles</h1>
                <ListGroup>
                    {this.state.bicycles.map(bicycle =>
                        <ListGroupItem>{bicycle.company}{bicycle.model}</ListGroupItem>)}
                </ListGroup>
            </Container>
        )
    }
}

export default Bicycles;