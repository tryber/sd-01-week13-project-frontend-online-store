import React, { Component } from 'react';
import EmptyBox from '../icons/emptyBox.png';

export default class EmptyShoppingCar extends Component {
  render() {
    return (
      <div className="cart-shopping-products">
        <img className="cart-shopping-emptyimg" src={EmptyBox} alt="empty box" />
        <p> <span> Seu carrinho está vazio </span> </p>
      </div>
    );
  }
}
