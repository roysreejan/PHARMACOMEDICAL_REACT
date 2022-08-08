import React, { useState, useEffect } from "react";
import Instance from "../Components/Instance";
import { Chart } from "react-google-charts";

const HomeDoctor = () => {
  const [profile, setProfile] = useState([]);
  let [token] = useState(localStorage.getItem("token"));
  console.log(token);
  useEffect(() => {
    Instance.get("/homeDoctor", {
      params: {
        token: token,
      },
    })
      .then((resp) => {
        console.log(resp.data);
        setProfile(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { name } = profile;
  const data = [
    ["Star", "No Of Patient"],
   
    ["1", 0],
    ["2", 0],
    ["3", 4],
    ["4", 5],
    ["5", 3],
  ];
  const options = {
    title: "Reviews",
    is3D: true,
  };
  //   function App() {

  //   }
  return (
    <div class="container">
      <div className="d-flex justify-content-center">
        <span className="fw-bold">Welcome Doctor {name}</span>
      </div>
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
