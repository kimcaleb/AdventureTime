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
                    <svg viewBox="0 0 500 500">
                            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />                   
                            <text width="500">
                                <textPath href="#curve">
                                    Adventure Time
                                </textPath>
                            </text>
                    </svg>  
                <h3>Login</h3>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}> 
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
                            <input className="btn" type="submit" id="submitBtnForEditingProfile"/>
                        </form>
                     </div>
                 </div>
        </div>          
        )

    }
}