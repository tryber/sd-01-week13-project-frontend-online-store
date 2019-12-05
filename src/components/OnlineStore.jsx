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
      quantity: 0,
    };
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
    this.onCategoryBarChange = this.onCategoryBarChange.bind(this);
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

  componentDidMount() {
    const leng = Object.keys(localStorage).length
    if (leng > 0) {
      this.setState({
        quantity: Object.keys(localStorage).length - 1,
      })
    }
  }

  render() {
    const {
      category, searchBarText, searched, quantity 
    } = this.state;
    return (
      <div>
        <CategoryBar onChange={this.onCategoryBarChange} />
        <CartButton quantity={quantity}/>
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
