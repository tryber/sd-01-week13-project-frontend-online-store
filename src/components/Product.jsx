import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../icons/back.svg';
import CreateAvaliation from './CreateAvaliation';
import Avaliation from './Avaliation';
import './product.css';
import CartButton from './CartButton';
import ProductPageButton from './ProductPageButton';

class Product extends React.Component {
  static showHeader() {
    return (
      <header>
        <Link to="/">
          <img className="backPageImage space" src={Back} alt="back" />
        </Link>
        <CartButton onChange={(event) => this.updateComments(event)} />
      </header>
    );
  }

  static formatePrice(price) {
    return price.toString().replace('.', ',');
  }

  static showProductDetails(newResult) {
    const { title, price, thumbnail, attributes } = newResult;
    return (
      <div>
        {Product.showHeader()}
        <div className="product-container">
          <div className="product-name-price">
            <p>{`Produto ${title} - R$${Product.formatePrice(price)}`}</p>
            <img className="product-image" src={thumbnail} alt="product" />
          </div>
          <div className="specifications">
            <p>
              <strong>Especificações Técnicas</strong>
            </p>
            <ul>
              {attributes.map((specification) => (
                <li key={specification.name}>
                  {`${specification.name}: ${specification.value_name}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      shouldUpdate: '',
    };
  }

  updateComments(event) {
    this.setState({ shouldUpdate: event.target.value });
  }

  render() {
    const newResult = JSON.parse(localStorage.result);
    const { id } = newResult;
    return (
      <div>
        {Product.showProductDetails(newResult)}
        <div className="buttons-add-product">
          <ProductPageButton
            product={newResult}
            updatePrices={(event) => this.updateComments(event)}
          />
        </div>
        <CreateAvaliation
          onChange={(event) => this.updateComments(event)}
          id={id}
        />
        <Avaliation id={id} update={this.state.shouldUpdate} />
      </div>
    );
  }
}

export default Product;
