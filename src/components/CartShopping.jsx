import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './cartShopping.css';
import BackImage from '../icons/back.svg';
import CartImage from '../icons/cart.jpg';
import EmptyBox from '../icons/emptyBox.png';

class CartShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: 0,
    }
    // this.validatingCart = this.validatingCart.bind(this);
  }

  
  componentWillMount() {
    const leng = Object.keys(localStorage).length
    if (leng > 0) {
      this.setState({
        products: Object.keys(localStorage).filter((key) => key !== 'ind').map((product) => JSON.parse(localStorage.getItem(product))),
        quantity: Object.keys(localStorage).length - 1,
      })
    }
  }



  //   validatingCart() {
  //     // if (this.props.products === 0 || this.props.products === undefined) {
  //     return (
  //     );
  //     // }
  //     // return <p>Teste</p>;
  //   }

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
        {/* <div className="emptyBoxContainer">{this.validatingCart()}</div> */}
        <div>
          <img className="emptyBoxImage" src={EmptyBox} alt="empty box" />
          <p>Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }
}

export default CartShopping;

// CartShopping.propTypes = {
//   results: PropTypes.shape({
//     price: PropTypes.number,
//     title: PropTypes.string,
//     thumbnail: PropTypes.string,
//   }).isRequired,
// };
