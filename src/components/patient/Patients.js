import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Patient from "./Patient";
import {
  selectAllpatient,
  clearAllpatient,
  deleteAllpatient,
} from "../../actions/patientAction";

const Patients = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const patients = useSelector((state) => state.patient.patients);
  const selectedPatients = useSelector(
    (state) => state.patient.selectedPatients
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllpatient(patients.map((patient) => patient.id)));
    } else {
      dispatch(clearAllpatient());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedPatients.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllpatient())}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Symptoms</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <Patient patient={patient} key={patient.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
