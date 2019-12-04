import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  validatingShippingFree(shipping) {
    if(shipping.free_shipping) {
      return "Frete Grátis!"
    }
  }
  render() {
    const { results } = this.props;
    if (results.length > 0) {
      return results.map(({ id, title, thumbnail, price, shipping }) => (
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
          <div>
            <p>{this.validatingShippingFree(shipping)}</p>
          </div>
        </div>
      ));
    }
    if (results.length === 0 && this.props.searched) {
      return <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>;
    }
    return <p>Você ainda não realizou uma busca</p>;
  }
}

export default Product;

Product.propTypes = {
  results: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired,
};
