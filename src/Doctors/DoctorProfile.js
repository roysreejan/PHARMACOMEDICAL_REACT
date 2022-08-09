import React , {useState, useEffect} from "react";
import Instance from "../Components/Instance";
import Popup from 'reactjs-popup';

const DoctorProfile = () => {
    const [profile,setProfile]=useState([]);
    let[token] = useState(localStorage.getItem('token'));
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
    const [dname,setDName]=useState();
    const [demail,setDEmail]=useState();
    const [dphoneNumber,setDPhoneNumber]=useState();
    const [dpassword,setDPassword]=useState();
    const [dpassword_confirmation,setDPassword_confirmation]=useState();
    const [ddob,setDDob]=useState();
    const [dgender,setDGender]=useState();
    const [selected, setSelected] = useState('yes');
    const [updatedMsg, setUpdatedMsg] = useState();
    useEffect(()=>{
        setDName(name);
        setDEmail(email);
        setDPhoneNumber(phoneNumber);
        setDPassword(password);
        setDPassword_confirmation(password_confirmation);
        setDDob(dob);
        setDGender(gender);
    } , [name,email,phoneNumber,password,password_confirmation,dob,gender]);
    return ( 
        <div class="container" style={{width: "500px"}}>  
        <h2>Profile</h2> 
           <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" value={dname} onChange={(e)=>setDName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" value={demail} onChange={(e)=>setDEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input type="text" class="form-control" value={dphoneNumber} onChange={(e)=>setDPhoneNumber(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" value={dpassword} onChange={(e)=>setDPassword(e.target.value)}/>
            </div>
            {/* <div class="form-group">
                <label for="password_confirmation">Password Confirmation</label>
                <input type="text" value={dpassword_confirmation} onChange={(e)=>setDPassword_confirmation(e.target.value)}/>
            </div> */}
            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="text" class="form-control" value={ddob} onChange={(e)=>setDDob(e.target.value)}/>
            </div>
            {/* <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" class="form-control" value={dgender} onChange={(e)=>setDGender(e.target.value)}/>
            </div> */}
            <div class="form-group p-1" onChange={(e)=>setDGender(e.target.value)}>
                <label for="gender">Gender</label>
                <input type="radio" name="gender" value={dgender} />Male 
                <input type="radio" name="gender" value={dgender} />Female
                <input type="radio" name="gender" value={dgender} />Other
            </div>
            <div class="form-group p-1">
                <button onClick={()=>{
                    Instance.post("/doctorProfile", {
                        token: token,
                        name: dname,
                        email: demail,
                        phoneNumber: dphoneNumber,
                        password: dpassword,
                        // password_confirmation: dpassword_confirmation,
                        dob: ddob,
                        gender: dgender
                    })
                    .then(resp=>{
                        setUpdatedMsg('Profile Updated');
                        console.log(resp.data);
                    }).catch(err=>{
                        console.log(err);
                    }
                )}} class="btn btn-info">Update</button> &emsp; <span class="text-success fw-bold">{updatedMsg ? 'Profile Updated' : ''}</span>
             </div>   
        </div>
    );
};

export default DoctorProfile;