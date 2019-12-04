import React from "react";


class Product extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.product.title}</h3>
        <img src={this.props.product.thumbnail} alt=''/>
        <p>{this.props.product.price}</p>
      </div>
    );
  }
}

export default Product;