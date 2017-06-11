import React from 'react';
import Jumbotron from '../ui/Jumbotron';
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
                </div>
            </div>
		);
	}
}
