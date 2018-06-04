import React from 'react';

const UserItem = props => {
    const {picture, name, email, dob} = props.myUsers;
    return (
        <li className="collection-item avatar">
            <img src={picture.medium} alt="" className="circle" />
            <span className="title">name: {name.first}</span>
            <p>
                email: {email}
            </p>
            <p>
                date of birth: {dob}
            </p>
        </li>
    )
}

export default UserItem;