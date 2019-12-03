import React from 'react';

class ProductsList extends React.Component {

  requestAPI(category, searchBarText) {
    if (searchBarText !== '' && category !== "") {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchBarText}`)
        .then(data => data.json())
        .then(newData => newData.results.map(product => this.showProducts(product)));
    } else if (searchBarText !== '' && category === '') {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchBarText}`)
        .then(data => data.json())
        .then(newData => newData.results.map(product => this.showProducts(product)));
    } else if (searchBarText === '' && category !== '') {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`)
        .then(data => data.json())
        .then(newData => newData.results.map(product => this.showProducts(product)));
    } else {
      return (
        <div>Componente do Coruja</div>
      )
    }
  }

  showProducts(product) {
    return (
      <div className="full-info-product">
        <div className="title">{product.title}</div>
      </div>
    )
  }

  render() {
    const { category, searchBarText } = this.props
    return (
      <div>
        {() => this.requestAPI(category, searchBarText)}
      </div>
    )
  }
}

export default ProductsList;
