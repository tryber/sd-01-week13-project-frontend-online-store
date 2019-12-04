import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      shouldUpdate: false
    };
  }

  fetchURL = url => {
    fetch(url)
      .then(data => data.json())
      .then(newData =>
        this.setState({
          results: newData.results,
          shouldUpdate: true
        })
      );
  };

  requestAPI = (category, searchBarText) => {
    if (searchBarText !== "" && category !== "") {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchBarText}`
      );
    } else if (searchBarText !== "" && category === "") {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?q=${searchBarText}`
      );
    } else if (searchBarText === "" && category !== "") {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?category=${category}`
      );
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { category, searchBarText } = this.props;
      this.requestAPI(category, searchBarText);
    }
  }

  render() {
    const { shouldUpdate, results } = this.state;
    const { searched } = this.props;
    return (
      <div className="card-container">
        {shouldUpdate ? (
          <Product results={results} searched={searched} />
        ) : (
          "Você ainda não realizou uma busca"
        )}
      </div>
    );
  }
}
export default ProductsList;
