import React from 'react';

export class RootContainer extends React.Component {
  render() {
    return (
    <div>
      <div>THIS IS ROOT CONTAINER</div>
      <div>Header component placeholder</div>
      {
        this.props.children && React.cloneElement(this.props.children)
      }
      <div>Footer component placeholder</div>
    </div>
    );
  }
}
