import React, { Component } from 'react';
import * as workAPI from '../services/workAPI';
import './CategoryBar.css';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    workAPI
      .getAPI("https://api.mercadolibre.com/sites/MLB/categories")
      .then(data => {
        this.setState({ data });
      });
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  renderCategory(id, value, handleChange) {
    return (
      <label key={id} className="category-options">
        <input
          name="option"
          type="radio"
          key={id}
          value={id}
          onChange={handleChange}
        />
        {value}
      </label>
    );
  }

  render() {
    return (
      <div className="category-box">
        <h3>Categorias:</h3>
        <div className="category-options-box">
          {this.state.data.map(data =>
            this.renderCategory(data.id, data.name, this.handleChange)
          )}
        </div>
      </div>
    );
  }
}
