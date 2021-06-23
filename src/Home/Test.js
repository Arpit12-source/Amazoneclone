import React from 'react'

function Test(props) {
    
        return (
            <div className="product">
                <div className="product__info">
                    <p>{props.title}</p>
                    <p className="product__price"><small>$</small><strong>{props.price}</strong></p>
                    <div className="product__rating">
                        {
                            Array(props.rating).fill().map((_) => <p>⭐</p>)
                        }
                    </div>
                </div>
    
                <img className="product__image" src={props.image} alt="product" />
                <button onClick={this.addHandler} className="product__button">Add to Basket</button>
            </div>
        )
       
    
}

export default Test
