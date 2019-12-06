import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CartShopping from './components/CartShopping';
import OnlineStore from './components/OnlineStore';
import EachProduct from './components/EachProduct';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho-de-compras" component={CartShopping} />
          <Route exact path="/" component={OnlineStore} />
          <Route path="/products/:id_of_products" component={EachProduct} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
