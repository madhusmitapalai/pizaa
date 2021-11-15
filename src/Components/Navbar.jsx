import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand menu_active" to="/"><img className='logo' src={logo} alt='logo' /></NavLink>
                    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <NavLink className="menu_active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menu_active " to="/menu">menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menu_active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menu_active " to="/shop">shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menu_active " to="/news">news</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menu_active " to="/contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;


