import React from 'react';
import classNames from 'classnames';

export default class CardComponent extends React.Component {
	render() {
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child);
		});

		let props = Object.assign({}, this.props);
		props.className = classNames('card', this.props.className);

		return React.createElement('div', props, children);
	}
}
