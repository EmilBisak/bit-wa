import React from 'react';
import UserData from '../data/data';
import  {User}  from '../entities/User'

const getUsers = () => {
    return UserData.map(user => {
        return new User(user.picture.large, user.name.first, user.email, user.dob)
    })
}


export { getUsers };


