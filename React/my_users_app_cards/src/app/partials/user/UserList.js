import React from 'react';
import UserItem from './UserItem';
import UserCard from './UserCard';


const UserList = props => {
    const usersList = props.myUsers;
    return (
        <div className="container">
            <div className="row">
                {usersList.map((user, i) => {
                    return <UserCard myUsers={user} key={i} />
                })}
            </div>
        </div>
    )
}

export default UserList;