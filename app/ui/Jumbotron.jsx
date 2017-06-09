import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class JumbotronComponent extends React.Component {
	render() {

        const imageStyle = {
			backgroundImage: `url('${this.props.src}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
        };

		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child);
        });

		const props = Object.assign({}, this.props);
		props.className = classNames('jumbotron', this.props.className);
		props.style = Object.assign(imageStyle, props.style);
		delete props.src;

		return React.createElement('div', props, children);
	}
}
JumbotronComponent.propTypes = {
	src: PropTypes.string
};

JumbotronComponent.defaultProps = {
	src: null
};
