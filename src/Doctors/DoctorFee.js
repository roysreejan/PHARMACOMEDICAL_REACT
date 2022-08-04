import React , {useState, useEffect} from "react";
import Instance from "../Components/Instance";


const DoctorFee = () => {
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
                <div class="form-group">
                    <label for="doctor_fee">Doctor Fee</label>
                    <input type="text" class="form-control" id="doctor_fee" name="doctor_fee" placeholder="Enter Doctor Fee" />
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
export default DoctorFee;