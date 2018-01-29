import React from 'react'

const UsersList = props => (
    <div>
        {
            props.usersData // if this is falsy, it will be returned
            &&
            props.usersData.results.map((user)=> (
                <div key={user.email}>
                    {user.name.first} {user.name.last}
                </div>
            ))
        }
    </div>
)

export default UsersList