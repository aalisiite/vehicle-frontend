import React, {Component} from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'
import Row from 'reactstrap/es/Row'

class CreateVehicle extends Component {
    state = {
        company: "",
        bicycleName: "",
        carName: "",
        selectedType: "CAR"
    }
    onCompanyUpdate = company => {
        this.setState({company: company})
    }
    onBicycleNameUpdate = bicycle => {
        this.setState({bicycleName: bicycle})
    }
    onCarNameUpdate = car => {
        this.setState({carName: car})
    }
    changeSelectedType = (event) => {
       this.setState({
           dropdownOpen: !this.state.dropdownOpen,
           value: event.target.innerText
       })
    }

    onSubmit = () => {
        const {company, bicycleName, carName} = this.state
        axios.post(
            `http://localhost:3001/api/create-vehicle`,
            {
                company,
                bicycleName,
                carName
            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
                this.goTo("/vehicle")
            }
        )
    }
    goTo = (link) => {
        history.push(link)
    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const {isLoading} = this.state
        return (
            <Container className={CreateVehicle}>
                <h2>Create Vehicle</h2>
                <Form className="form">
                    <FormGroup>
                        <Label>Company</Label>
                        <Input
                            type="text"
                            name="company"
                            id="company"
                            onChange={e => this.onCompanyUpdate(e.target.value)}
                        />
                    </FormGroup>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Vehicles
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.changeSelectedType}>
                                BICYCLE
                            </DropdownItem>
                            <DropdownItem>
                                <div onClick={this.changeSelectedType}>CAR</div>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    {this.changeSelectedType === "BICYCLE" ? <FormGroup>
                        <Input
                            type="text"
                            name="bicycleModel"
                            id="bicycleModel"
                            onChange={e => this.onBicycleNameUpdate(e.target.value)}
                        />
                    </FormGroup> : false}
                    {this.changeSelectedType() === 'CAR' ? <FormGroup>
                        <Label>Car model</Label>
                        <Input
                            type="text"
                            name="carModel"
                            id="carModel"
                            onChange={e => this.onCarNameUpdate(e.target.value)}
                        />
                    </FormGroup> : false}
                    <Row>
                        <Col>
                            <Button color="primary" onClick={this.onSubmit}>
                                {isLoading ? 'Loading' : 'Create vehicle'}
                            </Button>
                            <span>&nbsp;&nbsp;</span>
                            <a href="/vehicle" style={{color: 'black'}}>
                                Cancel
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }

}

export default CreateVehicle;
    