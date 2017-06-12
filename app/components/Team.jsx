import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Section } from './Section/Section';
import { SectionHeader } from './Section/SectionHeader';
import { SectionDescription } from './Section/SectionDescription';


export default class TeamComponent extends React.Component {
	render() {
		return (
			<Section id="team">
				<SectionHeader primaryText="TEAM MEMBERS"
							   secondaryText="THE PROFESSIONALS"
							   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla." />
				<ServiceCards />
				<Row>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card">
							1
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card">
							2
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card">
							3
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card">
							4
						</div>
					</Col>
				</Row>
				<SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla."
									button={ <Button className="quote-btn" text="JOIN OUR TEAM" /> } />
			</Section>
		);
	}
}
