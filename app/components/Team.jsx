import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Section } from './Section/Section';
import { SectionHeader } from './Section/SectionHeader';
import { SectionDescription } from './Section/SectionDescription';
import { Button } from '../ui/Button';

export default class TeamComponent extends React.Component {
	render() {
		return (
			<Section id="team" className="pt-3 pb-3">
				<SectionHeader primaryText="TEAM MEMBERS"
							   secondaryText="THE PROFESSIONALS"
							   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla." />
				<Row>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card mb-3">
							<div className="card-body">
								<div className="p-4 d-flex justify-content-center">
									<div className="bg-dark rounded-circle" style={{'width': 150+'px', 'height': 150+'px'}}></div>
								</div>
								<div className="text-dark">
									Team Member 1
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
								</p>
							</div>
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card mb-3">
							<div className="card-body">
								<div className="p-4 d-flex justify-content-center">
									<div className="bg-dark rounded-circle" style={{'width': 150+'px', 'height': 150+'px'}}></div>
								</div>
								<div className="text-dark">
									Team Member 1
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
								</p>
							</div>
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card mb-3">
							<div className="card-body">
								<div className="p-4 d-flex justify-content-center">
									<div className="bg-dark rounded-circle" style={{'width': 150+'px', 'height': 150+'px'}}></div>
								</div>
								<div className="text-dark">
									Team Member 1
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
								</p>
							</div>
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="card team-card">
							<div className="card-body">
								<div className="p-4 d-flex justify-content-center">
									<div className="bg-dark rounded-circle" style={{'width': 150+'px', 'height': 150+'px'}}></div>
								</div>
								<div className="text-dark">
									Team Member 1
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<SectionDescription className="p-3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla."
									button={ <Button className="quote-btn" text="JOIN OUR TEAM" /> } />
			</Section>
		);
	}
}
