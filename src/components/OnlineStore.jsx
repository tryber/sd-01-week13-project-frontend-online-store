import React, { Component } from 'react';
import CategoryBar from './CategoryBar';
import CartButton from './CartButton';
import SearchBar from './SearchBar';
import ProductsList from './ProductList';
import './cartShopping.css';

class OnlineStore extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: "",
      searchBarText: "",
      searched: false,
      cartList: '',
    }
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
  }

  onSearchBarChange (event) {
    this.setState({
      searchBarText: event.target.value,
      searched: true,
    })
  }

  onCategoryBarChange (event) {
    this.setState({category: event.target.value})
  }

  render() {
    const { cartList } = this.state;
    return (
      <div>
        <CategoryBar onChange={(e) => this.onCategoryBarChange(e)}/>
        <CartButton cartState={cartList} />
        <SearchBar onChange={this.onSearchBarChange}/>
        <ProductsList category={this.state.category} searchBarText={this.state.searchBarText} searched={this.state.searched}/>
      </div>
    );
  }
}

export default OnlineStore;
