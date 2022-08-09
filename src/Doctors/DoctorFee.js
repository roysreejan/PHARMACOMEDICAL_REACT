import React , {useState, useEffect} from "react";
import Instance from "../Components/Instance";


const DoctorFee = () => {
    const [dfee,setDFee]=useState('0');
    let[token] = useState(localStorage.getItem('token'));
    console.log(token, dfee);
    // console.log(token);
    useEffect(()=>{
        console.log(token, dfee);
    },[token, dfee]);
    return ( 
        <div class='container'> 
            <form>
                <div class="form-group">
                    <input type="text" value={dfee} onChange={(e)=>setDFee(e.target.value)}/>
                </div>
                <div class="form-group p-1">
                    <button  onClick={()=>{
                        Instance.post("/doctorFee", {
                            params: {
                                token: token,
                                fee: dfee,
                            },
                            })
                        .then(resp=>{
                        console.log(resp.data);
                        //
                         }).catch(err=>{
                        console.log(err);
                    });
                    }} class="btn btn-primary">Submit</button>
                </div> 
            </form> 
        </div>     
    );
};
export default DoctorFee;