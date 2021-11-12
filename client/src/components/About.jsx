import React from 'react';
import "./about.css"
import { Image } from 'react-bootstrap';
import banner from '../media/banner.png'

const About = () => {
    return (
        <div className="about">
            <br></br>
            <br></br>
            <br></br>
            <center>
                <Image src={banner} alt="banner" className="about-banner card" />
            </center>
            <br></br>
            <p> Ankan The Print People is engaged in the business of printing since 1983 and delivered our esteemed clients with good quality and prompt services which were and are being highly appreciated since its existance. Our primary goal is to keep ourselves updated to cater the needs of our clients and strive for total customer satisfaction. Now we are extending our services as per the new era of requirements.
            </p>
            <br></br>
            <div className="classdoon">
                <h3 className='display-6'>A Class Doon</h3></div>
            A Class Doon is a Web based Classified where we advertise and promote other businesses through our Portal. We also publish vacancies available in Dehradun along with following other facilities such as
            <ul>
                <li>Logo Designing</li>
                <li>Website Developement</li>
                <li>Website Promotion</li>
                <li>SEO</li>
                <li>Online and Offline Marketing Services</li>
                <li>Lead Generation for Businesses</li>
                <li>Video Advertising and Promotion</li>
            </ul>
            <br></br>
            <p className="disclaimer">Disclaimer</p><p>A Class Doon, is a Digital Advertisement Agency, which collects advertisements and vacancies from business owners, office representatives, and individuals etc. A Class Doon do not create advertisement or vacancy of its own, it is purely provided by the customer,  so A Class Doon do not take onus or any kind responsibility of any false/Manipulated information intentionally/unintentionally in the advertisement/vacancy.
            A Class Doon always take special care to keep website up and fast but if in any case if website is anytime slow or not up, that may be only due to technical reason and not from our side.
            All judicial matter will be subjected to dehradun only.</p>
        </div>
    )
}

export default About
