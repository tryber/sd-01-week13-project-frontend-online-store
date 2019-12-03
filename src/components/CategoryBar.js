import React, { Component } from 'react';
import * as workAPI from '../services/workAPI';
import './CategoryBar.css';
import { EventEmitter } from 'events';


export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      checked: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    workAPI.getAPI('https://api.mercadolibre.com/sites/MLB/categories')
      .then((data) => {
        this.setState({ data })
        data.map((data) => this.setState((state) => ({ checked: state.checked.concat({ [data.id]: false }) })))
      })
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  renderCategory(id, value, handleChange) {
    return (
      <label key={id} className='category-options'>
        <input name='option' type='radio' key={id} id={id} value={value} onChange={handleChange} />
        {value}
      </label>
    );
  }

  render() {
    return (
      <div className='category-box'>
        <h3>Categorias:</h3>
        <div className='category-options-box'>
          {this.state.data.map((data) => this.renderCategory(data.id, data.name, this.handleChange))}
        </div>
      </div>
    );
  }
}




