import React, { Component } from 'react';
import EmptyMessage from '../components/EmptyMessage';

// import './cartShopping.css';
// import CategoryBar from '../components/CategoryBar';
// import CartButton from '../components/CartButton';
// import SearchBar from '../components/SearchBar';
// import ProductsList from '../components/ProductList';


export default class OnlineStore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // category: '',
      // searchBarText: '',
      // searched: false,
      // cartList: Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key))),
      // quantity: Object.keys(localStorage)
      //   .map((key) => JSON.parse(localStorage.getItem(key))).length,
    };
    //     this.onSearchBarChange = this.onSearchBarChange.bind(this);
    //     this.onCategoryBarChange = this.onCategoryBarChange.bind(this);
    //     this.updateCartState = this.updateCartState.bind(this);
  }

  //   onSearchBarChange(event) {
  //     this.setState({
  //       searchBarText: event.target.value,
  //       searched: true,
  //     });
  //   }

  //   onCategoryBarChange(event) {
  //     this.setState({ category: event.target.value });
  //   }

  //   updateCartState(item) {
  //     this.setState((state) => ({ cartList: state.cartList.concat(item) }),
  //       () => {
  //         const { cartList } = this.state;
  //         this.setState({ quantity: cartList.length });
  //       },
  //     );
  //   }


  render() {
    //     const {
    //       cartList, category, searchBarText, searched, quantity,
    //     } = this.state;
    return (
      <div>
        <EmptyMessage />
      </div>
//       <div>
//         <CategoryBar onChange={this.onCategoryBarChange} />
//         <CartButton cartState={cartList} quantity={quantity} />
//         <SearchBar onChange={this.onSearchBarChange} />
      // <ErrorComponent />
//         <ProductsList
//           updateCartState={this.updateCartState}
//           category={category}
//           searchBarText={searchBarText}
//           searched={searched}
//         />
//       </div>
    );
  }
}
