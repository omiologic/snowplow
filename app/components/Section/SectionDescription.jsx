/* eslint-disable indent */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class SectionDescription extends React.Component {
    render() {
        const props = Object.assign({}, this.props);
        props.className = classNames('section-description', this.props.className);

        // Don't accept rendering children
        delete props.children;
        delete props.button;
        delete props.description;

        return (
            <Row>
                <Col xs={12}>
                    <div {...props}>
                        <div>
                            { this.props.description }
                        </div>
                        { this.props.button }
                    </div>
                </Col>
            </Row>
        );
    }
}

SectionDescription.propTypes = {
    button: PropTypes.element,
    description: PropTypes.string,
};

SectionDescription.defaultProps = {
    button: <button>Button</button>,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.',
};
