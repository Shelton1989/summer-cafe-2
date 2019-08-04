import React, { Component } from 'react';

import {
    Input,
    Button
} from 'semantic-ui-react';

const LoginForm = (props) => {
    const {handleSubmit, handleInput, loading, logo} = props
    return (
        <form className='login-form' onSubmit={handleSubmit} >
            <div className='mx-1 form-logo' style={{backgroundImage: `url(${logo})`}}></div>
            <Input 
                type='text' 
                name='username' 
                iconPosition='left' 
                className='mx-2' 
                fluid 
                icon='user' 
                placeholder='Username' 
                onChange={handleInput}
            ></Input>
            <Input 
                type='password' 
                name='password' 
                iconPosition='left' 
                className='mx-2' 
                fluid 
                icon='lock' 
                placeholder='Password' 
                onChange={handleInput}
            ></Input>
            <Button 
                className='mx-2 login-button' 
                loading={loading} 
                type='submit' 
                color='blue' 
                inverted
            >
                LOGIN
            </Button>
        </form>
    )
}

export default LoginForm