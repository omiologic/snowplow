/* eslint-disable indent */
/* eslint arrow-parens: [2, "as-needed", { "requireForBlockBody": true }] */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class SectionHeader extends React.Component {
    render() {
        const props = Object.assign({}, this.props);
        props.className = classNames('section-header', this.props.className);

        // Don't accept rendering children
        delete props.children;
        delete props.primaryText;
        delete props.secondaryText;
        delete props.description;

        return (
            <Row>
                <Col xs={12}>
                    <div {...props}>
                        <div className="section-subheading">
                            <i className="fa fa-square"></i>
                            <span>{this.props.secondaryText}</span>
                        </div>
                        <h3>{this.props.primaryText}</h3>
                        <div className="section-description">
                            {this.props.description}
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

SectionHeader.propTypes = {
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    description: PropTypes.string,
};

SectionHeader.defaultProps = {
    primaryText: 'HEADING',
    secondaryText: 'SUB HEADING',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.',
};
