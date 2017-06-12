import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Section} from '../Section/Section';
import {SectionHeader} from '../Section/SectionHeader';
import {SectionDescription} from "../Section/SectionDescription";
import {Button} from "../../ui/Button";

const services = [
    {
        icon: 'snowplow',
        heading: 'Snowfall Clearing & Hauling',
        detail: 'Our fleet of commercial-grade snowplows, pushers and removal equipment guarantees that we can handle any and all snow clearing jobs.',
        link: '/services'
    },
    {
        icon: 'snow-boot',
        heading: 'Sidewalk Clearing',
        detail: 'With our equipment and well-trained crews, clear and safe sidewalks are guaranteed, even after the worst snowfalls.',
        link: '/services'
    },
    {
        icon: 'snowflake',
        heading: 'De-Icing',
        detail: 'Our dedicated site manager is committed to ensuring our customer’s walkways and parking lots remain completely safe after we have finished plowing.',
        link: '/services'
    },
    {
        icon: 'snow',
        heading: 'Weather Monitoring',
        detail: 'We monitor weather conditions 24 hours a day, to ensure our clients are covered for whole season.',
        link: '/services'
    }
];

const ServiceCards = () => (
    <Row>
        {
            services.length && services.map((service) => {
                return (
                    <Col xs={12} md={6} lg={3}>
                        <div className="card">
                            <div className="default">
                                <div className="icon">
                                    <i className={`svg ${service.icon} icon-lg`}></i>
                                </div>
                                <div>
                                    {service.heading}
                                </div>
                            </div>
                            <div className="detail">
                                <div>
                                    {service.detail}
                                </div>
                                <Button className="card-btn" text="Read More" />
                            </div>
                        </div>
                    </Col>
                )
            })
        }

    </Row>
);


export default class ServiceComponent extends React.Component {
	render() {
		return (
            <Section id="service">
                <SectionHeader primaryText="OUR SERVICE"
                secondaryText="THE BEST"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla." />
                <ServiceCards />
                <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla."
                                    button={ <Button className="quote-btn" text="HIRE US NOW" /> } />
            </Section>
		);
	}
}
