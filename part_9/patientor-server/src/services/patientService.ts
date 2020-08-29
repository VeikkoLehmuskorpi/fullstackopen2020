import patientsData from '../data/patients';
import { Patient } from '../types';

const getPatients = (): Array<Patient> => patientsData;

const getNonSensitivePatients = (): Array<NonSensitivePatient> => {
  const patients = patientsData.map(({ ssn: _ssn, ...rest }) => ({
    ...rest,
  }));

  return patients;
};

export default {
  getPatients,
  getNonSensitivePatients,
};
