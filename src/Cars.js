import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Container} from 'reactstrap';
import axios from 'axios'


class Cars extends Component {
    state = {
        cars: []
    }

    componentDidMount() {
        axios.get(`/api/vehicles?types=cars`
        ).then(response => {
                this.setState({cars: response.data})
            }
        )
    }

    render() {
        return (
            <Container>
                <h1>Cars</h1>
                <ListGroup>
                    {this.state.cars.map(car =>
                        <ListGroupItem>{car.company} {car.model}</ListGroupItem>)}
                </ListGroup>
            </Container>
        )
    }
}

export default Cars;