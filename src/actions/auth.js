import axios from '../api/axios';

// Authentication constants

export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// Authentication actions

export const login = (payload, route) => {
    return dispatch => {
        dispatch(loading());
        axios.post('api/login', payload)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch(login_success())
            setTimeout(()=>{
                route.history.push('/dashboard')
            }, 300)
        })
        .catch(err => {
            dispatch(login_failed(err))
        })
    }
}

export const logout = (route) => {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch(login_failed())
        route.history.push('/login')
    }
}

// Authentication dispatch

const loading = () => {
    return {
        type: ATTEMPT_LOGIN,
        payload: true,
    }
}

const login_success = () => {
    return {
        type: LOGIN_SUCCESS,
        payload: true
    }
}

const login_failed = (err) => {
    return {
        type: LOGIN_FAILED,
        payload: err
    }
}