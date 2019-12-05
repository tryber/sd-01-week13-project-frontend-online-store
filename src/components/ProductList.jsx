import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import EachProduct from './EachProduct';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      shouldUpdate: false,
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
      .then((newData) => this.setState({
        results: newData.results,
        shouldUpdate: true,
      }));
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
    const { shouldUpdate, results } = this.state;
    const { searched, updateCartState } = this.props;
    console.log(results)
    return (
      <div className="card-container">
        {shouldUpdate ? (
          <EachProduct results={results} searched={searched} onClick={updateCartState} />
        ) : (
          'Você ainda não realizou uma busca'
        )}
      </div>
    );
  }
}

export default ProductsList;

ProductsList.propTypes = {
  category: PropTypes.string.isRequired,
  searchBarText: PropTypes.string.isRequired,
  searched: PropTypes.bool.isRequired,
  updateCartState: PropTypes.func.isRequired,
};
