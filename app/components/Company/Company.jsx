/* eslint-disable indent */
import React from 'react';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import {Section} from '../Section/Section';
import {SectionHeader} from '../Section/SectionHeader';
import { company, features } from './Company.data';


export default class CompanyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  openedIndex: 0
		};
		this.onClickAccordianBtn = this.onClickAccordianBtn.bind(this);
	}

	onClickAccordianBtn(e, index) {
	    e.preventDefault();
	    this.setState({openedIndex: index});
	}

	render() {
		return (
            <Section id="company">
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <Grid fluid={true} className="about">
                            <SectionHeader primaryText="THE COMPANY"
                                           secondaryText="ABOUT" />
                            <Row className="d-block p-2">
                                {
                                    company.length && company.map((statement, index) => (
                                        <div>
                                            <div className={classNames('accordion', {active: this.state.openedIndex === index})}
                                                    key={index} data={index} onClick={ (e) => this.onClickAccordianBtn(e, index) }>
                                                {statement.title}
                                                <div className="icon">
                                                    <i className={classNames('fa', {
                                                        'fa-plus': this.state.openedIndex === index,
                                                        'fa-minus': this.state.openedIndex !== index,
                                                    })}></i>
                                                </div>
                                            </div>
                                            <div className={classNames('panel', {show: this.state.openedIndex === index})}>
                                                <p>{statement.text}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Grid fluid={true} className="features">
                            <SectionHeader primaryText="OUR FEATURES"
                                           secondaryText="WE ARE GOOD" />
                            <Row>
                                {
                                    features.length && features.map((feature) => (
                                        <Col sm={12} md={6} lg={6} className="p-2">
                                            <div className="card feature-card">
                                                <div className="icon">
                                                    <i className={`svg ${feature.icon} icon-lg`}></i>
                                                </div>
                                                <div className="heading">{feature.title}</div>
                                                <div className="detail">{feature.text}</div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Section>
		);
	}
}
