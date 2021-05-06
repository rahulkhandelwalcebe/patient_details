import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatient, updatePatient } from "../../actions/patientAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPatient = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient.patient);
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [symptoms, setsymptoms] = useState("");
  const [prescription, setprescription] = useState("");


  useEffect(() => {
    if (patient != null) {
      setName(patient.name);
      setage(patient.age);
      setgender(patient.gender);
      setsymptoms(patient.symptoms);
      setprescription(patient.prescription);
    }
    dispatch(getPatient(id));
  }, [patient]);

  const onUpdatePatient = (e) => {
    e.preventDefault();

    const update_patient = Object.assign(patient, {
      name: name,
      age: age,
      gender: gender,
      symptoms: symptoms,
      prescription: prescription,
    });

    dispatch(updatePatient(update_patient));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Patient</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdatePatient(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPatient;
