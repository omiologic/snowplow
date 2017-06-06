import React from 'react';
import Jumbotron from '../ui/Jumbotron';
import About from '../components/About';
import Team from '../components/Team';
import Service from '../components/Service';

export default class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <div>THIS IS HOME CONTAINER</div>
        <Jumbotron/>
        <About/>
        <Team/>
        <Service />
      </div>
    );
  }
}
