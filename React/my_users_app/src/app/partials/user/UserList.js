import React from 'react';
import UserItem from './UserItem';

const UserList = props => {
    const usersList = props.myUsers;
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <ul className="collection">
                        {usersList.map((user) => {
                            return <UserItem myUsers={user} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserList;