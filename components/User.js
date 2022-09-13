import React from 'react'

const User = ({ id, name, email }) => {
    return (
        <div key={id}>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default User