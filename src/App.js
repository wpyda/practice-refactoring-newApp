import React from 'react'

import {connect} from 'react-redux'

const App = (props) => (
    <div>
        {
            props.usersData // if this is falsy, it will be returned
            &&
            props.usersData.map((user)=> (
                <div>user</div>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData.results
})


export default connect(
    mapStateToProps
)(App)
