import React, { Component } from 'react';
import './HomePage.scss';

import BitcoinService from '../../services/BitcoinService.js';
import MovesList from '../../components/MovesList/MovesList';
class HomePage extends Component {

    state = {
        user: {},
        coinsInBTC: 0,
    }

    async componentDidMount() {
        this.setState({user: this.props.user});
        await BitcoinService.getBitcoinRate()
            .then(rate => {
                this.setState({coinsInBTC: (this.state.user.coins || 0) * rate})
            });
    }

    render() {
        const {user , coinsInBTC} = this.state;
        return (
            <section className="home-page-container">
                <h1>Hello {user.name}</h1>
                <div>Coins: {user.coins}</div>
                <div>BTC: {coinsInBTC}</div>
                <MovesList/>
            </section>
        );
    }
}

export default HomePage;
