import React from 'react';
import { Link } from 'react-router';

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
		linkTo: '/services'
	},
	{
		text: 'Blog',
		linkTo: '/blog'
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
                <div className="navbar navbar-expand-lg">
                    <div className="nav-brand">
                        <img src="./images/logo.png" alt="snow360" />
                    </div>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						{/* <span className="navbar-toggler-icon"></span> */}
						<i className="fa fa-bars"></i>
					</button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<div className="navbar-nav nav-right">
							<div className="menu inline-menu w-100">
								{
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
                </div>
            </header>
		);
	}
}
