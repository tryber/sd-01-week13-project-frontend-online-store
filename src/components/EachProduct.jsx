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
    };
    this.savingProductDetails = this.savingProductDetails.bind(this);
  }

  savingProductDetails(result) {
    const newResult = JSON.stringify(result);
    localStorage.setItem('result', newResult);
    this.setState({ redirect: true });
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
    const { results, searched } = this.props;
    if (results.length > 0) {
      return results.map((result) => {
        const { id } = result;
        if (this.state.redirect) return <Redirect to={`/products/${id}`} />;
        return this.showProduct(result);
      });
    }
    if (results.length === 0 && searched) {
      return <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>;
    }
    return <p>Você ainda não realizou uma busca</p>;
  }
}

export default EachProduct;

EachProduct.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  searched: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
