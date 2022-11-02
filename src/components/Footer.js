import "./FooterStyles.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaFacebook, FaGit,  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />
                <div>
                <p>Balirajpur Babhantoli Babubarhi </p>
                <p>Madhubani Bihar INDIA</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />
            +91 8287061760</h4>
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />
            mvpsaurav@gmail.com</h4>
            </div>

            </div>
            <div className="right">
                <h4>
                    Auout The Webside
                </h4>
                <p>This webside is created by ER Saurav Kumar mishra using react</p>

                <div className="Social">
                    <a href="https://www.instagram.com/the.sauravmishra/">
                <FaInstagram  size={30} style={{color:"#fff", marginRight:"1rem" }} />
                </a>

                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem" }} />
               
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem" }} />

                <a href="https://github.com/mvpsaurav">
                <FaGit size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </a>
                </div>

            </div>
        </div>

    </div>
  )
}


export default Footer