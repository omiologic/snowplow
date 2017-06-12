import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = [
	{
		text: 'Home',
		linkTo: '/home'
	},
	{
		text: 'About',
		linkTo: '/about'
	},
	{
		text: 'Service',
		linkTo: '/service'
	},
	{
		text: 'Blog',
		linkTo: '#blog'
	},
	{
		text: 'Contact',
		linkTo: '/contact'
	}
];

export default class HeaderComponent extends React.Component {
	render() {
		return (
            <header id="header">
                <div className="navbar">
                    <div className="nav-brand">
                        <img src="./images/logo.png" alt="snow360" />
                    </div>

                    <div className="nav-right">
                        <div className="menu inline-menu">{
                                HeaderMenu.length && HeaderMenu.map(item => (
                                    <div className="menu-item">
                                        <Link to={item.linkTo}>
                                            <span>{item.text}</span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </header>
		);
	}
}
