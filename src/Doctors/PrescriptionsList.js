import React , {useState, useEffect} from "react";
import Instance from "../Components/Instance";

const PrescriptionsList = () => {
    const [profile,setProfile]=useState([]);
    let[token] = useState(localStorage.getItem('token'));
    console.log(token);
    useEffect(()=>{
        Instance.get("/prescriptionsList", {
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
        <div>
            <h1>Prescriptions List</h1>
            <table class = "table table-border">
                <thead>
                <tr>
                    <th>Prescription ID</th>
                    <th>Patient ID</th>
                    <th>Appointment ID</th>
                    <th>Pharmaceutical Item Name</th>
                    <th>Advice</th>
                </tr>
                </thead>
                <tbody>
                    {
                    profile.map(p=>(
                        <tr>
                            <td>{p.prescriptionID}</td>
                            <td>{p.userID}</td>
                            <td>{p.appID}</td>
                            <td>{p.pharmaceuticalItemsName}</td>
                            <td>{p.advice}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};
export default PrescriptionsList;