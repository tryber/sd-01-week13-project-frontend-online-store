import React from 'react';
import SearchBar from './SearchBar';
import ProductsList from './ProductsList';

// import CategoryBar from './CategoryBar';
// import CartButton from './CartButton';
// import './cartShopping.css';
class OnlineStore extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      category: "",
      searchBarText: "",
    }
  }
  onSearchBarChange (event) {
    this.setState({searchBarText: event.target.value})
  }
  render() {
    return (
      <div>
        {/* <CategoryBar /> */}
        {/* <CartButton /> */}
        <SearchBar onChange={this.onSearchBarChange}/>
        <ProductsList category={this.state.category} searchBarText={this.state.searchBarText}/>
      </div>
    );
  }
}

export default OnlineStore;
