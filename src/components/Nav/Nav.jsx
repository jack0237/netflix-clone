import React from 'react'
import Logo from '../../assets/images/logo.png';
import Icon from '../../assets/images/down-icon.png';

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Netflix logo" className='logo' />
            <div>
                <button className='Language'>English <img src={Icon} alt="" /> </button>
                <button>Sign in</button>
            </div>
        </nav>
    )
}

export default Nav
