import React from "react";
import './productPageButton.css';

class ProductPageButton extends React.Component {
  addProduct(event) {
    const { product, updatePrices } = this.props;
    if (localStorage.getItem(`${product.id}_quantity`)) {
      return alert("Produto já adicionado! Selecione a quantidade ao lado.");
    } else {
      localStorage.setItem(`${product.id}_quantity`, 1);
    }
    return updatePrices(event);
  }

  render() {
    return (
      <button className="button-add" onClick={e => this.addProduct(e)}>Adicionar ao carrinho</button>
    );
  }
}

export default ProductPageButton;
