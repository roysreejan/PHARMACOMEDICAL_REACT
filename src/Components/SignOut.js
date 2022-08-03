import React from 'react'
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import { useState } from 'react'


const SignOut = () => {
    const navigate  = useNavigate();
    let[token, setToken] = useState(localStorage.getItem('token'));

    var obj = {token: token};
    axios.post("http://127.0.0.1:8000/api/logout",obj)
    .then(resp=>{
        var data = resp.data;
        localStorage.removeItem('token');
        console.log(data);
        navigate('/login');
    }).catch(err=>{
        console.log(err);
    });
}
export default SignOut