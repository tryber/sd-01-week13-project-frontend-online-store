import React, { Component } from 'react';
import CategoryBar from './CategoryBar';
import CartButton from './CartButton';
import SearchBar from './SearchBar';
import ProductsList from './ProductList';
import './cartShopping.css';

class OnlineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      searchBarText: '',
      searched: false,
      cartList: [],
      quantity: 0,
    };
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
    this.onCategoryBarChange = this.onCategoryBarChange.bind(this);
    this.updateCartState = this.updateCartState.bind(this);
  }

  onSearchBarChange(event) {
    this.setState({
      searchBarText: event.target.value,
      searched: true,
    });
  }

  onCategoryBarChange(event) {
    this.setState({ category: event.target.value });
  }

  updateCartState(item) {
    this.setState((state) => ({ cartList: [...state.cartList, item] }),
      () => {
        const { cartList } = this.state;
        this.setState({ quantity: cartList.length });
      });
  }

  render() {
    const {
      cartList, category, searchBarText, searched, quantity,
    } = this.state;
    return (
      <div>
        <CategoryBar onChange={this.onCategoryBarChange} />
        <CartButton cartState={cartList} quantity={quantity} />
        <SearchBar onChange={this.onSearchBarChange} />
        <ProductsList
          updateCartState={this.updateCartState}
          category={category}
          searchBarText={searchBarText}
          searched={searched}
        />
      </div>
    );
  }
}
export default OnlineStore;
