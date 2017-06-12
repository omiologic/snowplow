import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Section} from '../components/Section/Section';
import {SectionHeader} from '../components/Section/SectionHeader';


export default class ServicesContainer extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader primaryText="OUR SERVICES"
                               secondaryText="THE BEST" />
                <Row>
                    <Col xs={12}>
                        ServiceContainer
                    </Col>
                </Row>

            </Section>
        );
    }
}
