import React from 'react';

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <div>
        Navbar!!!
        {
          this.props.children && React.cloneElement(this.props.children)
        }
      </div>
    );
  }
}
