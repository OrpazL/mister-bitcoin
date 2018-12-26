import React , {Component} from 'react';
import './SignupPage.scss';

import { inject } from 'mobx-react';

@inject('store')
class SignupPage extends Component {

    store = this.props.store;
    userStore = this.store.UserStore;

    user = {
        name: null,
    }

    signUp = (ev) => {
        ev.preventDefault();
        this.userStore.saveUser(this.user);
        this.props.history.push('/');
    }
    
    componentDidMount() {
        if (this.userStore.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <section className="signup-page-container">
                <form onSubmit={this.signUp}>
                    <div>
                        <label>
                            <h3>Please enter your name:</h3>
                            <input type="text" onChange={(ev)=>this.user.name = ev.target.value} />
                        </label>
                    </div>
                    <button>Sign up</button>
                </form>
            </section>
        );
    }
}

export default SignupPage;