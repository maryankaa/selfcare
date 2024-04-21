import React from "react";
import {NavLink} from "react-router-dom";
import logoImg from './../img/selfcare.svg'

import './header.css';


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <NavLink to='/' className="header__logo">
                        <img src={logoImg} height={100} width={100}/>
                        <span>Selfcare Notes</span>
                    </NavLink>
                    <nav className="header__nav">
                        <h2>
                            <button type="button" className="header__page1">
                                <NavLink exact to='/'>Домашня</NavLink>
                            </button>
                        </h2>
                        <h2>
                            <button type="button" className="header__page2">
                                <NavLink to='/registration'>Запис</NavLink>
                            </button>
                        </h2>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
