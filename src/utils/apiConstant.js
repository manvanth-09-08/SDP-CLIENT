export const BASE_URL = "sdp-server-1234.vercel.app:5000";
export const ML_URL = "http://localhost:9000";
// export const BASE_URL = "https://backendsurvey.herokuapp.com"

export const LOGIN_URL = `${BASE_URL}/api/user/login`;

export const GET_LOCATIONS = `${BASE_URL}/api/location`;
export const ADD_LOCATIONS = `${BASE_URL}/api/location`;

export const ADD_FACULTY = `${BASE_URL}/api/user`;
export const GET_FACULTY = `${BASE_URL}/api/user`;

export const ADD_CAMP = `${BASE_URL}/api/camp`;
export const GET_CAMP = `${BASE_URL}/api/camp`;
export const GET_USER_CAMP = `${BASE_URL}/api/camp/user`;

export const ADD_PATIENT = `${BASE_URL}/api/patient`;
export const GET_PATIENT_USER = `${BASE_URL}/api/patient/user`;
export const GET_UNALLOCATED_PATIENTS = `${BASE_URL}/api/patient/getUnallocated`;

export const GET_RETAILER = `${BASE_URL}/api/retailer`;

export const GET_TRUCK = `${BASE_URL}/api/truck`;

export const GET_ORDER = `${BASE_URL}/api/order`;

const auth = localStorage.getItem("auth");

export const HEADERS = {
  Authorization: `Bearer ${auth}`,
};

export const SOBER_PERIOD = `${BASE_URL}/api/prediction/soberPeriod`;
export const AAI_PREDICTION = `${BASE_URL}/api/prediction/aaiPrediction`;
export const RISK_PREDICTION = `${BASE_URL}/api/prediction/riskPrediction`;
