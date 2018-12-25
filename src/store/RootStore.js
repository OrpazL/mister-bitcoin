import UserStore from './UserStore';

export default class RootStore {
    constructor() {
        this.UserStore = new UserStore(this);
    }
}