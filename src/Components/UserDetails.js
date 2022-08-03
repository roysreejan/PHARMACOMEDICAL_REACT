import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = (props) =>{
    const {userID} = useParams();
    const {name} = useParams();
    const {email} = useParams();
    const {phoneNumber} = useParams();
    const {password} = useParams();
    const {dob} = useParams();
    const {gender} = useParams();
    const {role} = useParams();

    return(
        <div className = 'UserDetails'>
            <h1>This is user Details</h1>
            <br/>
            <p>UserID: {userID}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
            <p>Password: {password}</p>
            <p>Date of Birth: {dob}</p>
            <p>Gender: {gender}</p>
            <p>Role: {role}</p>
        </div>
    );
};
export default UserDetails;