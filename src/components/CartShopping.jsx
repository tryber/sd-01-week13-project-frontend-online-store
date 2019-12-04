import React from 'react';
import { Link } from 'react-router-dom';
import './cartShopping.css';

class CartShopping extends React.Component {
  validatingCart() {
    const { location: { state: { products } } } = this.props;
    if (products === 0 || products === undefined) {
      return (
        <div>
          <img className="emptyBoxImage" src={require("../icons/emptyBox.png")} alt="empty box" />
          <p>Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        {products.map((product) => (
          <div>{product}</div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img className="backPageImage space" src={require('../icons/back.svg')} alt="back" />
          </Link>
          <div className="cartProductsHeader space">
            <img className="cartImage" src={require('../icons/cart.jpg')} alt="shopping cart" />
            <p><strong>Carrinho de Compras</strong></p>
          </div>
        </header>
        <div className="emptyBoxContainer">
          {this.validatingCart()}
        </div>
      </div>
    );
  }
}

export default CartShopping;
