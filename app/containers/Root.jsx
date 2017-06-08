import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class RootContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children && React.cloneElement(this.props.children)}
        <Footer />
      </div>
    );
  }
}
