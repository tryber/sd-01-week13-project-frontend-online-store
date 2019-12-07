import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingProduct from './ShoppingProduct';
import './cartShopping.css';
import BackImage from '../icons/back.svg';
import CartImage from '../icons/cart.jpg';
import EmptyBox from '../icons/emptyBox.png';

class CartShopping extends Component {
  static showProducts() {
    if (Object.keys(localStorage).length > 0) {
      return (
        <div>
          { Object.keys(localStorage).filter((key) => (key.includes('MLB') && !key.includes('quantity')))
            .map((product) => (
              <div key={product}>
                <ShoppingProduct
                  data={JSON.parse(localStorage.getItem(product))}
                />
              </div>
            )) }
        </div>
      );
    }
    return (
      <div>
        <img className="emptyBoxImage" src={EmptyBox} alt="empty box" />
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      cartList: '',
      cartQuantity: 0,
    };
  }

  componentDidMount() {
    Object.keys(localStorage).filter((key) => key.includes('MLB'))
      .map((product) => this.setState((state) => ({ cartList: [...state.cartList, product] })));
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img className="backPageImage space" src={BackImage} alt="back" />
          </Link>
          <div className="cartProductsHeader space">
            <img className="cartImage" src={CartImage} alt="cart" />
            <p>
              <strong>Carrinho de Compras</strong>
            </p>
          </div>
        </header>
        <div className="emptyBoxContainer">{CartShopping.showProducts()}</div>
        <p className="total-value space"> Valor total da compra: </p>
      </div>
    );
  }
}

export default CartShopping;
