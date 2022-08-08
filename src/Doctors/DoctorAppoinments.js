import React , {useState, useEffect} from "react";
import Instance from "../Components/Instance";

const DoctorAppointments = () => {
    const [profile,setProfile]=useState([]);
    let[token] = useState(localStorage.getItem('token'));
    console.log(token);
    useEffect(()=>{
        Instance.post("/doctorFee", {
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
    return ( 
        <div class='container'> 
            <form>
            <div class="form-group p-1" onChange={(e) => setRole(e.target.value)}>
                <label for="patientID">Patient ID</label>
                <select name="patientID" id="patientID">
                    <option value="">Select Patient ID</option>
                    {/* <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="pharmacist">Pharmacist</option> */}
                </select>
            </div>    
                <div class="form-group p-1">
                    <span>
                        <input type="submit" name="submit" value="Submit" class="btn btn-info" />
                    </span>
                </div> 
            </form> 
        </div>     
    );
};
export default DoctorAppointments;