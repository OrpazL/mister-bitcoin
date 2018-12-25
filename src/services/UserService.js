const USER_STORAGE_KEY = 'user';

function getUser() {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
}

function saveUser(user) {
    user.coins = user.coins || 100;
    user.moves = user.moves || [];
    localStorage.setItem(USER_STORAGE_KEY , JSON.stringify(user));
}

function addMove(contact , amount) {
    const move = _createMove(contact,amount);
    const user = getUser();
    user.moves.push(move);
    user.coins -= amount;
    saveUser(user);

}

export default {
    getUser,
    saveUser,
    addMove,
}

function _createMove(contact, amount) {
    return {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    };
}