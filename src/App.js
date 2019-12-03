import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartShopping from './components/CartShopping';
import OnlineStore from './components/OnlineStore';
import Product from './components/Product';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho-de-compras" component={CartShopping} />
          <Route path="/products/:id-of-product" component={Product} />
          <Route path="/" component={OnlineStore} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
