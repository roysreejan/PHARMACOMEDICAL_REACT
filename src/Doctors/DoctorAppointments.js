import React, { useState, useEffect } from "react";
import Instance from "../Components/Instance";

const DoctorAppointments = () => {
    const [patientID,setPatientID]=useState([]);
    let[token] = useState(localStorage.getItem('token'));
    console.log(token);
    useEffect(()=>{
        Instance.get("/doctorAppointments", {
            params: {
                token: token,
            },
            })
        .then(resp=>{
        console.log(resp.data);
        setPatientID(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    return ( 
        <div class='container'> 
            <form>
            <div class="form-group p-1">
                <label for="patientID">Patient ID</label>
                <select name="patientID" id="patientID">
                    <option value="">Select Patient ID</option>
                    <option>
                        {patientID.map(patient=>{
                            return <option value={patient.patientID}>{patient.patientID}</option>
                        })}
                    </option>
                    {/* <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                    <option value="pharmacist">Pharmacist</option> */}
                </select>
            </div>
            <div class="form-group">
                <label for="appointmentStatus">Appointment Status</label>
                <select name="appointmentStatus" id="appointmentStatus">
                    <option value="" selected>Select Patient</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
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