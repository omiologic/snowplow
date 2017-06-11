/* eslint-disable indent */
/* eslint arrow-parens: [2, "as-needed", { "requireForBlockBody": true }] */
import React from 'react';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Section extends React.Component {
	render() {
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child);
        });

		const props = Object.assign({}, this.props);
		props.className = classNames(this.props.className);

		const containerProps = {
		    fluid: this.props.fluid
        };

		delete props.fluid;
        console.log(props, containerProps);
		return (
            <section {...props}>
                <Grid {...containerProps}>
                    { children }
                </Grid>
            </section>
		);
	}
}

Section.propTypes = {
	fluid: PropTypes.bool
};

Section.defaultProps = {
	fluid: false
};
