import React, { useState, useEffect } from "react";
import Instance from "../Components/Instance";

const DoctorAppointments = () => {
    const [appID1,setappID]=useState([]);
    let[token] = useState(localStorage.getItem('token'));
    const [appID, setPatientID]=useState();
    const [appointmentStatus, setAppointmentS]=useState();
    console.log(appID, appointmentStatus);

    console.log(token);
    useEffect(()=>{
        Instance.get("/doctorAppointments", {
            params: {
                token: token,
            },
            })
        .then(resp=>{
        console.log(resp.data);
        setappID(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
    return ( 
        <div class='container'>
            <form>
            <div class="form-group p-1">
                <label for="appID">Patient ID</label>
                <select onChange={(e)=>setPatientID(e.target.value)}>
                    <option value="">Select Patient ID</option>
                        {appID1.map(app=>{
                            return <option value={app.appID}>({app.appID}) {app.name}</option>
                        })}
                </select>
            </div>
            <div class="form-group">
                <label for="appointmentStatus">Appointment Status</label>
                <select onChange={(e)=>setAppointmentS(e.target.value)}>
                    <option value="" selected>Select Patient</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                </select>
            </div>    
                <div class="form-group p-1">
                    <button onClick={()=>{
                            Instance.post("/doctorAppointments", {
                                params: {
                                    token: token,
                                    appID: appID,
                                    appointmentStatus: appointmentStatus,
                                },
                                })
                            .then(resp=>{
                            console.log(resp.data);
                            console.log('yes');
                            //
                             }).catch(err=>{
                            console.log(err);
                            console.log('no');
                        });
                        }
                    } class="btn btn-primary">Submit</button>
                </div> 
            </form> 
        </div>     
    );
};
export default DoctorAppointments;