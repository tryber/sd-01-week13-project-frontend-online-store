import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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
  }

  savingProductDetails(result) {
    const newResult = JSON.stringify(result);
    localStorage.setItem('result', newResult);
    this.setState({ redirect: true, id: result.id });
  }

  showProduct(result) {
    const { id, title, price, thumbnail, shipping } = result;
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
        <button type="button" onClick={() => this.props.onClick(result)}>
          Adicionar ao carrinho
        </button>
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
    if (this.state.redirect) return <Redirect to={`/products/${this.state.id}`} />;
    return <div>{this.showProduct(result)}</div>;
  }
}

export default EachProduct;

EachProduct.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
