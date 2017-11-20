const INITIAL_STATE = {
  loggedInUser: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

    	case "LOGIN_SUCCESS":
    		return Object.assign({}, state, {
                loggedInUser: action.user
            });

        case "LOGIN_FAILED":
    		return Object.assign({}, state, {
                loggedInUser: null
            });

      	default:
        	return state;
    }
}