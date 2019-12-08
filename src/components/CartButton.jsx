import React from "react";
import { Link } from "react-router-dom";
import "./cartButton.css";
import CartImage from "../icons/cart.jpg";

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrentQuantity = this.getCurrentQuantity.bind(this);
  }

  componentDidMount() {
    this.getCurrentQuantity();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props.onChange) {
      return this.getCurrentQuantity();
    }
  }

  getCurrentQuantity() {
    const itemsQuantities = Object.keys(localStorage)
      .filter(key => key.includes("quantity"))
      .reduce(
        (acc, quantity) => acc + parseInt(localStorage.getItem(quantity), 10),
        0
      );
    return itemsQuantities;
  }

  render() {
    return (
      <div>
        <Link className="button-container" to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
          <div className="number-of-products">{this.getCurrentQuantity()}</div>
        </Link>
      </div>
    );
  }
}

export default CartButton;
