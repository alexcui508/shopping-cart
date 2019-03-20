import React from "react";
import "./styles/styles.css";

class Product extends React.Component {
    constructor(props) {
        super(props);   
        this.addToCart = this.addToCart.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            cartCount: 0
        };
        this.disabledUpdates = false;
    }

    addToCart(numInCart) {
        if (this.props.limit === 0) {
            alert("This item is out of stock!");
        } else {
            if (numInCart === this.props.limit) {
                this.disabledUpdates = true;
            }
            alert("There is now " + numInCart + " " + this.props.productName + " in your cart!");
        }
    }

    handleClick() {
        if (this.disabledUpdates) {
            alert("There are too many " + this.props.productName + " in your cart!");
        } else {
            this.setState({
                cartCount: this.state.cartCount + 1
            }, () => {this.addToCart(this.state.cartCount)});
        }
    }

    render() {
        return (
            <div className='card'>
                <div className="content">
                    <div className="header">{this.props.productName}</div>
                        <div className="description">Price: ${this.props.price}</div>
                </div>
                <div className="ui bottom attached button" onClick={this.handleClick}>
                    <i className="add icon"></i>
                    Add to Cart
                </div>
            </div>
        );
    }

}

export default Product;