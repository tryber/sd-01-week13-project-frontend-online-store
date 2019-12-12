import React, { Component } from 'react';

export default class Quantity extends Component {
  static getCurrentQuantity() {
    const itemsQuantities = Object.keys(localStorage)
      .filter((key) => key.includes('quantity'))
      .reduce(
        (acc, quantity) => acc + parseInt(localStorage.getItem(quantity), 10),
        0,
      );
    return itemsQuantities;
  }

  render() {
    return (
      <p><span>{Quantity.getCurrentQuantity()}</span></p>
    );
  }
}
