import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => (
        this.setState({ clicked: !this.state.clicked })
    )

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className="navbar-logo">HIDE <i className='fa-solid fa-binoculars'></i></h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar