import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackImage from '../icons/back.svg';
import ShoppingCarImg from '../icons/ShoppingCarImg.jpg';
import EmptyShoppingCar from '../components/EmptyShoppingCar';

// // import PropTypes from 'prop-types';
// import './cartShopping.css';

// import CartImage from '../icons/cart.jpg';


export default class CartShopping extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.validatingCart = this.validatingCart.bind(this);
  //   }

  //   validatingCart() {
  //     // if (this.props.products === 0 || this.props.products === undefined) {
  //     return (
  //     );
  //     // }
  //     // return <p>Teste</p>;
  //   }

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
          <EmptyShoppingCar />
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