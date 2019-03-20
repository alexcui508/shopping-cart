import React from "react";
import "./styles/cart.css";
import Product from './Product';
import ProductData from './Data';

class Cart extends React.Component {

  render() {
    let renderedProducts = ProductData.products.map((product) => <Product productName={product.name} price={product.cost} limit={product.stock} />);
    return (
      <div className="App">
        <div className="page-content">
            <h2>Add your products here!</h2>
        </div>
        <span>&nbsp;&nbsp;</span>
        <div className='ui cards'>
          {renderedProducts}
        </div>
      </div>
    );
  }

}

export default Cart;
