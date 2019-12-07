import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingProduct from './ShoppingProduct';
import './cartShopping.css';
import BackImage from '../icons/back.svg';
import CartImage from '../icons/cart.jpg';
import EmptyBox from '../icons/emptyBox.png';

class CartShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: '',
    };
    this.showProducts = this.showProducts.bind(this);
    this.refreshProducts = this.refreshProducts.bind(this);
  }

  componentDidMount() {
    this.refreshProducts();
  }

  refreshProducts() {
    this.setState({ cartList: '' }, () => Object.keys(localStorage)
      .filter((key) => (key.includes('MLB') && !key.includes('quantity')))
      .map((product) => this.setState((state) => ({ cartList: [...state.cartList, product] }))));
  }

  showProducts() {
    const { cartList } = this.state;
    if (cartList.length > 0) {
      return (
        <div>
          { cartList.map((product) => (
            <div key={product}>
              <ShoppingProduct
                refreshHandle={this.refreshProducts}
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
        <div className="emptyBoxContainer">{this.showProducts()}</div>
        <p className="total-value space"> Valor total da compra: </p>
      </div>
    );
  }
}

export default CartShopping;
