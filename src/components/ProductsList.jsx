import React from 'react';

class ProductsList extends React.Component {

  fetchURL = (url) => {
    fetch(url)
    .then(data => data.json())
    .then(newData => newData.results.map(product => this.showProducts(product)));
  }

  requestAPI = (category, searchBarText) => {
    if (searchBarText !== '' && category !== "") {
      this.fetchURL(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchBarText}`)
    } else if (searchBarText !== '' && category === '') {
      this.fetchURL(`https://api.mercadolibre.com/sites/MLB/search?q=${searchBarText}`)        
    } else if (searchBarText === '' && category !== '') {
      this.fetchURL(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`)
    } else {
      return (
        <div>Componente do Coruja</div>
      )
    }
  }

  showProducts = (product) => {
    console.log(product.title)
    return (
      <div>
        <p>Teste</p>
      </div>
    )
  }

  render() {
    const { category, searchBarText } = this.props
    return (
      <div>
        {this.requestAPI(category, searchBarText)}
      </div>
    )
  }
}

export default ProductsList;
