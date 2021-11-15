import React from 'react'
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About';
//import Navbar from './pages/pizzaN/Navbar';
import Shop from './Components/Shop';
import News from './Components/News';
import Contact from './Components/Contact';
import './index.scss'
import Main from './Components/Main';
//import Client from './pages/pizzaN/Client';
const App = () => {
    return (
        <>
            <Main/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/about" component={About} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/news" component={News} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </>
    )
}
export default App;