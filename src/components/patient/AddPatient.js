import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../../actions/patientAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddPatient = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [symptoms, setsymptoms] = useState("");
  const [prescription, setprescription] = useState("");

  const craetePatient = (e) => {
    e.preventDefault();
    const new_patient = {
      id: shortid.generate(),
      name: name,
      age: age,
      gender: gender,
      symptoms: symptoms,
      prescription: prescription,
    };
    dispatch(addPatient(new_patient));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Patient</div>
      <div className="card-body">
        <form onSubmit={(e) => craetePatient(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Symptoms"
              value={symptoms}
              onChange={(e) => setsymptoms(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter prescription"
              value={prescription}
              onChange={(e) => setprescription(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Detail 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
