import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

import logo from '../assets/images/CompanyLogo.svg'

class LoginView extends Component {
    state = {
        formData: {}
    }

    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let formData = {...this.state.formData}
        formData[name] = value
        this.setState({
            formData: formData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div className='login-view'>
                <div className='login-container'>
                    <div className='login-wrapper p-3'>
                        <LoginForm 
                            handleSubmit={this.handleSubmit} 
                            handleInput={this.handleInput}
                            loading={false}
                            logo={logo}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

export default LoginView