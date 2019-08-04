
// Actions
import {
    ATTEMPT_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/auth'

const defaultState = {
    authenticated: false,
    username: '',
    loading: false,
    error: ''
}

const auth = (state=defaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case ATTEMPT_LOGIN:
            return {
                ...state,
                loading: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                authenticated: payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                authenticated: false,
                error: payload
            }
        default:
            return state
    }
}

export default auth;