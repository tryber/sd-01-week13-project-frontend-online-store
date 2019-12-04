import React from 'react';
import * as workAPI from '../services/workAPI';
import Product from './Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
    }
  }

  componentDidUpdate() {
    const {category, searchBarText} = this.props;
    if (category === '' && searchBarText !== '') {
      workAPI.getAPI(`https://api.mercadolibre.com/sites/MLB/search?q=${searchBarText}`)
      .then(data => this.setState({ currentData: data.results }))
    }else if (category !== '' && searchBarText === ''){
      workAPI.getAPI(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`)
      .then(data => this.setState({ currentData: data.results }))
    }else if (category !== '' && searchBarText !== '') {
      workAPI.getAPI(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchBarText}`)
      .then(data => this.setState({ currentData: data.results }))
    } 
  }

  whatRender() {
    const {category, searchBarText} = this.props;
    if (category === '' && searchBarText === '') {
      return (
        <p>Você ainda não realizou uma busca</p>
      )
    } else {
      return this.state.currentData.map((obj) => <Product key={obj.id} product={obj}/>)
    }
  }


  render() {
    return (
      <div>
        {this.whatRender()}
      </div>
    )
  }
}

export default ProductsList;