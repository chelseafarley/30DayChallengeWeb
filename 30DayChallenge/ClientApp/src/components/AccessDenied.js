import React, { Component } from 'react';

export class AccessDenied extends Component {
    static displayName = AccessDenied.name;

  render () {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>The external login provider has not granted you access.</p>
      </div>
    );
  }
}
