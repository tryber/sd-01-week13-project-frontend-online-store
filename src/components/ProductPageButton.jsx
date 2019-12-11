import React from 'react';
import PropTypes from 'prop-types';
import ChangeQuantityProductPage from './ChangeQuantityProductPage';
import './productPageButton.css';

class ProductPageButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQuantity: 0,
    };
  }

  addProduct(event) {
    const { product, updatePrices } = this.props;
    localStorage.setItem(`${product.id}_quantity`, this.state.productQuantity);
    localStorage.setItem(product.id, JSON.stringify(product));
    return updatePrices(event);
  }

  changeQuantity(newQuantity) {
    this.setState({ productQuantity: newQuantity});
  }

  render() {
    return (
      <div className="button-container">
        <button className="button-add" onClick={(e) => this.addProduct(e)}>
          Adicionar ao carrinho
        </button>
        <ChangeQuantityProductPage product={this.props.product} onClick={(e) => this.changeQuantity(e)}/>
      </div>
    );
  }
}

export default ProductPageButton;

ProductPageButton.propTypes = {
  product: PropTypes.arrayOf.isRequired,
  updatePrices: PropTypes.func.isRequired,
};
