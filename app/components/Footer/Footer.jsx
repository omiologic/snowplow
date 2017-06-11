import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class FooterComponent extends React.Component {
	render() {
		return (
            <footer id="footer" className="theme-dark">
				<Grid>
					<Row>
						<Col xs={12} md={5}>
							<div className="card">
								<div className="icon">
									<i className="fa fa-desktop"></i>
								</div>
								<div className="text">
									<div className="heading highlight">About us</div>
									<div className="description">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate tempus lacinia. Nulla.
									</div>
								</div>
							</div>
						</Col>
						<Col xs={12} md={4}>
							<div className="card">
								<div className="icon">
									<i className="fa fa-desktop"></i>
								</div>
								<div className="text">
									<div className="heading highlight">Address</div>
									<div className="description">
										PO Box 386 <br />
										East Brunswick, NJ 08816
									</div>
								</div>
							</div>
						</Col>
						<Col xs={12} md={3}>
							<div className="card">
								<div className="icon">
									<i className="fa fa-desktop"></i>
								</div>
								<div className="text">
									<div className="heading highlight">Contact</div>
									<div className="description">
										P: 732-238-8330 <br />
										F: 732-238-7330 <br />
										E: asd@adsfsd.com
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<hr/>
					<Row>
						<Col xs={8} md={3}>
							<div className="heading highlight">Business Hours</div>
							<div className="subHeading">
								Opening Days:
								<div className="indent-1">Monday - Friday: 9am to 20pm</div>
								<div className="indent-1">Saturday: 9am to 17pm</div>
							</div>
							<div className="subHeading">
								Vacations:
								<div className="indent-1">All Sunday Days</div>
								<div className="indent-1">All Official Holidays</div>
							</div>
						</Col>
						<Col xs={4} md={2}>
							<div className="heading highlight">Navigation</div>
							<ul className="list sitemap">
								<li className="list-item">
									<a>
										<i className="fa fa-chevron-right"></i>
										<span>About</span>
									</a>
								</li>
								<li className="list-item">
									<a>
										<i className="fa fa-chevron-right"></i>
										<span>Services</span>
									</a>
								</li>
								<li className="list-item">
									<a>
										<i className="fa fa-chevron-right"></i>
										<span>Projects</span>
									</a>
								</li>
								<li className="list-item">
									<a>
										<i className="fa fa-chevron-right"></i>
										<span>Blog</span>
									</a>
								</li>
								<li className="list-item">
									<a>
										<i className="fa fa-chevron-right"></i>
										<span>Contact</span>
									</a>
								</li>
							</ul>
						</Col>
						<Col xs={12} md={4}>
							<div className="heading highlight">Lastest Tweets</div>
							<div className="twitter-card">
								<p>
									<span className="twit-by">@Someone</span>
									<span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
									</span>
								</p>
								<span className="twit-time">2 hours ago</span>
							</div>
							<div className="twitter-card">
								<p>
									<span className="twit-by">@Someone</span>
									<span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat eu erat sit amet consectetur. Praesent nec nulla aliquet, porttitor leo non, suscipit urna. Nulla.
									</span>
								</p>
								<span className="twit-time">2 hours ago</span>
							</div>
						</Col>
						<Col xs={12} md={3}>
							<div className="heading highlight">Our News</div>
							<ul className="list blog-list">
								<li className="list-item">
									<img src="" alt="image1" width="60" height="60" />
									<div>
										<div className="subHeading">ICE REMOVAL WITH PROFESSIONALS</div>
										<div className="blog-date">On: <span>Feb 12, 2015</span></div>
									</div>
								</li>
								<li className="list-item">
									<img src="" alt="image2" width="60" height="60" />
									<div>
										<div className="subHeading">NEW MACHINERY</div>
										<div className="blog-date">On: <span>Feb 10, 2015</span></div>
									</div>
								</li>
							</ul>
						</Col>
					</Row>
				</Grid>
            </footer>
		);
	}
}
