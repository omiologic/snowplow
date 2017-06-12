import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Section} from '../components/Section/Section';
import {SectionHeader} from '../components/Section/SectionHeader';


export default class AboutContainer extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader primaryText="OUR COMPANY"
                               secondaryText="ABOUT US" />
                <Row>
                    <Col xs={12}>
                        AboutContainer
                    </Col>
                </Row>
            </Section>
        );
    }
}
