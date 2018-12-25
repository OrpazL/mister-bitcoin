import React, {Component} from 'react';
import './ContactEdit.scss';
import ContactService from '../../services/ContactService';
import img from '../../assets/img/meeseeks.png';

class ContactEdit extends Component {

    state = {
        contact: {},
    }

    async componentDidMount() {
        const {contactId} =  this.props.match.params;
        await ContactService.getContactById(contactId)
            .then(contact => (contact)? this.setState({contact}) : '')
            .catch(err => console.log('New Contact'));
    }

    saveContact = (ev) => {
        ev.preventDefault();
        const {contact} = this.state;
        ContactService.saveContact(contact);
        const {history} = this.props;
        history.go(-1);
    }

    render() {

        const {contact} = this.state;


        return contact && (
            <section className="contact-edit-container">
                <img src={img} alt="contact"/>
                <form onSubmit={this.saveContact}>
                    <div>
                        <label>
                            <span>Name:</span>
                            <input value={contact.name || ''} type="text" onChange={(ev)=>this.setState({contact: {...contact , name: ev.target.value}})} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Phone:</span>
                            <input value={contact.phone || ''} type="text" onChange={(ev)=>this.setState({contact: {...contact , phone: ev.target.value}})} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Email:</span>
                            <input value={contact.email || ''} type="email" onChange={(ev)=>this.setState({contact: {...contact , email: ev.target.value}})} />
                        </label>
                    </div>
                    <div className="btn-container">
                        <button>Save</button>
                    </div>
                </form>
            </section>
        );
    }

}

export default ContactEdit;