import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { results, searched, onClick } = this.props;
    if (results.length > 0) {
      return results.map((result) => (
        <div className="card" key={result.id}>
          <div className="card-title">
            <span>{result.title}</span>
          </div>
          <div className="card-thumbnail">
            <img src={result.thumbnail} alt={result.title} />
          </div>
          <div className="card-product-price">
            <p>{`R$${parseFloat(result.price).toFixed(2)}`}</p>
          </div>
          <button type="button" onClick={() => onClick(result)}>Adicionar ao carrinho</button>
        </div>
      ));
    }
    if (results.length === 0 && searched) {
      return <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>;
    }
    return <p>Você ainda não realizou uma busca</p>;
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
