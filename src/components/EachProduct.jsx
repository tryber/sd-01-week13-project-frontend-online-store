import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ShoppingButton from './ShoppingButton';

export default class EachProduct extends Component {
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
      style: false,
    };
    this.savingProductDetails = this.savingProductDetails.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
  }

  savingProductDetails(result) {
    this.setState({ redirect: true, id: result.id });
  }

  selectStyle() {
    this.setState((state) => ({ style: !state.style }));
  }


  style() {
    if (this.state.style) {
      const border = { border: '2px solid red' };
      return border;
    }
    const border = { border: '1px solid black' };
    return border;
  }

  showProduct(result) {
    const { id, title, price, thumbnail, shipping } = result;
    const border = this.style();
    return (
      <div className="card" key={id} style={border}>
        <div className="card-title">
          <span>{title}</span>
        </div>
        <div className="card-thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="card-product-price">
          <p>{`R$${parseFloat(price).toFixed(2)}`}</p>
        </div>
        <ShoppingButton
          handleClick={this.props.updateCartState} result={result} selectStyle={this.selectStyle}
        />
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
    const { data } = this.props;
    if (this.state.redirect) return <Redirect to={{ pathname: `/products/${this.state.id}`, state: { data } }} />;
    return <div>{this.showProduct(data)}</div>;
  }
}


EachProduct.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  updateCartState: PropTypes.func.isRequired,
};
