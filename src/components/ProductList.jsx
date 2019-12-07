import React, { Component } from 'react';
import EmptyMessage from '../components/EmptyMessage';
import './ProductList.css';
import Product from '../components/Product';
// import PropTypes from 'prop-types';

// import EachProduct from './EachProduct';

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
    };
    this.fetchURL = this.fetchURL.bind(this);
    this.requestAPI = this.requestAPI.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { category, searchBarText } = this.props;
      this.requestAPI(category, searchBarText);
    }
  }

  fetchURL(url) {
    fetch(url)
      .then((data) => data.json())
      .then((newData) =>
        this.setState({
          currentData: newData.results,
        }),
      );
  }

  requestAPI(category, searchBarText) {
    if (searchBarText !== '' && category !== '') {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchBarText}`,
      );
    } else if (searchBarText !== '' && category === '') {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?q=${searchBarText}`,
      );
    } else if (searchBarText === '' && category !== '') {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?category=${category}`,
      );
    }
  }

  render() {
    const { currentData } = this.state;
    const { searched } = this.props;
    //     const { searched, updateCartState } = this.props;
    if (currentData.length > 0) {
      return (
        <div className="card-container">
          {currentData.map((data) => <Product data={data} />)};
            </div>
      );
    } else if (currentData.length === 0 && searched) {
      return (
        <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>
      );
    } else {
      return (
        <EmptyMessage />
      );
    }
  }
}

// ProductsList.propTypes = {
//   category: PropTypes.string.isRequired,
//   searchBarText: PropTypes.string.isRequired,
//   searched: PropTypes.bool.isRequired,
//   updateCartState: PropTypes.func.isRequired,
// };


