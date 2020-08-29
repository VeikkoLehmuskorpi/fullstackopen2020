import { NewPatient } from '../types';
import {
  parseName,
  parseDateOfBirth,
  parseSsn,
  parseGender,
  parseOccupation,
} from './validators';

const toNewPatient = (object: any) => {
  const newPatient: NewPatient = {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
  };

  return newPatient;
};

export { toNewPatient };
