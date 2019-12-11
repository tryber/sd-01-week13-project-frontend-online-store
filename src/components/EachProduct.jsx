import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Redirect } from 'react-router-dom';
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
      style: false,
    };
    this.savingProductDetails = this.savingProductDetails.bind(this);

    this.selectStyle = this.selectStyle.bind(this);
    this.style = this.style.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.result;
    if (Object.keys(localStorage).includes(id)) {
      this.setState({ style: true });
    }
  }

  selectStyle() {
    this.setState({ style: true });
  }

  style() {
    const { style } = this.state;
    if (style) {
      const border = { border: '3px solid #C02942' };
      return border;
    }
    const border = { border: '2px solid #53777A' };
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
    const border = this.style(id);
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
        <AddToCartButton
          handleClick={updateCartState}
          result={result}
          selectStyle={this.selectStyle}
        />
        <div>
          <p>{EachProduct.validatingShippingFree(shipping)}</p>
        </div>
        <SeeDetailsButton savingProductDetails={this.savingProductDetails} result={result} />
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

function SeeDetailsButton(props) {
  const { savingProductDetails, result } = props;
  return (
    <div>
      <button
        className="details-button"
        type="button"
        onClick={() => savingProductDetails(result)}
      >
        Ver Detalhes
      </button>
    </div>
  );
}

SeeDetailsButton.propTypes = {
  savingProductDetails: PropTypes.func.isRequired,
  result: PropTypes.shape.isRequired,
};

EachProduct.propTypes = {
  result: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  updateCartState: PropTypes.func.isRequired,
};
