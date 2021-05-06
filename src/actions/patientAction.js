import {
  CREATE_PATIENT,
  GET_PATIENT,
  UPDATE_PATIENT,
  DELETE_PATIENT,
  SELECT_PATIENT,
  CLEAR_PATIENT,
  DELETE_SELECTED_PATIENT,
} from "../constant/types";

// actions
export const addPatient = (patient) => ({
  type: CREATE_PATIENT,
  payload: patient,
});

// get a patient
export const getPatient = (id) => ({
  type: GET_PATIENT,
  payload: id,
});

// update a patient
export const updatePatient = (patient) => ({
  type: UPDATE_PATIENT,
  payload: patient,
});

// delete a patient
export const deletePatient = (id) => ({
  type: DELETE_PATIENT,
  payload: id,
});

// select all patient
export const selectAllpatient = (id) => ({
  type: SELECT_PATIENT,
  payload: id,
});

// clear selected patients
export const clearAllpatient = () => ({
  type: CLEAR_PATIENT,
});

// delete selected patientss
export const deleteAllpatient = () => ({
  type: DELETE_SELECTED_PATIENT,
});
