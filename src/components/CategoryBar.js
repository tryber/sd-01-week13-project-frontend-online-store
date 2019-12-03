import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    const myJson = await response.json();
    console.log(myJson);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}


CategoryBar.propTypes = {

};

