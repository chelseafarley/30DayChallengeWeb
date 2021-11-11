import React, { Component } from 'react';

export class SupportUs extends Component {
  static displayName = SupportUs.name;

  render() {
    return (
      <div>
        <form action="/checkoutapi" method="POST">
          <button type="submit">Checkout</button>
        </form>
      </div>
    );
  }
}