import axios from 'axios';
import React from 'react'
import { Component } from 'react';
import image from "./amazonbanner.png";
import "./Home.css";
import Product from "./Product";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';


class Home extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(resp => {
                console.log(resp)
                const final = []
                resp.data.map(res => final.push(res))
                this.setState({ products: final })
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.products)
        const car = this.state.products.map(resp => <Product key={resp.id} title={resp.title}
            price={resp.price}
            image={resp.image}
            rating={5} />)
        return (
            <div>
            <Header doc={this.state.products}/>
            <div className="home">

                <img className="home__image" src={image} alt="amazon" />
                <div className="home__row">
                    {car}

                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Home;