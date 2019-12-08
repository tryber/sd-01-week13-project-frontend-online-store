import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuantityChanger.css';
import MinusIcon from '../icons/minus_icon.png';
import PlusIcon from '../icons/plus_icon.png';

class QuantityChanger extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.refreshPrice = this.refreshPrice.bind(this);
  }

  refreshPrice() {
    const { productId } = this.props;
    const actualQuantity = parseInt(
      localStorage.getItem(`${productId}_quantity`),
      10,
    );
    if (!actualQuantity) {
      return 0;
    }
    return actualQuantity;
  }

  removeProduct(event) {
    const { productId, updatePrices } = this.props;
    const actualQuantity = parseInt(
      localStorage.getItem(`${productId}_quantity`),
      10,
    );
    const newQuantity = actualQuantity - 1;
    if (!localStorage.getItem(`${productId}_quantity`)) {
      console.log('Não há items para serem removidos.');
    } else if (newQuantity <= 0) {
      console.log(
        'Para remover o produto, basta clicar no "X" localizado no carrinho de compras.',
      );
    } else {
      localStorage.removeItem(`${productId}_quantity`);
      localStorage.setItem(`${productId}_quantity`, newQuantity);
    }
    return updatePrices(event);
  }

  addProduct(event) {
    const { productId, product, updatePrices } = this.props;
    const actualQuantity = parseInt(
      localStorage.getItem(`${productId}_quantity`),
      10,
    );
    if (localStorage.getItem(`${productId}_quantity`)) {
      const newQuantity = actualQuantity + 1;
      if (newQuantity >= product.available_quantity) {
        console.log('Quantidade máxima do produto em estoque atingida.');
      }
      localStorage.removeItem(`${productId}_quantity`);
      localStorage.setItem(`${productId}_quantity`, newQuantity);
    } else {
      console.log('Primeiro você precisa adicionar o produto no botão ao lado!');
    }
    return updatePrices(event);
  }

  render() {
    return (
      <div className="container">
        <div>
          <button type="button" onClick={(e) => this.removeProduct(e)}>
            <img
              className="minus-button max-img-size"
              src={MinusIcon}
              alt="Minus icon"
            />
          </button>
        </div>
        <input
          type="text"
          className="quantity-value"
          value={this.refreshPrice()}
          readOnly
        />
        <div>
          <button type="button" onClick={(e) => this.addProduct(e)}>
            <img
              className="plus-button max-img-size"
              src={PlusIcon}
              alt="Plus icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityChanger;

QuantityChanger.propTypes = {
  productId: PropTypes.string.isRequired,
  updatePrices: PropTypes.func.isRequired,
  product: PropTypes.shape({
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
};
