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

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            type: "Vehicle",
            company: "",
            model: ""

        };
    }

    onCompanyUpdate = company => {
        this.setState({company: company})
    }

    onModelUpdate = model => {
        this.setState({model: model})
    }

    onSubmit = () => {
        const {company, type, model} = this.state
        axios.post(
            `/api/create-vehicle`,
            {
                company: company,
                type: type,
                model: model

            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
                this.goTo("/vehicles")
            }
        )
    }

    goTo = (link) => {
        history.push(link)
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select = (event) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            type: event.target.innerText
        });
    }

    render() {
        const {isLoading, type, dropdownOpen} = this.state
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
                    <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle>{type}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.select}>bicycle</DropdownItem>
                            <DropdownItem onClick={this.select}>car</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <FormGroup>
                        <Label>Model</Label>
                        <Input
                            type="text"
                            name="model"
                            id="model"
                            onChange={e => this.onModelUpdate(e.target.value)}
                        />
                    </FormGroup>
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
    