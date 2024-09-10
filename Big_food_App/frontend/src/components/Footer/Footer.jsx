import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <img className='loog' src={assets.logo} alt="" />
            <p>It is a Company Owned by a FAMILY,
                so you get a hand on HOME like 
                expierence.
            </p>
            <div className="footer-social-icon">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
               </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="Twitter" />
                   </a>
                   <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                     <img src={assets.linkedin_icon} alt="LinkedIn" />
                       </a>
            </div>
        </div>
        <div className="footer-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>        
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 3165845648</li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" > <li>hello@gmail.com</li> </a>
            </ul>
        </div>

      </div>
      <hr />
      <p className='footer-copyright'>
      Copyright 2024. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
