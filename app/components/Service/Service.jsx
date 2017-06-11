import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ServiceComponent extends React.Component {
	render() {
		return (
            <section id="service">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className="section-header">
                                <div className="section-subheading">
                                    <i className="fa fa-square"></i>
                                    <span>THE BEST</span>
                                </div>
                                <h3>OUR SERVICES</h3>
                                <div className="section-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <div className="card">
                                <div className="default">
                                    <div className="icon">
                                        <i className="fa fa-snowflake-o "></i>
                                    </div>
                                    <div>
                                        Snowfall Clearing & Hauling
                                    </div>
                                </div>
                                <div className="detail">
                                    <div>
                                        Our fleet of commercial-grade snowplows, pushers and removal equipment guarantees that we can handle any and all snow clearing jobs.
                                    </div>
                                    <div className="card-btn">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="card">
                                <div className="default">
                                    <div className="icon">
                                        <i className="fa fa-snowflake-o "></i>
                                    </div>
                                    <div>
                                        Sidewalk Clearing
                                    </div>
                                </div>
                                <div className="detail">
                                    <div>
                                        With our equipment and well-trained crews, clear and safe sidewalks are guaranteed, even after the worst snowfalls.
                                    </div>
                                    <div className="card-btn">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="card">
                                <div className="default">
                                    <div className="icon">
                                        <i className="fa fa-snowflake-o "></i>
                                    </div>
                                    <div>
                                        De-Icing
                                    </div>
                                </div>
                                <div className="detail">
                                    <div>
                                        Our dedicated site manager is committed to ensuring our customer’s walkways and parking lots remain completely safe after we have finished plowing.
                                    </div>
                                    <div className="card-btn">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="card">
                                <div className="default">
                                    <div className="icon">
                                        <i className="fa fa-snowflake-o "></i>
                                    </div>
                                    <div>
                                        Weather Monitoring
                                    </div>
                                </div>
                                <div className="detail">
                                    <div>
                                        We monitor weather conditions 24 hours a day, to ensure our clients are covered for whole season.
                                    </div>
                                    <div className="card-btn">
                                        Read More
                                    </div>
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
