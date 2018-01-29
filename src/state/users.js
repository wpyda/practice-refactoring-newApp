const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUserData = data => ({
    type: SET_USERS_DATA,
    data
})

const fetchUsersData = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json)
        .then(data => dispatch(setUserData(data))) //when data arrives, sync (normal) action is dispatched
}

const initialState = {
    usersData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}