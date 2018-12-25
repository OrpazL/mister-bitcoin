

function getBitcoinRate() {
    return fetch('https://blockchain.info/tobtc?currency=USD&value=1')
        .then(res=>res.json());
}

function getChartMarketPlace() {
    return fetch('https://api.blockchain.info/charts/market-price?&format=json&cors=true')
        .then(res => res.json());
}
function getChartConfirmedTransactions() {
    return fetch('https://api.blockchain.info/charts/median-confirmation-time?format=json&cors=true')
        .then(res => res.json());
}

export default {
    getBitcoinRate,
    getChartMarketPlace,
    getChartConfirmedTransactions,
}