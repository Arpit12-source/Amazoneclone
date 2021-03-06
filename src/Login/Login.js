import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import amam from "./amam.png"
import * as action from "../Action/Actioncreators";
import "./Login.css";


class Login extends Component {
    state = {
        controls: {
            email: {
                value: '',
                validate: {
                    isemail: true,
                    isRequired: true
                },
                valid: false,
                touched: false,

            },
            password: {
                value: "",
                validate: {
                    isRequired: true,
                    minlength: 6
                },
                valid: false,
                touched: false,

            }
        },
        isSignup: false,
        empty: true
    }
    changeHandler = (event) => {
        const updated = { ...this.state.controls }
        const newdated = { ...updated[event.target.name] }
        newdated.value = event.target.value
        newdated.valid = this.checkValidity(newdated.value, newdated.validate)
        newdated.touched = true

        updated[event.target.name] = newdated
        this.setState({
            controls: updated,
            empty: false
        })
        console.log(this.state)
    }
    signupHandler=()=>{
        
        
    
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value,this.state.isSignup)
    }
    checkValidity = (value, rules) => {
        let isvalid = true;
        if (rules.required) {
            isvalid = value.trim() !== "" && isvalid;
        }
        if (rules.minlength) {
            isvalid = value.length >= 6 && isvalid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isvalid = pattern.test(value) && isvalid
        }

        return isvalid
    }

    render() {
        const inputclasses = ["login__input"]
        const passwordClasses = ["login__input"]
        if (this.state.controls.email.touched && !this.state.controls.email.valid) {
            inputclasses.push("notvalid")
        }
        if (this.state.controls.password.touched && !this.state.controls.password.valid) {
            passwordClasses.push("notvalid")
        }


        return (
            <div className="back">
            <div className="back2">
            <a className="image__link" href="/"><img src={amam} alt="logo"/></a>
            
                <div className="login" onSubmit={this.submitHandler} >
                    <h1 style={{fontWeight:"normal",margin:"10px"}}>Sign-In</h1>
                    <h4 style={{margin:"10px"}}>Email or mobile phone number</h4>
                    <form className="login__form" onSubmit={this.submitHandler}>
                        <input  onChange={(event) => this.changeHandler(event)}
                            name="email" type="email"
                            className={inputclasses.join(" ")}
                            placeholder="Your E-MAIL" />
                        <input  onChange={(event) => this.changeHandler(event)}
                            name="password" type="password"
                            className={passwordClasses.join(" ")}
                            placeholder="Password" />
                        <button type="submit" className="login__button" disabled={this.state.empty}>Login</button>
                    </form>
                    <p style={{fontWeight:"100",fontSize:"12px",margin:"10px"}}>By continuing, you agree to Amazon's <a href ="/" style={{color:"blue"}}>Conditions of Use</a>and <a href ="/" style={{color:"blue"}}>Privacy Notice.</a></p>
                    <a href ="/" style={{fontWeight:"100",fontSize:"12px",margin:"10px"}} >Need help?</a>
                    
                    {this.props.token ? <Redirect to="/" /> : null}
                    {this.props.error ? <p style={{
                        color: "white",
                        backgroundColor: "#FF3A34",
                        width: "20vw",
                        borderRadius: "15px",
                        // height: "10vh",
                       margin:"auto",
                       textAlign:"center",
                       marginTop:"50px",
                       boxShadow: "5px 5px 5px #FFA9A6",
                       boxSizing: "content-box"
        
                    }}>{this.props.error}</p> : null}
                </div>
               <h6 style={{color:"rgb(219, 218, 218)",alignitem:"center"}}>New To Amazon</h6>
               <button style={{margin:"10px"}} onClick={()=>this.props.history.push("/signup")}>Create your Amazon Account</button>
               <hr/>
               <p style={{fontSize:"12px",margin:"auto"}}>?? 1996-2021, Amazon.com, Inc. or its affiliates</p>
               </div>
            </div>
        )
    }
}
const mapStateToProps = state => {

    return {
        token: state.Login.token,
        error: state.Login.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(action.Auth(email, password, isSignup))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
