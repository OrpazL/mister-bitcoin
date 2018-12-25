import React , {Component} from 'react';
import './MovesList.scss';

import UserService from '../../services/UserService';
const moment = require('moment');

class MovesList extends Component {
    state = {
        user: UserService.getUser(),
    }

    componentDidMount() {
        this.moveSort();
    }

    moveSort() {
        const {moves} = this.state.user;
        const {contactId} = this.props;
        
        var movesToDisplay = moves.filter(move => contactId?(move.toId === contactId):true).map(move=> {
            return (
                <div key={move.at} className="move-item">
                    {!contactId && <div><span>To:</span> {move.to}</div>}
                    <div><span>At:</span> {moment(move.at).format('llll')}</div>
                    <div><span>Amount:</span> {move.amount}</div>    
                </div>
            );
        })
        if (!contactId) {
            return [movesToDisplay[movesToDisplay.length-1],
                    movesToDisplay[movesToDisplay.length-2],
                    movesToDisplay[movesToDisplay.length-3]]
        } else {
            return movesToDisplay;
        }
    }
    
    
    render() {
        const {contactId} = this.props;
        
        
        return (
            <section className="moves-list-container">
            <h4>{contactId? 'Your Moves:' : 'Your Last 3 Moves:'}</h4>
            { this.moveSort() }
            </section>
        );
    }
}

export default MovesList;