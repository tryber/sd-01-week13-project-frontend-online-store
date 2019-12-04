import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import CartShopping from './components/CartShopping';
import OnlineStore from './OnlineStore';
// import SearchBar from './components/SearchBar';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={OnlineStore} />
          {/* <Route path="/carrinho-de-compras" component={CartShopping} /> */}
          {/* <Route path="/" component={OnlineStore} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
