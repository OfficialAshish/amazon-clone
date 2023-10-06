import React from "react";
import logoNav from '../media_db/images/amazon_logo.png';
export default function Navbar() {
    return (
        <header>
            <div className="navbar ">
                <div className="nav-logo" style={{
                    backgroundImage: `url(${logoNav})`,
                    backgroundSize: 'cover',

                }}>
                </div>
                <div className="nav-address">
                    <p className="add-up">Deliver to</p>
                    <div className="add-logo">
                        <i className="fa-solid fa-location-dot" style={{ display: 'inline' }}></i>
                        <span className="add-down">India</span>
                    </div>
                </div>
                <div className="nav-search-box">
                    <select className="search-select">
                        <option>All</option>
                    </select>
                    <div className="search-box">
                        <input className="search-input" placeholder="Search Amazon"></input>
                    </div>
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="nav-signin borderN">
                    <p><span className="small">Hello Signin</span></p>
                    <p className="nav-dropdown">Account & List</p>
                </div>
                <div className="nav-order borderN">
                    <p><span className="small">Returns</span></p>
                    <p className="nav-dropdown">& Order </p>
                </div>
                <div className="nav-cart borderN">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div className="nav-dropdown">Cart</div>
                </div>
            </div>
            <div className="panel">
                <div className="panel-menu">
                    <i className="fa-solid fa-bars"></i>
                    All
                </div>
                <div className="panel-options">
                    <ul>
                        <a href="#">Today's Deals</a>
                        <a href="#">Customer Service</a>
                        <a href="#">Registry</a>
                        <a href="#">Gift Cards</a>
                        <a href="#">Sell</a>
                    </ul>
                </div>
                <div className="panel-deals">
                    <p>Shop Great deals now</p>
                </div>
            </div>
        </header >
    )
}