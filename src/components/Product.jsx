import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { results } = this.props;
    if (results.length > 0) {
      return results.map(({ id, title, thumbnail, price }) => (
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
        </div>
      ));
    }
    if (results.length === 0 && this.props.searched) {
      return <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>;
    }

    return <p>Você ainda não realizou uma busca</p>;
  }
}

Product.propTypes = {
  results: PropTypes.object.isRequired,
};


export default Product;
