import React, { Component } from 'react';


export default class ShoppingButton extends Component {
  render() {
    return (
      <button type="button" onClick={() => {
        localStorage.setItem('ind', Number(localStorage.getItem('ind')) + 1)
        localStorage.setItem(localStorage.getItem('ind'), JSON.stringify(this.props.result))
      }
      }>Adicionar ao carrinho</button>
    )
  }
}

window.onload = function onload() {
  if (typeof Storage !== 'undefined') {
    const ind = Number(localStorage.getItem('ind'));
    if (!ind) {
      localStorage.setItem('ind', 0);
    }
  } else {
    console.log('No web storage support');
  }
}