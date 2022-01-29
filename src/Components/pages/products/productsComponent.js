import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
      super(props);
    }

    renderProductsList() {
        return (
            <h1>Products List</h1>
        );
    }

    render() {
        return (
            <div>
                {this.renderProductsList()}
            </div>
        );
    }
}

export default Products;