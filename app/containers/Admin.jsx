import React from 'react';

export class AdminContainer extends React.Component {
  render() {
    return (
        <div>
            THIS IS ADMIN CONTAINER
            {
                this.props.children && React.cloneElement(this.props.children)
            }
        </div>
    );
  }
}
