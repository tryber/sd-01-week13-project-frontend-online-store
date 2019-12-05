import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../icons/back.svg';

class Product extends React.Component {
  static showHeader() {
    return (
      <header>
        <Link to="/">
          <img className="backPageImage space" src={Back} alt="back" />
        </Link>
      </header>
    );
  }
  render() {
    const newResult = JSON.parse(localStorage.result);
    const { title, price, thumbnail, attributes } = newResult;
    return (
      <div>
        {Product.showHeader()}
        <div>
          <p>{`Produto ${title} - R$${price}`}</p>
        </div>
        <div>
          <img src={thumbnail} alt="product" />
          <div>
            <p>
              <strong>Especificações Técnicas</strong>
            </p>
            <ul>
              {attributes.map((specification) => (
                <li key={specification.name}>
                  {specification.name} : {specification.value_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
