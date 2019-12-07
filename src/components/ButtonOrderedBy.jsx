import React from 'react';
import PropTypes from 'prop-types';

class ButtonOrderedBy extends React.Component {

  sortResultLessValue() {
    const { result, onChange } = this.props;
    const ordenedResult = result.slice(0);
    ordenedResult.sort((a, b) => {
      return a.price - b.price;
    });
    onChange(ordenedResult);
  }

  sortResultBiggerValue() {
    const { result, onChange } = this.props;
    const ordenedResult = result.slice(0);
    ordenedResult.sort((a, b) => {
      return b.price - a.price;
    });
    onChange(ordenedResult);
  }

  findValueSelect(event) {
    if (event.target.value === 'less') {
      this.sortResultLessValue();
    } else if (event.target.value === 'bigger') {
      this.sortResultBiggerValue();
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <select onChange={(e) => this.findValueSelect(e)}>
          <option>---Ordenar Por---</option>
          <option value="less">Menor Valor</option>
          <option value="bigger">Maior Valor</option>
        </select>
      </div>
    );
  }
}

export default ButtonOrderedBy;

ButtonOrderedBy.propTypes = {
  result: PropTypes.arrayOf.isRequired,
  onChange: PropTypes.func.isRequired,
}
