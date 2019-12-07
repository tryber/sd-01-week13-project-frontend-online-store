import React, { Component } from 'react';

export default class ShoppingProduct extends Component {
    render() {
        const { id, title, price, thumbnail, available_quantity  } = this.props.data;
        console.log(this.props.data)
        return (
            <div style={ { display:"flex" } }key={id}>
                <button>remove button</button>
                <img src={thumbnail} alt={title} />
                <span>{title}</span>
                <p>{price}</p>
            </div>
        );
    }
}