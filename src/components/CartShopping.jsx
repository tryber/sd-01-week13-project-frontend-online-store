import React from "react";
import { Link } from "react-router-dom";
import "./cartShopping.css";

class CartShopping extends React.Component {
  validatingCart() {
    if (this.props.products === 0 || this.props.products === undefined) {
      return (
        <div>
          <img
            className="emptyBoxImage"
            src={require("../icons/emptyBox.png")}
            alt="empty box"
          />
          <p>Seu carrinho está vazio</p>
        </div>
      );
    } else {
      return <p>teste</p>;
    }
  }

  render() {
    return (
      <div>
        <header>  
          <Link to="/">
            <img
              className="backPageImage space"
              src={require("../icons/back.svg")}
              alt="back"
            />
          </Link>
          <div className="cartProductsHeader space">
            <img
              className="cartImage"
              src={require("../icons/cart.jpg")}
              alt="shopping cart"
            />
            <p>
              <strong>Carrinho de Compras</strong>
            </p>
          </div>
        </header>
        <div className="emptyBoxContainer">{this.validatingCart()}</div>
      </div>
    );
  }
}

export default CartShopping;