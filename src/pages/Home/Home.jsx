import React from 'react'
import './Home.css'
import Icon from '../../assets/images/down-icon.png';
import Img1 from '../../assets/images/feature-1.png';
import Img2 from '../../assets/images/feature-2.png';
import Img3 from '../../assets/images/feature-4.png';
import Img4 from '../../assets/images/feature-3.png';
import Nav from '../../components/Nav/Nav';

const Home = () => {
  return (
    <>
      <div className='header'>
        <Nav/>
        <div className="header-content">
          <h1>Unlimited Shows, TV Programs and more</h1>
          <h3>Watch as much as you want, Cancel at anytime</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form className='email' action="">
            <input type="email" placeholder='email address' />
            <button type='submit' >Get started</button>
          </form>
        </div>
      </div>
      <div className="features">
        <div className="row">
          <div className="text-col">
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="img-col">
            <img src={Img1} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="img-col">
            <img src={Img2} alt="" />
          </div>
          <div className="text-col">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.</p>
          </div>

        </div>

        <div className="row">
          <div className="text-col">
            <h2>Create profiles for children</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them – free with your membership.</p>
          </div>
          <div className="img-col">
            <img src={Img3} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="img-col">
            <img src={Img4} alt="" />
          </div>
          <div className="text-col">
            <h2>Download your programmes to watch offline</h2>
            <p>Watch on a plane, train or submarine...</p>
          </div>

        </div>
      </div>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>

        <ul className="accordion">

          <li>
            <input type="radio"  name='accordion' id='first' />
            <label className='label-option' htmlFor="first">What is Netflix ?</label>
            <div className="content">
              Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!
            </div>
          </li>

          <li>
            <input type="radio" name='accordion' id='second' />
            <label className='label-option' htmlFor="second">Howmuch does netflix cost ? </label>
            <div className="content">
              Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from US$6.99 to US$22.99 a month. No extra costs, no contracts.
            </div>
          </li>

          <li>
            <input type="radio" name='accordion' id='third' />
            <label className='label-option' htmlFor="third">Where can i watch </label>
            <div className="content">
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

              You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </div>
          </li>

        </ul>
        <small>Ready to watch? Enter your email to create or restart your membership.</small>
        <form className='email' action="">
          <input type="email" placeholder='email address' />
          <button type='submit' >Get started</button>
        </form>
      </div>

      <footer>
        <h2>Questions? Contact us.</h2>
        <div className="row">
          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Inventor Relations</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Guarantee</a>
          </div>

          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Inventor Relations</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Guarantee</a>
          </div>

          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Inventor Relations</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Guarantee</a>
          </div>

          <div className="col">
            <a href="#">FAQ</a>
            <a href="#">Inventor Relations</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Guarantee</a>
          </div>
        </div>
        <button className='Language'>English <img src={Icon} alt="" /> </button>
        <p className='txt'>Netflix France</p>
      </footer>

    </>

  )
}

export default Home
