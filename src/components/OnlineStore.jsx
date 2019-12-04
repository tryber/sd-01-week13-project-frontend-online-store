import React from 'react';
import SearchBar from './SearchBar';
import CategoryBar from './CategoryBar';
import ProductList from './ProductsList';
// import CartButton from './CartButton';
import './cartShopping.css';

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
  onCategoryBarChange (event) {
    this.setState({category: event.target.value})
  }
  render() {
    const {category, searchBarText} = this.state;
    return (
      <div>
        <SearchBar onChange={(e) => this.onSearchBarChange(e)}/>
        <div>
          <CategoryBar onChange={(e) => this.onCategoryBarChange(e)}/>
          <ProductList category={category} searchBarText={searchBarText}/>
        </div>
        

        {/* <CartButton /> */}
      </div>
    );
  }
}
export default OnlineStore;