import {
  CREATE_PATIENT,
  GET_PATIENT,
  UPDATE_PATIENT,
  DELETE_PATIENT,
  SELECT_PATIENT,
  CLEAR_PATIENT,
  DELETE_SELECTED_PATIENT,
} from "../constant/types";

const intialState = {
  patients: [
    {
      name:"aman dubey",
      age:40,
      gender:"male",
      symptoms:"hand pain",
      prescription:"rest"

    },
    {
      name:"sumit sharma",
      age:25,
      gender:"male",
      symptoms:"leg pain",
      prescription:"take medisine"

    },
    {
      name:"kirti jain",
      age:35,
      gender:"female",
      symptoms:"heart pain",
      prescription:"take rest"

    },
    {
      name:"vikas gupta",
      age:40,
      gender:"male",
      symptoms:"naked pain",
      prescription:"yoga"

    }
     
     
     
     
  ],
  patient: null,
  selectedPatients: [],
};

export const patientReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_PATIENT:
      return {
        ...state,
        patients: [action.payload, ...state.patients],
      };
    case GET_PATIENT:
      let arr = state.patients.filter(
        (patient) => patient.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        patient: arr,
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id == action.payload.id ? action.payload : patient
        ),
      };
    case DELETE_PATIENT:
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id != action.payload
        ),
      };
    case DELETE_SELECTED_PATIENT:
      return {
        ...state,
        patients: [],
      };
    case SELECT_PATIENT:
      return {
        ...state,
        selectedPatients: action.payload,
      };

    case CLEAR_PATIENT:
      return {
        ...state,
        selectedPatients: [],
      };
    default:
      return state;
  }
};
