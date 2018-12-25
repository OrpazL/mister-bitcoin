import React from 'react';
import './ContactPreview.scss';
import meeseeks from '../../assets/img/meeseeks.png';
const ContactPreview = ({contact}) => {
    
    return (
        <div className="contact-preview-container">
            <img src={meeseeks} alt="contact"/>
            <div className="contact-content">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-phone">{contact.phone}</div>
            </div>
        </div>
    );

}

export default ContactPreview;
