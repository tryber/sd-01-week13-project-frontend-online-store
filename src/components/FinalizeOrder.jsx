import React from 'react';

class FinalizeOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      CPF: '',
      email: '',
      phoneNumber: '',
      CEP: '',
      complement: '',
      adress: '',
      number: '',
      city: '',
    };
    this.formPurchase = this.formPurchase.bind(this);
    this.formPurchaseNumber = this.formPurchaseNumber.bind(this);
    this.addData = this.addData.bind(this);
    this.validation = this.validation.bind(this);
    this.addDataNumber = this.addDataNumber.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
  }

  addData(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  addDataNumber(event, name) {
    const { value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  // validateEmail(event) {
  //   const validation = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  //   const valid = validation.test(event.target.value);
  //   this.setState({ valid, email: event.target.value });
  // }

  validation() {
    if (this.state.name !== String(this.state.name) || this.state.name === '') {
      alert('Campo nome é obrigatório');
    } else if (this.state.CPF !== Number(this.state.CPF)) {
      alert('Adicione números no campo CPF');
    } else if (this.state.email === '') {
      alert('Formato de email inválido');
    } else if (this.state.phoneNumber !== Number(this.state.phoneNumber)) {
      alert('Adicione números no campo telefone');
    } else if (this.state.CEP !== Number(this.state.CEP)) {
      alert('Adicione números no campo CEP');
    } else if (this.state.adress !== String(this.state.adress) || this.state.city === '') {
      alert('Adicione letras no campo endereço');
    } else if (this.state.number !== Number(this.state.number)) {
      alert('Adicione o número da residência');
    } else if (this.state.city !== String(this.state.city) || this.state.city === '') {
      alert('Adicione o nome de uma cidade');
    } else {
      return '';
    }
  }

  formPurchase(value, element, placeholder) {
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => this.addData(event, element)}
        placeholder={placeholder}
      />
    );
  }

  formPurchaseNumber(value, element, placeholder) {
    return (
      <input
        type="number"
        value={value}
        onChange={(event) => this.addDataNumber(event, element)}
        placeholder={placeholder}
      />
    );
  }

  render() {
    return (
      <form>
        {this.formPurchase(this.state.name, 'name', 'Nome completo')}
        {this.formPurchaseNumber(this.state.CPF, 'CPF', 'CPF')}
        {this.formPurchase(this.state.email, 'email', 'Email')}
        {this.formPurchaseNumber(
          this.state.phoneNumber,
          'phoneNumber',
          'Telefone'
        )}
        {this.formPurchase(this.state.complement, 'complement', 'Complemento')}
        {this.formPurchaseNumber(this.state.CEP, 'CEP', 'CEP')}
        {this.formPurchase(this.state.adress, 'adress', 'Endereço')}
        {this.formPurchaseNumber(this.state.number, 'number', 'Número')}
        {this.formPurchase(this.state.city, 'city', 'Cidade')}
        <button type="button" onClick={this.validation}>
          Submit
        </button>
      </form>
    );
  }
}

export default FinalizeOrder;
