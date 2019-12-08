import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './EachProduct.css';
import AddToCartButton from './AddToCartButton';


class EachProduct extends React.Component {
  static validatingShippingFree(shipping) {
    let freeShipping = '';
    if (shipping.free_shipping) {
      freeShipping = 'Frete Grátis!';
    }
    return freeShipping;
  }

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: '',
    };
    this.savingProductDetails = this.savingProductDetails.bind(this);

    this.selectStyle = this.selectStyle.bind(this);
    this.style = this.style.bind(this);
  }

  selectStyle() {
    this.setState((state) => ({ style: !state.style }));
  }

  style() {
    const { style } = this.state;
    if (style) {
      const border = { border: '2px solid red' };
      return border;
    }
    const border = { border: '1px solid black' };
    return border;
  }

  savingProductDetails(result) {
    const newResult = JSON.stringify(result);
    localStorage.setItem('result', newResult);
    this.setState({ redirect: true, id: result.id });
  }

  showProduct(result) {
    const {
      id, title, price, thumbnail, shipping,
    } = result;
    const { updateCartState } = this.props;
    return (
      <div className="card" key={id}>
        <div className="card-title">
          <span>{title}</span>
        </div>
        <div className="card-thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="card-product-price">
          <p>{`R$${parseFloat(price).toFixed(2)}`}</p>
        </div>
        <div className="addToCart-button">
          <AddToCartButton
            handleClick={updateCartState}
            result={result}
            selectStyle={this.selectStyle}
          />
        </div>
        <div>
          <p>{EachProduct.validatingShippingFree(shipping)}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => this.savingProductDetails(result)}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { result } = this.props;

    const { redirect, id } = this.state;
    if (redirect) return <Redirect to={`/products/${id}`} />;
    return <div>{this.showProduct(result)}</div>;
  }
}

export default EachProduct;

EachProduct.propTypes = {

  result: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  updateCartState: PropTypes.func.isRequired,
};
