import React from "react";
import { Link } from "react-router-dom";
import './cartShopping.css';


class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/carrinho-de-compras">
          <img
            className="cartImage"
            src={require("../icons/cart.jpg")}
            alt="shopping cart"
          />
        </Link>
      </div>
    );
  }
}

export default CartButton;