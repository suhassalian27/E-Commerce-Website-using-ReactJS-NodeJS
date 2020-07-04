import React from "react";
import "./App.css";
import data from "./data";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import {BrowserRouter, Route, Link} from "react-router-dom"

function App() {
    const openmenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    };
    const closemenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    };
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openmenu}>&#9776;</button>
                        <Link to='/'>amazon</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">SignIn</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button
                        className="sidebar-close-button"
                        onClick={closemenu}
                    >
                        x
                    </button>
                    <ul>
                        <li>
                            <a href="index.html">Pants</a>
                        </li>
                        <li>
                            <a href="index.html">Shirts</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/" exact={true} component={HomeScreen}/>
                        
                    </div>
                </main>
                <footer className="footer">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
