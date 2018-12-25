import React , {Component} from 'react';
import './SignupPage.scss';

import UserService from '../../services/UserService';

class SignupPage extends Component {

    state = {
        user: {
            name: null,
        }
    }

    signUp = (ev) => {
        ev.preventDefault();
        UserService.saveUser(this.state.user);
        const {history} = this.props;
        history.push('/');
    }

    render() {
        return (
            <section className="signup-page-container">
                <form onSubmit={this.signUp}>
                    <div>
                        <label>
                            <h3>Please enter your name:</h3>
                            <input type="text" onChange={(ev)=>this.setState({user: {...this.state.user , name: ev.target.value}})} />
                        </label>
                    </div>
                    <button>Sign up</button>
                </form>
            </section>
        );
    }
}

export default SignupPage;