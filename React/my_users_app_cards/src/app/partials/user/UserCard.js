import React from 'react';

const UserCard = (props) => {
    const { picture, name, email, dob } = props.myUsers; 
    const date = dob.toDateString().split(" ");
    console.log(props.myUsers);
    

    return (

        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={props.myUsers.picture} />
                    <span className="card-title">{props.myUsers.name}</span>
                </div>
                <div className="card-content">
                    <p>email: {props.myUsers.formatEmail()}</p>
                    <p>date of birth: {`${date[1]} ${date[2]}th ${date[3].slice(2)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;