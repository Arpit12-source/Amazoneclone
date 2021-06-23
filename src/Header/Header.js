import React from 'react';
import "./Header.css"

import image from './amazonlogo.png';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        basket: [],
        search: ''
    }
    // componentDidMount(){
    //     const datafromHome=[]
    //     this.props.doc.map(res=>datafromHome.push(res))

    //     this.setState({basket:datafromHome})
    // }
    searchHandler = (event) => {

        this.setState({ search: event.target.value })
    }
    render() {
        //     console.log(this.props.doc)
        //  console.log(this.state.basket)
        return (
            <nav className="header">
                <Link to="/">
                    <img className="header__logo" src={image} alt="logo" />
                </Link>
                <div className="dropdown">
                <button className="dropbtn">ALL</button>
                <div className="dropdown-content">
                    <a href="/">Mens wear</a>
                    <a href="/">Womens wear</a>
                    <a href="/">Kids wear</a>
                    <a href="/">Electronics</a>
                    <a href="/">Grocery</a>
                    <a href="/">Service</a>
                </div>
            </div>
                <div className="header__search">
              
                    <input className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" onChange={this.searchHandler} />
                </div>
               

                <div className="header__nav">
                    {this.props.token ? <Link to="/logout" className="header__link">
                        <div className="header__options">
                            <span className="header__optionsLineone">Hello arpit</span>
                            <span className="header__optionsLinetwo">logout</span>
                        </div>
                    </Link> : <Link to="/login" className="header__link">
                        <div className="header__options">
                            <span className="header__optionsLineone">Hello arpit </span>
                            <span className="header__optionsLinetwo">Sign In</span>
                        </div>
                    </Link>

                    }


                    <Link to="/order" className="header__link">
                        <div className="header__options">
                            <span className="header__optionsLineone">Returns</span>
                            <span className="header__optionsLinetwo">& orders</span>
                        </div>
                    </Link>


                    <Link to="/" className="header__link">
                        <div className="header__options">
                            <span className="header__optionsLineone">Your</span>
                            <span className="header__optionsLinetwo">Prime</span>
                        </div>
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__basket">
                            <ShoppingBasketIcon />
                            <span className="header__optionsLinetwo header__basketcount">{this.props.basket.length}</span>
                        </div>
                    </Link>

                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        basket: state.product.basket,
        token: state.Login.token
    }
}
export default connect(mapStateToProps)(Header);
