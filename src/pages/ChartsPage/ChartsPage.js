import React , {Component} from 'react';
import './ChartsPage.scss';

import { Sparklines ,SparklinesLine  } from 'react-sparklines';
import BitcoinService from '../../services/BitcoinService';

class ChartsPage extends Component {

    state = {
        updateInterval: null,
        marketPlaceRates: [],
        confirmedTransactionsRates: []
    }

    componentDidMount() {
        this.loadCharts();
        this.setState({updateInterval: setInterval(this.loadCharts, 5000)});
    }

    async loadCharts() {
        await BitcoinService.getChartMarketPlace()
            .then(rates=>{
                if (!this.state) return;
                const values = rates.values.map(val=>val.y);
                this.setState({marketPlaceRates: values});
            });
        await BitcoinService.getChartConfirmedTransactions()
            .then(rates => {
                if (!this.state) return;
                const values = rates.values.map(val=>val.y);
                this.setState({confirmedTransactionsRates: values});
            });
    }

    componentWillUnmount() {
        clearInterval(this.state.updateInterval);
    }

    render() {
        return (
            <section className="charts-page-container">
                <h1>Market Places Rates</h1>
                <div className="chart">
                    <Sparklines data={this.state.marketPlaceRates}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </div>
                <h1>Confirmed Transactions Rates</h1>
                <div className="chart">
                    <Sparklines data={this.state.confirmedTransactionsRates}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </div>
            </section>
        );
    }
}

export default ChartsPage;