import React from 'react'
import './Nav.css'
import Logo from '../../assets/images/logo.png';
import Icon from '../../assets/images/down-icon.png';
import { Outlet, Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const Nav = () => {
    let navigate = useNavigate();
    return (
        <nav>
                <  img src={Logo} alt="Netflix logo" className='logo' onClick={() => navigate(-1)} />

            <div>
                {/* <button className='Language'>English <img src={Icon} alt="" /> </button> */}
                <Link to="/Login" >
                    <button>Sign in</button>
                </Link>

            </div>
        </nav>
    )
}

export default Nav
