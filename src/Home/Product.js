import React from "react";
import * as action from '../Action/Addcreator';
import { connect } from "react-redux";

import "./Product.css";
import { Component } from "react";

class Product extends Component  {

     addHandler = () => {
        const payload={
            title:this.props.title,
            price:this.props.price,
            rating : this.props.rating,
            image  :this.props.image
        }
        this.props.onAdd(payload)
    }
    render(){
    return (
        <div className="product">
            <div className="product__info">
                <p>{this.props.title}</p>
                <p className="product__price"><small>$</small><strong>{this.props.price}</strong></p>
                <div className="product__rating">
                    {
                        Array(this.props.rating).fill().map((_) => <p>⭐</p>)
                    }
                </div>
            </div>

            <img className="product__image" src={this.props.image} alt="product" />
            <button onClick={this.addHandler} className="product__button">Add to Basket</button>
        </div>
    )
                }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (payload) => dispatch(action.Addtocart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);