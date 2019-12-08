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
    this.setState((state) => ({ cartList: [...state.cartList, item] }));
  }

  render() {
    const {
      category, searchBarText, searched, cartList,
    } = this.state;
    return (
      <div>
        <CategoryBar onChange={this.onCategoryBarChange} />
        <CartButton onChange={cartList} />
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
