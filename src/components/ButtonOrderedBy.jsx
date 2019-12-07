import React from 'react';

class ButtonOrderedBy extends React.Component {

  test(){
    console.log(this.props.result)
  }

  render() {
    return <button onClick={() => this.test()}>Ordenar por Maior Valor</button>
  }
}

export default ButtonOrderedBy;
