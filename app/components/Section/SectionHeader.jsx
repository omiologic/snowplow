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

        const { primaryText, secondaryText, description } = this.props
        return (
            <Row>
                <Col xs={12}>
                    <div {...props}>
                        <div className="section-subheading">
                            <i className="fa fa-square"></i>
                            <span>{secondaryText}</span>
                        </div>
                        <h3>{primaryText}</h3>
                        {
                            description
                                ? <div className="section-description">{description}</div>
                                : null
                        }
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
    description: null,
};
