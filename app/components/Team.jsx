import React from 'react';
import Card from '../ui/card';

const style = {
	background: '#333',
	width: '300px',
	height: '500px'
};

export default class TeamComponent extends React.Component {
	render() {
		return (
			<div>
				<div>THIS IS TEAM COMPONENT</div>;
				<Card style={style}>
					<div className="memberImage" />
					<h4>Luke</h4>
					<p>Im a Jedi!</p>
				</Card>
			</div>
		);
	}
}
