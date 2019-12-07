import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onChange(event);
    }
  }

  render() {
  
    return (
      <div className="search-box">
        <input className="input-style" type="text" onKeyPress={(e) => this.handleKeyPress(e)} />
      </div>
    );
  }

}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
