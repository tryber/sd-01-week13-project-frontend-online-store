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

  async componentDidMount() {
    workAPI.getAPI('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => this.setState({data}))
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

