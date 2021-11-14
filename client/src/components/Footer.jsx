import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import{faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
        <div class='footer'>
            Developed with <FontAwesomeIcon icon={faHeart} color='red'/> by <a href='https://webminix.com/' target="_blank" rel="noreferrer" className="f-link">WEBMINIX</a>
            <br></br>
            <a href='https://www.youtube.com/channel/UCV8ubr8XAVyWf1atgIjHcVQ' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}color='#FF0000' className="f-icon" size="2x"/></a>
            <a href='https://www.facebook.com/profile.php?id=100073823013463' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}color='#1877F2' className="f-icon" size="2x"/></a>
            <a href='https://www.instagram.com/aclassdoon/?hl=en' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}color='#C13584' className="f-icon" size="2x"/></a>
            <a href='https://twitter.com/ACLASSDOON' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}color='#1DA1F2' className="f-icon" size="2x"/></a>
        </div>
    )
}

export default Footer
