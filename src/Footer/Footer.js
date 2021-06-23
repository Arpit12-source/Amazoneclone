import React from 'react'
import "./Footer.css";
import ScrollToTop from '../UI/ScrollToTop/ScrollToTop';
const Footer = () => {
    return (
        <div className="block">
        <ScrollToTop />
        
        <div className="secondblock">
            
            <div className="secondblock__sub">
                <h3>Get To know us</h3>
                <ul>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">About Amazon</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Amazon Devices</a></li>
                    
                </ul>
            </div>
            <div className="secondblock__sub" >
                <h3>Make Money with Us</h3>
                <ul>
                    <li><a href="/">Sell products on Amazon</a></li>
                    <li><a href="/">Sell on Amazon Business</a></li>
                    <li><a href="/">Sell apps on Amazon</a></li>
                    <li><a href="/">Become an Affiliate</a></li>
                    <li><a href="/">Advertise Your Products</a></li>
                    <li><a href="/"> Self-Publish with Us</a></li>
                    <li><a href="/"> Host an Amazon Hub</a></li>
                    <li><a href="/"> See More Make Money with Us</a></li>
                    
                </ul>
            </div>
            <div className="secondblock__sub">
                <h3>  Amazon Payment Products</h3>
                <ul>
                    <li><a href="/"> Amazon Business Card</a></li>
                    <li><a href="/"> Shop with Points</a></li>	
                   <li><a href="/">Reload Your Balance</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Amazon Currency Converter</a></li>
                    
                </ul>
            </div>
            <div className="secondblock__sub">
                <h3>Let Us Help You</h3>	
                
                <ul>
                    <li><a href="/">Amazon and COVID-19</a></li>
                    <li><a href="/">Your Orders</a></li>
                    <li><a href="/">Shipping Rates & Policies</a></li>
                    <li><a href="/">Manage Your Content and Devices</a></li>
                    <li><a href="/">Amazon Assistant</a></li>
                    <li><a href="/">Help</a></li>
                    
                </ul>
            </div>
            
            
        </div>
        </div>
    )
}

export default Footer;