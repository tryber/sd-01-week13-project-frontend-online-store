import React, { Component } from 'react';

export default class EmptyMessage extends Component {
  render() {
    return (
      <div className={'empty-message'}>
        <p> <span> Você ainda não realizou uma busca </span> </p>
      </div>
    );
  }
}
