// import React from 'react';
import React , {useState, useEffect} from "react";
// import axios from 'axios';
import Instance from "../Components/Instance";

const DoctorProfile = () => {
    const [profile,setProfile]=useState([]);
    let[token, setToken] = useState(localStorage.getItem('token'));
    console.log(token);
    useEffect(()=>{
        Instance.get("/doctorProfile", {
            params: {
                token: token,
            },
            })
        .then(resp=>{
        console.log(resp.data);
        setProfile(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    const { name, email, phoneNumber, password, password_confirmation, dob, gender } = profile;
    return ( 
        <div id='screen' >
            <div id="screen">
                <table  class="table table-striped">  
                    <tbody className='col-md-1'>
                        <tr>
                        <td scope="row" class="col-1">{name}</td>
                        <td class="col-1">{email}</td>
                        <td class="col-1">{phoneNumber}</td>
                        <td class="col-1">{password}</td>
                        <td class="col-1">{password_confirmation}</td>
                        <td class="col-1">{dob}</td>
                        <td class="col-1">{gender}</td>
                        </tr>      
                    </tbody>
                </table>
            </div>
        </div>   
    );
};

export default DoctorProfile;