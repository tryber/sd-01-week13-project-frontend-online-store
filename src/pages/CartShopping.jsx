import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackImage from '../icons/back.svg';
import ShoppingCarImg from '../icons/ShoppingCarImg.jpg';
import EmptyShoppingCar from '../components/EmptyShoppingCar';
import ShoppingProduct from '../components/ShoppingProduct';

// // import PropTypes from 'prop-types';
// import './cartShopping.css';

// import CartImage from '../icons/cart.jpg';


export default class CartShopping extends Component {
  constructor(props) {
    super(props);
    this.showProducts = this.showProducts.bind(this);
  }

  showProducts() {
    if (Object.keys(localStorage).length > 0) {
      return (
        <div>
          {Object.keys(localStorage)
            .map((key) => <ShoppingProduct data={JSON.parse(localStorage.getItem(key))} />)}
          <p> Valor total da compra: </p>
        </div>
      );
    }
    return  <EmptyShoppingCar />
  }

  render() {
    return (
      <div className="cart-shopping-page">
        <header className="cart-shopping-header">
          <Link to="/">
            <img className="cart-shopping-backimg" src={BackImage} alt="Back to the Online Store" />
          </Link>
          <div className="cart-shopping-box-1">
            <img className="cart-shopping-img" src={ShoppingCarImg} alt="Shopping Car Icon" />
            <p> <span> Carrinho de Compras </span> </p>
          </div>
          {this.showProducts()}
        </header>

      </div>
    );
  }
}



{/* 
// CartShopping.propTypes = {
//   results: PropTypes.shape({
//     price: PropTypes.number,
//     title: PropTypes.string,
//     thumbnail: PropTypes.string,
//   }).isRequired,
// }; */}