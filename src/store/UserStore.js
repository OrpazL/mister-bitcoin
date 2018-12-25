import UserService from '../services/UserService';
import { observable, action , computed } from 'mobx';

export default class UserStore {
    @observable
    user = {};

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action	
    loudUser() {
        this.user = UserService.getUser();
    }
}