import React , {useState, useEffect} from "react";
import Instance from "../Components/Instance";
import { Chart } from "react-google-charts";

const HomeDoctor = () => {
    const [profile,setProfile]=useState([]);
    let[token] = useState(localStorage.getItem('token'));
    console.log(token);
    useEffect(()=>{
        Instance.get("/homeDoctor", {
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
    const { name } = profile;
    const data = ([
        ['Star', 'No Of Patient'],
        // If(empty($doctorreviews1))
        //     ['1', 0],
        // Else,
        //     foreach($doctorreviews1 , $doctorreview)
        //     ['1', {$doctorreview, counter}],
        //     endforeach,
        // EndIf,
        // If(empty($doctorreviews2))
        //     ['2', 0],
        // Else,
        //     foreach($doctorreviews2 , $doctorreview)
        //     ['2', {$doctorreview, counter}],
        //     endforeach,
        // EndIf,
        // If(empty($doctorreviews3))
        //     ['3', 0],
        // Else,
        //     foreach($doctorreviews3 , $doctorreview)
        //     ['3', {$doctorreview, counter}],
        //     endforeach,
        // EndIf,
        // If(empty($doctorreviews4))
        //     ['4', 0],
        // Else,
        //     foreach($doctorreviews4 , $doctorreview)
        //     ['4', {$doctorreview, counter}],
        //     endforeach,
        // EndIf,
        // If(empty($doctorreviews5))
        //     ['5', 0],
        // Else,
        //     foreach($doctorreviews5 , $doctorreview)
        //     ['5', {$doctorreview, counter}],
        //     endforeach,
        // EndIf,
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ]);
      const options = {
        title: "Reviews",
        is3D: true,
      };
      function App() {
       
      }
    return ( 
        <div className="container d-flex justify-content-center">
            <span className="fw-bold">Welcome Doctor {name}</span>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>  
    );
};
export default HomeDoctor;