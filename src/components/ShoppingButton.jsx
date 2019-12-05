import React, { Component } from 'react';
import CartShopping from './CartShopping';


export default class ShoppingButton extends Component {
  render() {
    return (
      <button type="button" onClick={() => localStorage.setItem(this.props.result.id, JSON.stringify(this.props.result))}>Adicionar ao carrinho</button>
    )
  }
}