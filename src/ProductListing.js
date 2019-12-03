import React, { Component } from 'react';
class ProductListing extends Component {
    render() {
        return (
            <div >
                <div className="search-box">
                    <input type="text"  />
                </div>
                <p>Você ainda não realizou uma busca</p>
            </div>
        )
    }
}
export default ProductListing;
