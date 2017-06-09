import React from 'react';
import Navbar from '../../ui/Navbar';

const HeaderMenu = [
    {
        text: 'Home',
        scrollTo: '#home'
    },
    {
        text: 'About',
        scrollTo: '#about'
    },
    {
        text: 'Service',
        scrollTo: '#service'
    },
    {
        text: 'Team',
        scrollTo: '#team'
    },
    {
        text: 'Blog',
        scrollTo: '#blog'
    },
    {
        text: 'Contact',
        scrollTo: '#contact'
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
                                        <a>
                                            <span>{item.text}</span>
                                        </a>
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
