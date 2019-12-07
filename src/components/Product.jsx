import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../icons/back.svg';
import CreateAvaliation from './CreateAvaliation';
import Avaliation from './Avaliation';
import './product.css';

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
    const { title, price, thumbnail, attributes, id } = newResult;
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
          <CreateAvaliation onChange={(event) => this.updateComments(event)} id={id} />
          <Avaliation id={id} update={this.state.shouldUpdate} />
        </div>
      </div>
    );
  }
}

export default Product;
