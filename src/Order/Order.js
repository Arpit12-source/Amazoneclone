import React from 'react'
import "./Order.css";
import { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';


class Order extends Component {
    
    render() {
        const cards=<div><Header />
        <div className="order__firstblock">
            <h1>Your Orders</h1>
            <input placeholder="search all orders" />
            <button>search Orders</button>
        </div>
        <ul className="orders__nav">
            <li><a href="/">Orders</a></li>
            <li><a href="/">Buy again</a></li>
            <li><a href="/">Digital Orders</a></li>
            <li><a href="/">Local Store Orders</a></li>
            <li><a href="/">Cancelled Orders</a></li>
        </ul>
        <Footer/>
        </div>
        return (
            <div className="order">
                {this.props.token?cards:<Redirect to="/login"/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.Login.token
    }
}

export default connect(mapStateToProps)(Order);
