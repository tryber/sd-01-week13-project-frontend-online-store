import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import EmptyMessage from '../components/EmptyMessage';
import ShoppingCarImg from '../icons/ShoppingCarImg.jpg';

// import './cartShopping.css';
// import CategoryBar from '../components/CategoryBar';
// import CartButton from '../components/CartButton';

// import ProductsList from '../components/ProductList';


export default class OnlineStore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchBarText: '',
      // category: '',

      // searched: false,
      // cartList: Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key))),
      // quantity: Object.keys(localStorage)
      //   .map((key) => JSON.parse(localStorage.getItem(key))).length,
    };
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
    //     this.onCategoryBarChange = this.onCategoryBarChange.bind(this);
    //     this.updateCartState = this.updateCartState.bind(this);
  }

  onSearchBarChange(event) {
    this.setState({
      searchBarText: event.target.value,
      // searched: true,
    });
  }

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
      <div className="online-store-page">
        <header className="online-store-header">
          <SearchBar onChange={this.onSearchBarChange} />
          <Link to="/carrinho-de-compras" className="online-store-header-img">
            <img  className="shopping-car-img" src={ShoppingCarImg} alt="Shopping Car Icon"/>
          </Link>
        </header>
        <EmptyMessage />
      </div>

      //       <div>
      //         <CategoryBar onChange={this.onCategoryBarChange} />
      //         <CartButton cartState={cartList} quantity={quantity} />
      //         

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
