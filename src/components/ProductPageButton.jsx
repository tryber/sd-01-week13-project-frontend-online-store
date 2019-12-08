import React from 'react';
import PropTypes from 'prop-types';
import './productPageButton.css';

class ProductPageButton extends React.Component {
  addProduct(event) {
    const { product, updatePrices } = this.props;
    if (localStorage.getItem(`${product.id}_quantity`)) {
      alert('Produto já adicionado! Selecione a quantidade ao lado.');
    }
    localStorage.setItem(`${product.id}_quantity`, 1);
    return updatePrices(event);
  }

  render() {
    return (
      <button className="button-add" onClick={(e) => this.addProduct(e)}>
        Adicionar ao carrinho
      </button>
    );
  }
}

export default ProductPageButton;

ProductPageButton.propTypes = {
  product: PropTypes.arrayOf.isRequired,
  updatePrices: PropTypes.func.isRequired,
};
