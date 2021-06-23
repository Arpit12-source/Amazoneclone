import React  from 'react'
import { useHistory } from 'react-router';
import "./Ordersummary.css";
const Ordersummary =(props)=>{
const History =useHistory();
    return (
        <div className="ordercard">
            <button  onClick={()=>History.push("/address")} className="ordercard__button">Place your order</button>
            <p style={{ fontSize: "12px" ,margin:'5px'}}>By placing your order, you agree to amazons <a href="/" style={{ color: "blue" }}>privacy notice</a> and <a href="/"  style={{ color: "blue" }}>condition of use </a>. </p>
            <hr />
            <div>
                <h2 style={{margin:"10px"}}>Order Summary</h2>
                <div className="ordercard__line">
                    <p className="ordercard__line1">items({ props.length}):</p>
                    <p className="ordercard__line2">${props.total.toFixed(2)}</p>
                </div>
                <div className="ordercard__line">
                    <p className="ordercard__line1">Shipping & handling :</p>
                    <p className="ordercard__line2">$0.00</p>
                </div>
                <div className="ordercard__line">
                    <p className="ordercard__line1">Total before tax :</p>
                    <p className="ordercard__line2">${props.tax}</p>
                </div>
                <div className="ordercard__line">
                    <p className="ordercard__line1">Estimated tax to be collected :</p>
                    <p className="ordercard__line2">$0.00</p>
                </div>
                <hr />
                <div className="ordercard__line">
                    <h1 className="ordercard__line1" style={{ color: 'red' }}>Order total :</h1>
                    <h1 className="ordercard__line2" style={{ color: 'red' }}>${props.ultimate.toFixed(2)}</h1>
                </div>
                <hr />
                <div className="ordercard__line">
                    <p className="ordercard__line1" style={{color:"blue"}}>How are shipping cost calculated?</p>
                   
                </div>
                <div className="ordercard__line">
                    <p className="ordercard__line1">Prime shipping benefits have been applied to your order.</p>
                   
                </div>


            </div>

        </div>
    )
}

export default Ordersummary;
