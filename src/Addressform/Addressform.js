import React, { Component } from 'react'
import amazonlogo from "./amazonlogo.png";
import {connect} from "react-redux";
import Addresscard from "./Addresscard/Addresscard";
import * as action from "../Action/Addresscreator";

import "./Addressform.css";
class Addressform extends Component {
    state = {
        address: {
            name: "",
            building:"",
            address: "",
            number: "",
            city: "",
            state: "",
            country: "",
            zipcode: ""

        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const payload={
            name: this.state.name,
            address: this.state.address,
            number: this.state.number,
            building:this.state.building,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipcode: this.state.zipcode
        }
       this.props.onAdd(payload)
    }
    removeHandler=(index)=>{
        this.props.onRemove(index)
    }

    render() {
        console.log(this.props.addressstorage)
        return (
            <div className="address">
                <div className="address__img">
                    <img src={amazonlogo} alt="logo"/>
                </div>
                <div className="address__sec1">
                    <h1>Select a shipping address</h1>
                    <p>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new shipping address. </p>
                </div>
                <hr />
                <div className="addresslist">
                 {this.props.addressstorage.map((resp,index)=><Addresscard key ={resp.number} removed={()=>this.removeHandler(index)} {...resp} />)}
                </div>
                <hr/>
                <div className="addressform"> 
                    <h1>Add New Address</h1>
                    <form onSubmit={this.onSubmitHandler}>
                        <label>Country/Region</label>
                        <input className="address__input" onChange={this.changeHandler}  name="country" placeholder="Your Country" />
                        <label>Full name (First and Last name)</label>
                        <input className="address__input" onChange={this.changeHandler}  name="name" placeholder="YOur name" />
                        <label>Phone number</label>
                        <input  className="address__input" onChange={this.changeHandler}  name="number" placeholder="your number" />
                        <label>Address</label>
                        <input className="address__input" onChange={this.changeHandler}  name="address" placeholder="street address" />

                        <input className="address__input" onChange={this.changeHandler} name="building" placeholder="building floor" />
                        <div className="address__minidiv">
                            <div className="address__minidiv1">
                                <label>City</label>
                                <input   className="address__input" onChange={this.changeHandler} name="city" placeholder="city" />
                            </div>
                            <div className="address__minidiv1">
                                <label>State</label>
                                <input className="address__input" onChange={this.changeHandler} name="state" placeholder="State" />
                            </div>
                            <div className="address__minidiv1">
                                <label>Zip Code</label>
                                <input  className="address__input" onChange={this.changeHandler} name="zipcode" />
                            </div>
                        </div>
                        <div className="checkbox">
                            <input className="address__input" type="checkbox" />
                            <label for="vehicle2"> Make this my default address</label><br />

                        </div>
                        <button type="submit">Use this address</button>
                    </form>
                    <hr style={{ margin: "30px", boxShadow: "2px #dedfe0" }} />
                    <div className="bottom">
                        <p>Do you have a gift card or promotional code? We’ll ask you to enter your claim code when it’s time to pay.</p>
                        <p><a href="/">Conditions of Use </a>| <a href="/">Privacy Notice</a> © 1996-2020, Amazon.com, Inc.</p>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        addressstorage:state.address.addressstorage
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onAdd : (payload)=>dispatch(action.Addaddress(payload)),
        onRemove : (index) =>dispatch(action.Removeaddress(index))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Addressform);
