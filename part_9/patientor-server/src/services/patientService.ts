import patientsData from '../data/patients';
import { Patient, NewPatient } from '../types';

const getPatients = (): Array<Patient> => patientsData;

const getNonSensitivePatients = (): Array<NonSensitivePatient> => {
  const patients = patientsData.map(({ ssn: _ssn, ...rest }) => ({
    ...rest,
  }));

  return patients;
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: Math.max(...patientsData.map(patient => patient.id)) + 1,
    ...patient,
  };

  patientsData.push(newPatient);

  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
};
