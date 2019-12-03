import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartShopping from './CartShopping';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/carrinho-de-compras" component={CartShopping} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
