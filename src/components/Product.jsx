import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../icons/back.svg';
import CreateAvaliation from './CreateAvaliation';
import Avaliation from './Avaliation';

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
    const { title, price, thumbnail, attributes, id } = this.props.location.state.data;
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
          <CreateAvaliation id={id} />
          <Avaliation id={id} />
        </div>
      </div>
    );
  }
}

export default Product;
