import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  static validatingShippingFree(shipping) {
    let freeShipping = '';
    if (shipping.free_shipping) {
      freeShipping = 'Frete Grátis!';
    }
    return freeShipping;
  }

  render() {
    const { results, searched, onClick } = this.props;
    if (results.length > 0) {
      return results.map((result) => {
        const {
          id, title, price, thumbnail, shipping,
        } = result;
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
            <button type="button" onClick={() => onClick(result)}>Adicionar ao carrinho</button>
            <div>
              <p>{Product.validatingShippingFree(shipping)}</p>
            </div>
          </div>
        );
      });
    }
    if (results.length === 0 && searched) {
      return <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>;
    } return <p>Você ainda não realizou uma busca</p>;
  }
}

export default Product;

Product.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  searched: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
