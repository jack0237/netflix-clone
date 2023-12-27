import React from 'react'
import './Login.css'

import Nav from '../../components/Nav/Nav';

const Login = () => {
  return (
    <>
      <div className='header'>
        <Nav />
        <div className="form-wrap">
          <h2>Sign In</h2>
          <form className='form' action="#">
            <div className="form-control">
              <input type="text" required />
              <label >Email or phone number</label>
            </div>
            <div className="form-control">
              <input type="password" required/>
              <label >Password</label>
            </div>
            <button type='submit' >Sign in</button>
            <div className="form-helper">
              <div className="remember">
                <input type="checkbox" id='remember' />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#">Need help ?</a>
            </div>
          </form>
          <p>New to Netflix ? <a href="#">Sign up now</a> </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#">Learn more.</a>
          </small>
        </div>
      </div>
    </>
  )
}

export default Login
