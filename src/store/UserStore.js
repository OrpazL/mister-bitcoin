import UserService from '../services/UserService';
import { observable, action } from 'mobx';

export default class UserStore {
    @observable 
    user = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.loudUser();
    }

    @action	
    loudUser() {
        this.user = UserService.getUser();
    }

    @action
    saveUser(user) {
        UserService.saveUser(user);
    }
}