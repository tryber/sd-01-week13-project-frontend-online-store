import React from 'react';
class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }
  fetchURL = (url) => {
    fetch(url)
      .then(data => data.json())
      .then(newData => this.setState({
        results: newData.results
      }))
    // .then(newData => newData.results.map(product => this.showProducts(product)));
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
  
  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
    const { category, searchBarText } = this.props
    this.requestAPI(category, searchBarText)
    }
  }


  render() {
    return (
      <div>
        {this.state.results.map((obj) => <p>{obj.title}</p>)}
      </div>
    )
  }
}
export default ProductsList;
