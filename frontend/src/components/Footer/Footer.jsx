import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_a} alt="" className='logo' />
                <p className='footer-text'>Thank you for choosing Food Hub! We deliver fresh, delicious meals right to your door. For any questions or assistance, contact our customer support. Follow us on social media for updates and special offers. Bon appétit!</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+256 779 879729</li>
                    <li>contact@foodhub.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">&copy; 2024 Food Hub.com. All Rights Reserved.</p>
    </div>
  )
}

export default Footer