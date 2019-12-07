import React from 'react';

class ButtonOrderedBy extends React.Component {


  sortResultLessValue(){
    const {result, onChange} = this.props;
    const ordenedResult = result.slice(0);
    ordenedResult.sort(function(a,b) {
        return a.price - b.price;
    });
    onChange(ordenedResult);
  }

  sortResultBiggerValue(){
    const {result, onChange} = this.props;
    const ordenedResult = result.slice(0);
    ordenedResult.sort(function(a,b) {
        return b.price - a.price;
    });
    onChange(ordenedResult);
  }

  render() {
    return (
      <div>
      <button onClick={() => this.sortResultLessValue()}>Ordenar por Menor Valor</button>
      <button onClick={() => this.sortResultBiggerValue()}>Ordenar por Maior Valor</button>
    </div>
    )
  }
}

export default ButtonOrderedBy;
