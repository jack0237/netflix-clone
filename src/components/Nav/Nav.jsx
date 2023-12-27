import React from 'react'
import Logo from '../../assets/images/logo.png';
import Icon from '../../assets/images/down-icon.png';
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Netflix logo" className='logo' />
            <div>
                <button className='Language'>English <img src={Icon} alt="" /> </button>
                <Link to="/Login" >
                    <button>Sign in</button>
                </Link>

            </div>
        </nav>
    )
}

export default Nav
