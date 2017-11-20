import { findMatchingUser } from '../users';

export function login(username, password) {
    return function(dispatch) {
        const user = findMatchingUser(username, password);
        // If it username/password are correct, a user object will be available
        if (user) {
            dispatch(setUser(user));
        } else {
        	dispatch(loginFailed(user));
        }
    };
}

function setUser(user) {
    return {
        type: "LOGIN_SUCCESS",
        user
    };
}


function loginFailed(user) {
    return {
    	type: "LOGIN_FAILED",
        user
    };
}