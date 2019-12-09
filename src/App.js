import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CartShopping from './components/CartShopping';
import OnlineStore from './components/OnlineStore';
import Product from './components/Product';
import FinishingShopping from './components/FinishingShopping';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho-de-compras" component={CartShopping} />
          <Route exact path="/" component={OnlineStore} />
          <Route path="/products/:id_of_products" component={Product} />
          <Route path="/finalizar-compra" component={FinishingShopping} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
