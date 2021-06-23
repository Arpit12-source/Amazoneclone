import React from 'react';
import "./Checkout.css";
import * as action from "../Action/Addcreator";
import Header from "../Header/Header";
import { connect } from "react-redux";
import Checkoutcard from "./Checkoutcard";
import { Component } from 'react';
import Ordersummary from "./Ordersummary/Ordersummary";
import Emptycard from "./Emptycard/Emptycard";
import Footer from '../Footer/Footer';

class Checkout extends Component {

    removeHandler =(index)=>{
        this.props.onremove(index)
    }

    render() {
        const final=[]
        this.props.basket.map(resp=>  final.push(resp.price))
        const cards =this.props.basket.map((resp,index) => <Checkoutcard key={resp.id} removed ={()=>this.removeHandler(index)} {...resp} />)
       const value=final.reduce((total,num)=> total+num,0)
       const tax = value/10
       const ultimate=value+tax
     
        return (
            <div className="checkout">
                <Header />
                <div className="checkout__layout">
                    <div className="checkout__layout1">
                    
                        {this.props.basket.length===0?<Emptycard/>:cards}
                    </div>
                    <div className="checkout__layout2">
                        <Ordersummary length={this.props.basket.length} tax={tax} ultimate={ultimate} total={value}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        basket: state.product.basket
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        onremove : (index)=>dispatch(action.Removetocart(index))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);