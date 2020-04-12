import React from 'react'

import "./styles/social.css"
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";

class Social extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-around">
        <a className="social_icons" href="https://www.linkedin.com/in/alirio-diaz-298314b8/" target="_blank">
          <FaLinkedin size={32}/>
        </a>
        <a className="social_icons" href="https://twitter.com/AlirioDS" target="_blank" >
          <FaTwitterSquare size={32}/>
        </a>
        <a className="social_icons" href="https://github.com/aliriods" target="_blank" >
          <FaGithubSquare size={32}/>
        </a>
        <a className="social_icons" href="https://www.instagram.com/aliriods/" target="_blank" >
          <FaInstagram size={32}/>
        </a>
      </div>
    )
  }
}

export default Social
