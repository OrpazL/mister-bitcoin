import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ContactDetailsPage.scss';
import img from '../../assets/img/meeseeks.png';

import ContactService from '../../services/ContactService';

import TransferFund from '../../components/TransferFund/TransferFund';
import MovesList from '../../components/MovesList/MovesList';
import UserService from '../../services/UserService';

class ContactDetails extends Component {

    state = {
        contact: null,
    }

    async componentDidMount() {
        const {contactId} = this.props.match.params;
        await ContactService.getContactById(contactId)
            .then(contact => this.setState({contact}))
    }

    deleteContact = () => {
        const {contact} = this.state;
        ContactService.deleteContact(contact._id)
            .then(() => {
                const {history} = this.props;
                history.go(-1);
            });
    }

    transferCoins = (contact, transferAmount) => {
        // const {contact , transferAmount} = this.state;
        UserService.addMove(contact, transferAmount);
    }

    render() {

        const {contact} = this.state;

        return contact && (
            <section className="contact-details-container">
                <section className="contact-data">
                    <img src={img} alt="contact"/>
                    <div className="contact-content">
                        <div className="contact-name">{contact.name}</div>
                        <div className="contact-phone">{contact.phone}</div>
                        <div className="contact-email">{contact.email}</div>
                        <div className="contact-id">{contact._id}</div>
                    </div>
                </section>
                <div className="contact-actions">
                    <button>
                        <Link to={`/contact/edit/${contact._id}`}>✎</Link>
                    </button>
                    <button onClick={this.deleteContact}>✘</button>
                </div>
                <br/>
                <TransferFund contact={contact} transferCoins={this.transferCoins} />
                <MovesList contactId={contact._id}/>
            </section>
        );
    }
}

export default ContactDetails;