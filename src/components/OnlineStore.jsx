import React from 'react';
// import CategoryBar from './CategoryBar';
import CartButton from './CartButton';
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
  render() {
    return (
      <div>
        {/* <CategoryBar /> */}
        <CartButton />
        <SearchBar onChange={(e) => this.onSearchBarChange(e)}/>
      </div>
    );
  }
}
export default OnlineStore;
