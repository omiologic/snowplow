import React from 'react';
import classNames from 'classnames';

export default class JumbotronComponent extends React.Component {
	render() {
		const children = React.Children.map(this.props.children, (child) => {
				return React.cloneElement(child))
		};

		let props = Object.assign({}, this.props);

		props.className = classNames('jumbo', this.props.className);

		return React.createElement('div', props, children);
	}
}
