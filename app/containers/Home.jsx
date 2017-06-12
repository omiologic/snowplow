import React from 'react';
import Jumbotron from '../ui/Jumbotron';
import Company from '../components/Company/Company';
import Team from '../components/Team';
import Service from '../components/Service/Service';

export default class HomeContainer extends React.Component {
	render() {
		return (
            <div>
                <Jumbotron src="./images/landing.jpg" />
                <div>
                    <Service />
                    <Team />
                    <Company />
                </div>
            </div>
		);
	}
}
