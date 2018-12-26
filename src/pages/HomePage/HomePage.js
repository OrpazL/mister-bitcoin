import React, { Component } from 'react';
import './HomePage.scss';
import { observer, inject } from 'mobx-react';

import BitcoinService from '../../services/BitcoinService.js';
import MovesList from '../../components/MovesList/MovesList';
import { observable } from 'mobx';

@inject('store')
@observer
class HomePage extends Component {
    
    store = this.props.store;
    userStore = this.store.UserStore;

    @observable
    user = this.userStore.user;

    @observable
    coinsInBTC = 0;

    async componentDidMount() {
        const rate = await BitcoinService.getBitcoinRate()
        this.coinsInBTC = this.user.coins * rate;
    }

    render() {
        const {user , coinsInBTC} = this;
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
