import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]:value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let user = await httpClient.authenticate(this.state, "/api/users/authenticate");
        if (user) {
            this.props.onLoginSuccess();
            this.props.history.push('/profile');
        }
    }


    render(){ 
        let { email, password } = this.state;
        return (
            <div className="hero">
            <div className="login">
                <h1>Adventure Time</h1>
                <h3>Login</h3>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={this.handleSubmit} className="form">
                            <label className="label">Email</label>
                            <input
                            className='input'
                                type="text"
                                name="email"
                                placeholder="john@applseed.com" 
                                onChange={this.handleChange}
                                value={email}
                                />
                            <label className="label">Password</label>
                            <input
                            className='input'
                                type="password"
                                name="password"
                                placeholder="Secret Password..." 
                                onChange={this.handleChange}
                                value={password}
                                />
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>          
        )

    }
}