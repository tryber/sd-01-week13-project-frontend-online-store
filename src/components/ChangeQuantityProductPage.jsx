import React from 'react';
import PropTypes from 'prop-types';
import './QuantityChanger.css';
import MinusIcon from '../icons/minus_icon.png';
import PlusIcon from '../icons/plus_icon.png';

class ChangeQuantityProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.startQuantity(),
    };
  }

  componentDidMount() {
    this.startQuantity();
  }

  addProduct() {
    this.changeQuantityOfProducts(1);
  }

  removeProduct() {
    this.changeQuantityOfProducts(-1);
  }

  changeQuantityOfProducts(add) {
    const { onClick, product } = this.props;
    const previousQuantity = this.state.quantity;
    const nextQuantity = previousQuantity + add;
    if (nextQuantity > product.available_quantity) {
      alert('Quantidade de produtos em estoque excedida!');
    } else if (nextQuantity < 0) {
      alert('Não é possível adicionar quantidades negativas.');
    } else {
      this.setState({ quantity: nextQuantity });
      onClick(nextQuantity);
    }
  }

  startQuantity() {
    const { product } = this.props;
    const actualQuantity = parseInt(
      localStorage.getItem(`${product.id}_quantity`),
      10,
    );
    if (!actualQuantity) {
      return 0;
    }
    return actualQuantity;
  }

  render() {
    return (
      <div className="container">
        <div>
          <button type="button" onClick={(e) => this.removeProduct(e)}>
            <img
              className="minus-button max-img-size"
              src={MinusIcon}
              alt="Minus icon"
            />
          </button>
        </div>
        <input
          type="text"
          className="quantity-value"
          value={this.state.quantity}
          readOnly
        />
        <div>
          <button type="button" onClick={(e) => this.addProduct(e)}>
            <img
              className="plus-button max-img-size"
              src={PlusIcon}
              alt="Plus icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ChangeQuantityProductPage;

ChangeQuantityProductPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.arrayOf.isRequired,
};
