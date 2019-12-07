import React, { Component } from 'react';
import './QuantityChanger.css';
import MinusIcon from '../icons/minus_icon.png';
import PlusIcon from '../icons/plus_icon.png';

class QuantityChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: 0,
    };
    this.addOrRemoveProduct = this.addOrRemoveProduct.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const actualQuantity = parseInt(localStorage.getItem(`${productId}_quantity`), 10);
    return this.setState({ productQuantity: actualQuantity });
  }

  addOrRemoveProduct(operator) {
    const { productId, product } = this.props;
    const actualQuantity = parseInt(localStorage.getItem(`${productId}_quantity`), 10);
    if (operator === 'minus') {
      const newQuantity = actualQuantity - 1;
      if (newQuantity <= 0) {
        return console.log('Para remover o produto, clique no "X"');
      }
      return this.setState({ productQuantity: newQuantity }, () => localStorage.setItem(`${productId}_quantity`, newQuantity));
    }
    if (operator === 'plus') {
      const newQuantity = actualQuantity + 1;
      if (newQuantity >= product.available_quantity) {
        return console.log('Quantidade máxima do produto em estoque atingida.');
      }
      return this.setState({ productQuantity: newQuantity }, () => localStorage.setItem(`${productId}_quantity`, newQuantity));
    }
    return undefined;
  }

  render() {
    const { productQuantity } = this.state;
    return (
      <div className="container">
        <div>
          <button type="button" onClick={() => this.addOrRemoveProduct('minus')}>
            <img className="minus-button max-img-size" src={MinusIcon} alt="Minus icon" />
          </button>
        </div>
        <input type="text" className="quantity-value" value={productQuantity} readOnly />
        <div>
          <button type="button" onClick={() => this.addOrRemoveProduct('plus')}>
            <img className="plus-button max-img-size" src={PlusIcon} alt="Plus icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityChanger;
