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
      cartList: '',
    };
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
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

  render() {
    const {
      cartList, category, searchBarText, searched,
    } = this.state;
    return (
      <div>
        <CategoryBar onChange={(e) => this.onCategoryBarChange(e)} />
        <CartButton cartState={cartList} />
        <SearchBar onChange={this.onSearchBarChange} />
        <ProductsList
          category={category}
          searchBarText={searchBarText}
          searched={searched}
        />
      </div>
    );
  }
}

export default OnlineStore;
