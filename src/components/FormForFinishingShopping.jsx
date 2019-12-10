import React from 'react';
import './finishingShopping.css';

class FormForFinishingShopping extends React.Component {

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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      return this.formPurchase();
    }
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
