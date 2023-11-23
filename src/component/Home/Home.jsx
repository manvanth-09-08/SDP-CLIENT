import React, { useState, useEffect } from "react";
import "./Home.scss";
import { BarChart } from "@mui/x-charts";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { Label } from "recharts";

function Home({ locCount, facCount, campCount, patientCount, patients }) {
  console.log("PATIENTS : ", patients);
  console.log("PATIENTCOUNT : ", patientCount);
  const [patientList, setPatientList] = useState([]);
  console.log("HEHEHEHEHEHEHEHHEHEHEHEHEHEHEEHEH");

  const ageBinList = [
    "18-25",
    "26-32",
    "33-39",
    "40-46",
    "47-53",
    "54-60",
    ">60",
  ];
  let ageBin = {
    "18-25": 0,
    "26-32": 0,
    "33-39": 0,
    "40-46": 0,
    "47-53": 0,
    "54-60": 0,
    ">60": 0,
  };

  async function getPatientNumber() {
    patients.forEach((patient) => {
      if (patient.age < 26) ageBin["18-25"]++;
      else if (patient.age < 33) ageBin["26-32"]++;
      else if (patient.age < 40) ageBin["33-39"]++;
      else if (patient.age < 47) ageBin["40-46"]++;
      else if (patient.age < 54) ageBin["47-53"]++;
      else if (patient.age < 60) ageBin["54-60"]++;
      else ageBin[">60"]++;
    });

    var patientCountList = [];
    ageBinList.forEach((age) => {
      patientCountList.push(ageBin[age]);
    });
    console.log("PAtientLIST : ", patientCountList);

    setPatientList(patientCountList);
  }

  useEffect(() => {
    getPatientNumber();
  }, [patients]);

  return (
    <div className="admin-home">
      <div className="header">
        <h6 className="text-center w-100">
          Hello, Welcome to the Admin Dashboard!
        </h6>
      </div>

      <div className="data-box">
        {/* <div class="container">
        <div class="inner-circle">

            <h6>{locCount}</h6>
          <p>TOTAL LOCATIONS</p>
        </div>
      </div> */}
        <div class="container">
          <div class="inner-circle">
            <h6>{facCount - 1}</h6>
            <p>TOTAL COUNSELLERS</p>
          </div>
        </div>
        {/* <div class="container">
          <div class="inner-circle">
            <h6>{campCount}</h6>
            <p>TOTAL CAMPS</p>
          </div>
        </div> */}
        <div class="container">
          <div class="inner-circle">
            <h6>{patientCount}</h6>
            <p>TOTAL PATIENTS</p>
          </div>
        </div>
      </div>

      <div className="graph-container">
        {patientList ? (
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "18-25",
                  "26-32",
                  "33-39",
                  "40-46",
                  "47-53",
                  "54-60",
                  ">60",
                ],
                id: "ageGroup",
              },
            ]}
            yAxis={{ id: "patientsNumber" }}
            series={[{ data: patientList }]}
            width={500}
            height={300}
          />
        ) : (
          <p>No daya to display</p>
        )}
      </div>
    </div>
  );
}

export default Home;
