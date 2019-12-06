import React from 'react';

export default class ShoppingButton extends React.Component {
  render() {
    return (
      <button type="button" onClick={() => {
        this.props.selectStyle('5px solid red')
        if (!Object.keys(localStorage).includes(this.props.result.id)){
          localStorage.setItem(this.props.result.id, JSON.stringify(this.props.result))
          this.props.handleClick(JSON.parse(localStorage.getItem(this.props.result.id)))
        }
      }}>
        Adicionar ao carrinho
        </button>
    )
  }
}
