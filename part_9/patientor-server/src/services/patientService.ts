import patientsData from '../data/patients';
import { Patient, NonSensitivePatient, NewPatient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Array<Patient> => patientsData;

const getNonSensitivePatients = (): Array<NonSensitivePatient> => {
  const patients = patientsData.map(({ ssn: _ssn, ...rest }) => ({
    ...rest,
  }));

  return patients;
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuidv4(),
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
