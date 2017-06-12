import React from 'react';
import {
    Row, Col,
    Button,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';
import {Section} from '../components/Section/Section';
import {SectionHeader} from '../components/Section/SectionHeader';

function FieldGroup({ id, label, ...props }) {
	return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
	);
}

export default class ContactContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			subject: '',
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('make request to send email with form data', this.state);
	}
	render() {
		return (
            <Section>
                <SectionHeader primaryText="CONTACT US"
                                secondaryText="WE ARE HAPPY TO GUIDE YOU" />
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                         <form>
                            <FieldGroup
                                id="email"
                                name="email"
                                type="email"
                                key="email"
                                label="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Enter email" />
                            <FieldGroup
                                id="subject"
                                name="subject"
                                key="subject"
                                type="text"
                                value={this.state.subject}
                                onChange={this.handleChange}
                                label="Subject"
                                placeholder="Enter subject" />
                            <FormGroup controlId="textarea">
                                <ControlLabel>How many we help you?</ControlLabel>
                                <FormControl
                                    name="textarea"
                                    key="textarea"
                                    componentClass="textarea"
                                    value={this.state.text}
                                    onChange={this.handleChange}
                                    placeholder="textarea" />
                            </FormGroup>
                            <button type="submit" onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </Col>
                </Row>

            </Section>
		);
	}
}
