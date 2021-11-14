import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import{faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
        <div class='footer'>
            <hr></hr>
            <p><FontAwesomeIcon/></p>
            Developed with <FontAwesomeIcon icon={faHeart} color='red'/> by <a href='https://webminix.com/' target="_blank" rel="noreferrer" className="f-link">WEBMINIX</a>
            <br></br>
            <FontAwesomeIcon icon={faYoutube}color='#FF0000'/> <a href='https://www.youtube.com/channel/UCV8ubr8XAVyWf1atgIjHcVQ' target="_blank" rel="noreferrer" className="f-link">Youtube</a>
            <FontAwesomeIcon icon={faFacebook}color='#1877F2'/> <a href='https://www.facebook.com/profile.php?id=100073823013463' target="_blank" rel="noreferrer" className="f-link">Facebook</a>
            <FontAwesomeIcon icon={faInstagram}color='#C13584'/> <a href='https://www.instagram.com/aclassdoon/?hl=en' target="_blank" rel="noreferrer" className="f-link">Instagram</a>
            <FontAwesomeIcon icon={faTwitter}color='#1DA1F2'/> <a href='https://twitter.com/ACLASSDOON' target="_blank" rel="noreferrer" className="f-link">Youtube</a>
        </div>
    )
}

export default Footer
