const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUserData = data => ({
    type: SET_USERS_DATA,
    data
})

export const fetchUsersData = (x) => (dispatch, getState) => {
    fetch(`https://randomuser.me/api/?results=${x}`)
        .then(response => response.json())
        .then(data => dispatch(setUserData(data))) //when data arrives, sync (normal) action is dispatched
}

const initialState = {
    usersData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: action.data
            }

        default:
            return state
    }
}