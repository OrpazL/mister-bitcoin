import React, { Component } from 'react';
import './ContactPage.scss';

import ContactService from '../../services/ContactService';

import ContactFilter from '../../components/ContactFilter/ContactFilter';
import ContactPreview from '../../components/ContactPreview/ContactPreview';
import {Link} from 'react-router-dom';

class ContactPage extends Component {

    state = {
        contacts: null,
        contactsForDisplay: null,
    }

    async componentDidMount() {
        await ContactService.getContacts()
            .then(contacts => this.setState({contacts , contactsForDisplay: contacts}))
    }

    setFilter(ev) {
        const filterKey = ev.target.value;
        const contactsForDisplay = this.state.contacts.filter(contact => {
            return contact.name.toUpperCase().includes(filterKey.toUpperCase()) || 
                    contact.phone.includes(filterKey) ||
                    contact.email.toUpperCase().includes(filterKey.toUpperCase());
        });
        this.setState({contactsForDisplay});

    }

    render() {
        const {contacts, contactsForDisplay} = this.state;

        return (
            <section className="contact-page-container">
                <ContactFilter setFilter={this.setFilter.bind(this)} />
                <section className="list-container">        
                    {   
                        contacts &&
                        contactsForDisplay.map(contact=> {
                            return (
                                <li key={contact._id}>
                                    <Link to={`/contact/${contact._id}`}>
                                        <ContactPreview contact={contact} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </section>
                <Link to="/contact/edit" className="add-btn">✚</Link>
            </section>
        );
    }
}

export default ContactPage;