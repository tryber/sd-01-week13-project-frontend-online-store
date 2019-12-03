import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    const product = localStorage.getItem(product);
    return (
      <div>
        <header>
          <Link to="/">
            <img
              className="backPageImage space"
              src={require("../icons/back.svg")}
              alt="back"
            />
          </Link>
        </header>
        <div>
          <p>{`Produto ${product.title} - R$${product.price}`}</p>
        </div>
        <div>
          <div>{product.thumbnail}</div>
          <div>
            <p><strong>Especificações Técnicas</strong></p>
            <ul>
              {product.attributes.map(specification => (
                <li>
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
