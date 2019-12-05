import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CategoryBar.css';

class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  handleChange(event) {
    const { onChange } = this.props;
    onChange(event);
  }

  renderCategory(id, value) {
    return (
      <label htmlFor={id} key={id} className="category-options">
        <input
          name="option"
          type="radio"
          key={id}
          value={id}
          onChange={this.handleChange}
        />
        {value}
      </label>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div className="category-box">
        <h3>Categorias:</h3>
        <div className="category-options-box">
          {data.map((dat) => this.renderCategory(dat.id, dat.name))}
        </div>
      </div>
    );
  }
}

CategoryBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryBar;
