
import React from 'react'
import "./Addresscard.css"
const Addresscard=(props)=> {
    return (
        <div className="addresscard">
            <h3>{props.name}</h3>
            <p> <strong>ADDRESS : </strong>{props.address}</p>
            <p> {props.building}</p>
            <p> <strong>Number : </strong>{props.number}</p>
            <button className="addresscard__button">Deliver To this Address</button>
            <div className="addresscard__buttons">
            <button className="addresscard__button">edit</button>
            <button onClick={props.removed} className="addresscard__button">remove</button>
            </div>
        </div>
    )
}

export default Addresscard
