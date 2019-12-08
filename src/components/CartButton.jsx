import React from 'react';
import { Link } from 'react-router-dom';
import './cartShopping.css';
import CartImage from '../icons/cart.jpg';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
    this.getCurrentQuantity = this.getCurrentQuantity.bind(this);
  }

  componentDidMount() {
    this.getCurrentQuantity();
  }

  getCurrentQuantity() {
    const itemsQuantities = Object.keys(localStorage)
      .filter((key) => key.includes('quantity'))
      .reduce((acc, quantity) => acc + parseInt(localStorage.getItem(quantity), 10), 0);
    this.setState({ quantity: itemsQuantities });
  }


  render() {
    const { quantity } = this.state;
    return (
      <div>
        <Link to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
          {quantity}
        </Link>
      </div>
    );
  }
}

export default CartButton;
