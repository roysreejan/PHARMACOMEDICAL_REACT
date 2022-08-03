import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { userID, name, email, phoneNumber, password, dob, gender, role } = props.users;
    return ( 
        <div className = "UserList" >
            <Link to = { "/userDetails" + "/" + userID +"/" + name + "/" + email  + "/" + phoneNumber  + "/" + password  + "/" + dob + "/"+ gender   + "/" + role  } > <b> Name: { name } </b></Link >
        </div>
    );
};

export default User;