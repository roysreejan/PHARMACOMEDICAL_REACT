import { useNavigate  } from "react-router-dom"
import { useState } from 'react'
import Instance from "./Instance";


const SignOut = () => {
    const navigate  = useNavigate();
    let[token] = useState(localStorage.getItem('token'));

    var obj = {token: token};
    Instance.post("/logout",obj)
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