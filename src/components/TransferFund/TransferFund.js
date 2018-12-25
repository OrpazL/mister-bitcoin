import React , {Component} from 'react';
import './TransferFund.scss';
import UserService from '../../services/UserService';

class TransferFund extends Component {
    state = {
        user: UserService.getUser(),
        contact: this.props.contact,
        transferAmount: null,
    }

    render() {
        const {contact , transferAmount} = this.state;
        return (
            <section className="transfer-fund-container">
                <h4>Transfer coins to {contact.name}:</h4>
                <div className="action">
                    Amount: <input type="number" onChange={(ev)=>this.setState({transferAmount: ev.target.value})} />
                    <button disabled={!this.state.transferAmount? true : false} onClick={this.props.transferCoins.bind(this,contact , transferAmount)}>Transfer</button>
                </div>
            </section>
        );
    }
}

export default TransferFund;