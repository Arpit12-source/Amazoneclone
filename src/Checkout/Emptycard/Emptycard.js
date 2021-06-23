import React from 'react';

// import {useHistory} from "react-router";
import "./Emptycard.css";


const Emptycard = () => {
    // const history = useHistory();
    
    return (
        <div className="emptycard">
            <div className="emptycard__image">
                <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="empty"/>
            </div>
            <div className="emptycard__box">
                <h1>YOUR CART IS EMPTY</h1>
                <div className="emptycard__buttons">
                    <p style={{fontSize:"12px"}}>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                    Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.</p>
                </div>
            </div>
        </div>
    )
}

export default Emptycard;
