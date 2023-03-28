import { combineReducers } from "redux";

const initialState = {
    users: []
}
const setUsersReducer = (state = initialState, action) => {
    if (action.type === 'SET_USERS') {
        return {
            ...state,
            users: action.payload
        }
    }

    return state;
}

const getUsersReducer = (state = initialState, users) => {
    return state.users;
}


const rootReducers = combineReducers({
    users: setUsersReducer,
});

export default rootReducers;
