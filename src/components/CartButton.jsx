import React from 'react';
import { Link } from 'react-router-dom';
import './cartShopping.css';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  render() {
    const { cartState } = this.props;
    return (
      <div>
        <Link to={{
          pathname: '/carrinho-de-compras',
          state: { products: cartState },
        }}
        >
          <img
            className="cartImage"
            src={require('../icons/cart.jpg')}
            alt="shopping cart"
          />
        </Link>
      </div>
    );
  }
}

export default CartButton;

CartButton.defaultProps = {
  cartState: [],
};

CartButton.propTypes = {
  cartState: PropTypes.arrayOf(PropTypes.string),
};
