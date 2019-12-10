import React from 'react';
import PropTypes from 'prop-types';
import './finishingShopping.css';

class FormForFinishingShopping extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      return this.formPurchase();
    }
    return '';
  }

  createInput(id, placeholder) {
    const { changeHandler, state } = this.props;
    return (
      <input
        type="text"
        className={state[`${id}Validation`] ? 'valid' : 'invalid'}
        onChange={(e) => changeHandler(e)}
        id={id}
        required
        placeholder={placeholder}
      />
    );
  }

  formPurchase() {
    return (
      <form name="formPurchase">
        {this.createInput('name', 'Nome Completo')}
        {this.createInput('cpf', 'CPF')}
        {this.createInput('email', 'Email')}
        {this.createInput('cellphone', 'Telefone')}
        {this.createInput('cep', 'CEP')}
        {this.createInput('adress', 'Endereço')}
        {this.createInput('complete', 'Complemento')}
        {this.createInput('number', 'Número')}
        {this.createInput('city', 'CIdade')}
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.formPurchase()}
      </div>
    );
  }
}

export default FormForFinishingShopping;

FormForFinishingShopping.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  state: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}
