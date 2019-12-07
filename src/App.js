import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import OnlineStore from './pages/OnlineStore';
import CartShopping from './pages/CartShopping';

// import EachProduct from './components/EachProduct';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OnlineStore} />
          <Route path="/carrinho-de-compras" component={CartShopping} />

          {/* <Route path="/products/:id_of_products" component={EachProduct} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
