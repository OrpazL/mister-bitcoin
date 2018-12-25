import React from 'react';
import './ContactFilter.scss';

const ContactFilter = ({setFilter}) => {

    return (
        <input className="contact-filter" placeholder="Search" onInput={setFilter} />
    );
    


}

export default ContactFilter;