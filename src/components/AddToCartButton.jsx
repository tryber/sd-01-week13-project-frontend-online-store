import React from 'react';
import PropTypes from 'prop-types';
import './addcartbutton.css';

export default class AddToCartButton extends React.Component {
  addProductToLocalStorage(event) {
    const {
      selectStyle, result, result: { id, available_quantity }, handleClick,
    } = this.props;
    selectStyle();
    if (!Object.keys(localStorage).includes(id)) {
      localStorage.setItem(id, JSON.stringify(result));
      localStorage.setItem(`${id}_quantity`, 1);
      handleClick(event);
    } else {
      let productQuantity = parseInt(localStorage.getItem(`${id}_quantity`), 10);
      productQuantity += 1;
      if(productQuantity < available_quantity) {
        localStorage.removeItem(`${id}_quantity`);
        localStorage.setItem(`${id}_quantity`, productQuantity);
        handleClick(event);
      } else {
        alert('Quantidade de produtos excedida!');
      }
    }
  }

  render() {
    return (
      <button
        className="addButton"
        type="button"
        onClick={(e) => this.addProductToLocalStorage(e)}
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectStyle: PropTypes.func.isRequired,
};
