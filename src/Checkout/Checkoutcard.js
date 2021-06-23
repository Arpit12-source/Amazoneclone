import React from 'react'
import "./Checkoutcard.css";


const Checkoutcard = (props) => {
    return (
        
        <div className="card">
            <div className="card__first">
           
            <img src={props.image} alt="product" className="card__image"/>
            <div className="card__second">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="card__rating">
                <h5 className="card__rating">{
                    Array(props.rating).fill().map((_) => <p key={Math.random()}>⭐</p>)
                }</h5>
                </div>
                <button onClick={props.removed}>Remove</button>
            </div>
            <p> ${props.price}</p>
            </div>
            
        </div>
        
        
    )
}

export default Checkoutcard
