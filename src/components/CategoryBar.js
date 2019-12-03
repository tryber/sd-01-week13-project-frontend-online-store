import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as workAPI from '../services/workAPI';


export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    workAPI.getAPI('https://api.mercadolibre.com/sites/MLB/categories')
      .then((data) => this.setState({ data }))
  }

  renderCategory(id, value, handleChange) {
    return ( 
      <label>
        <input type='checkbox' key={id} value={value} onChange={handleChange} />
        {value}
      </label>
      
    );
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <h3>Categorias:</h3>
        {this.state.data.map((data) => this.renderCategory(data.id, data.name, this.handleChange))}
        </div>
    );
  }
}




