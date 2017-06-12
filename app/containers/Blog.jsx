import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Section} from '../components/Section/Section';
import {SectionHeader} from '../components/Section/SectionHeader';


export default class BlogContainer extends React.Component {
    render() {
        return (
            <Section>
              <SectionHeader primaryText="LASTEST NEWS"
                             secondaryText="HERE'S WHAT WE'VE BEEN UP TO" />
              <Row>
                <Col xs={12}>
                  BlogContainer
                </Col>
              </Row>
            </Section>
        );
    }
}
