import React from 'react';

export default class ShoppingButton extends React.Component {
  render() {
    return (
      <button type="button" onClick={() => this.props.handleClick(this.props.result)}>
        Adicionar ao carrinho
        </button>
    )
  }

}
