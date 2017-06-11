import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class TeamComponent extends React.Component {
	render() {
		return (
			<section id="team">
				<Grid>
					<Row>
						<Col xs={12}>
							<div className="section-header">
								<div className="section-subheading">
									<i className="fa fa-square"></i>
									<span>THE BEST</span>
								</div>
								<h3>TEAM</h3>
								<div className="section-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<div className="section-description">
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
								</div>
								<div className="quote-btn">
									HIRE US NOW
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
