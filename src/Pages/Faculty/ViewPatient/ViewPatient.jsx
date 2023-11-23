import React, { useEffect, useState } from "react";
import "./ViewPatient.scss";
import { useNavigate, useParams } from "react-router";

function ViewPatient() {
  const [patientData, setPatientData] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const getPatients = () => {
    console.log("running");
    const data = JSON.parse(localStorage.getItem("patients"));

    var filteredArray = data.filter(function (itm) {
      return itm.faculty == id;
    });

    setPatientData(filteredArray);
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="patientData">
      <div className="header">
        <i
          class="bi bi-arrow-left-square-fill"
          onClick={() => navigate("/faculty")}
        ></i>
      </div>
      {patientData.length != 0 ? (
        <div className="patient-list">
          <h6>Patients List</h6>
          {patientData.map((data, key) => {
            return (
              <div className="patient">
                <p>
                  {data.name} - ({data.address}), {data.createdAt.split("T")[0]}{" "}
                </p>
                <div className="controls">
                  <button onClick={() => navigate(`/patient/${data._id}`)}>
                    <i class="bi bi-eye"></i>
                  </button>
                  <button onClick={() => navigate(`/patient/${data._id}`)}>
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-patient">No Patients Added Yet</p>
      )}
    </div>
  );
}

export default ViewPatient;
