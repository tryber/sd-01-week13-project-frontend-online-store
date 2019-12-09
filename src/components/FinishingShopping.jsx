import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import billet from '../icons/boleto.png';
import credit from '../icons/cardCredit.png';
import './finishingShopping.css';
import Back from '../icons/back.svg';

class FinishingShopping extends React.Component {
  static showHeader() {
    return (
      <header>
        <Link to="/">
          <img className="backPageImage space" src={Back} alt="back" />
        </Link>
      </header>
    );
  }

  static showProcuts(products) {
    return products.map((product) => {
      const actualProduct = JSON.parse(localStorage.getItem(product));
      const { id, title, price, thumbnail } = actualProduct;
      const quantity = localStorage.getItem(
        Object.keys(localStorage).find((key) => key.includes(`${id}_quantity`)),
      );
      return (
        <div key={id}>
          <div className="product-item" key={id}>
            <img className="thumbnail" src={thumbnail} alt={title} />
            <span>{title}</span>
            <span>{`R$ ${price.toFixed(2)}`}</span>
            <span>{quantity}</span>
          </div>
        </div>
      );
    });
  }

  static calculateTotalPrice() {
    const totalPrice = Object.keys(localStorage)
      .filter((key) => key.includes('MLB') && !key.includes('quantity'))
      .reduce((acc, itemId) => {
        const itemQuantity = parseInt(
          localStorage.getItem(`${itemId}_quantity`),
          10,
        );
        const item = JSON.parse(localStorage.getItem(itemId));
        const itemPrice = item.price;
        const thisItemTotalPrice = itemQuantity * itemPrice;
        return acc + thisItemTotalPrice;
      }, 0);
    return totalPrice;
  }

  static findProducts() {
    const products = Object.keys(localStorage).filter(
      (key) => key.includes('MLB') && !key.includes('quantity'),
    );
    if (products.length !== 0) {
      return FinishingShopping.showProcuts(products);
    }
    return 'Nenhum produto encontrado.';
  }

  static gerateCreditMethodPayment() {
    return (
      <div>
        <p>Cartão de Cŕedito</p>
        <div className="credit-pay-method">
          <div className="credit-pay-method">
            <input type="radio" name="pay" />
            <p>Visa</p>
            <img className="creditCard" src={credit} alt="billet" />
          </div>
          <div className="credit-pay-method">
            <input type="radio" name="pay" />
            <p>MasterCard</p>
            <img className="creditCard" src={credit} alt="billet" />
          </div>
          <div className="credit-pay-method">
            <input type="radio" name="pay" />
            <p>Elo</p>
            <img className="creditCard" src={credit} alt="billet" />
          </div>
        </div>
      </div>
    );
  }

  static purchaseType() {
    return (
      <div className="pay-method-container">
        <div>
          <p>Boleto</p>
          <div className="billet-pay-method">
            <input type="radio" name="pay" checked />
            <img className="billet" src={billet} alt="billet" />
          </div>
        </div>
        {FinishingShopping.gerateCreditMethodPayment()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      cep: '',
      cellphone: '',
      adress: '',
      number: '',
      city: '',
      complete: '',
      nameValidation: true,
      cpfValidation: true,
      emailValidation: true,
      cellphoneValidation: true,
      cepValidation: true,
      adressValidation: true,
      numberValidation: true,
      cityValidation: true,
      shouldUpdate: true,
      shouldRedirect: false,
    };
    this.validateDataFirstPart = this.validateDataFirstPart.bind(this);
    this.validateDataSecondPart = this.validateDataSecondPart.bind(this);
    this.finishingBuy = this.finishingBuy.bind(this);
  }

  changeHandler(event) {
    const { target } = event;
    this.setState({ [target.id]: target.value });
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

  createInput(id, placeholder) {
    return (
      <input
        type="text"
        className={`this.state.${id}Validation` ? 'valid' : 'invalid'}
        onChange={(e) => this.changeHandler(e)}
        id={id}
        required
        placeholder={placeholder}
      />
    );
  }

  validateDataFirstPart() {
    if (!/[a-zA-Z\u00C0-\u00FF ]+/i.test(this.state.name)) {
      this.setState({ nameValidation: false, shouldUpdate: false });
    }
    if (!/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/.test(this.state.CPF)) {
      this.setState({ cpfValidation: false, shouldUpdate: false });
    }
    if (!/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(this.state.email)) {
      this.setState({ emailValidation: false, shouldUpdate: false });
    }
    if (!/^[0-9.]+$/.test(this.state.cellphone)) {
      this.setState({ cellphoneValidation: false, shouldUpdate: false });
    }
    this.validateDataSecondPart();
    return true;
  }

  validateDataSecondPart() {
    if (!/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.state.cep)) {
      this.setState({ cepValidation: false, shouldUpdate: false });
    }
    if (this.state.adress === ' ') {
      this.setState({ adressValidation: false, shouldUpdate: false });
    }
    if (!/^[0-9.]+$/.test(this.state.number)) {
      this.setState({ numberValidation: false, shouldUpdate: false });
    }
    if (!/[a-zA-Z\u00C0-\u00FF ]+/i.test(this.state.city)) {
      this.setState({ cityValidation: false, shouldUpdate: false });
    }
    return true;
  }

  finishingBuy() {
    this.validateDataFirstPart();
    setTimeout(() => {
      if (this.state.shouldUpdate) {
        localStorage.clear();
        this.setState({ shouldRedirect: true });
      } else {
        return 'Dados Incompletos!';
      }
      return '';
    }, 1000);
  }

  render() {
    if (this.state.shouldRedirect) return <Redirect to="/" />;
    return (
      <div>
        {FinishingShopping.showHeader()}
        <fieldset className="products-review">
          <legend>Revise seus produtos</legend>
          {FinishingShopping.findProducts()}
          {`Preço total: R$${FinishingShopping.calculateTotalPrice()}`}
        </fieldset>
        <fieldset>
          <legend>Dados do comprador</legend>
          {this.formPurchase()}
        </fieldset>
        <fieldset>
          <legend>Método de pagamento:</legend>
          {FinishingShopping.purchaseType()}
        </fieldset>
        <button className="btn" onClick={this.finishingBuy}>
          Comprar
        </button>
      </div>
    );
  }
}

export default FinishingShopping;
