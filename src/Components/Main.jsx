import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import About from '../Components/About'
import Shop from './Shop'
import Menu from '../Components/Menu'
import Client from '../Components/Client'
import News from '../Components/News'
import Contact from './Contact'
const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Shop />
            <Menu />
            <Client />
            <Contact />
            <News />
        </div>
    )
}

export default Main;
