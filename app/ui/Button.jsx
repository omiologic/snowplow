/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom'

export class Button extends React.Component {
    render() {
        const props = Object.assign({}, this.props);
        props.className = classNames('button', this.props.className);

        // Don't accept rendering children
        delete props.children;
        delete props.text;
        delete props.link;

        return this.props.link
            ?   (
                    <div {...props}>
                        <Link {...this.props.link}>
                            { this.props.text }
                        </Link>
                    </div>
                )
            :   (
                    <div {...props}>
                        { this.props.text }
                    </div>
                );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.shape({
        onClick: PropTypes.func,
        target: PropTypes.string,
        replace: PropTypes.bool,
        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    }),
};

Button.defaultProps = {
    text: 'Click me'
};
