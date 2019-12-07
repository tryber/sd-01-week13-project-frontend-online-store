import React, { Component } from 'react';
import './QuantityChanger.css';

class QuantityChanger extends Component {
  render() {
    const { productId } = this.props;
    return (
      <div className="container">
        <button type="button" className="minus-button">
          -
        </button>
        <div>
          {localStorage.getItem(`${productId}_quantity`)}
        </div>
        <button type="button" className="plus-button">
          +
        </button>
      </div>
    );
  }
}

export default QuantityChanger;
