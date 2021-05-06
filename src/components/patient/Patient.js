import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deletePatient } from "../../actions/patientAction";
import { useDispatch } from "react-redux";

const Patient = ({ patient, selectAll }) => {
  const dispatch = useDispatch();
  const { name, age, gender,symptoms,prescription, id } = patient;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{symptoms}</td>
      <td>{prescription}</td>
      <td className="actions">
        <Link to={`/patients/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deletePatient(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Patient;
