import { Gender } from '../types';

const isString = (text: any): boolean => {
  const isString = typeof text === 'string' || text instanceof String;

  return isString;
};

const isDate = (date: any): boolean => {
  const isDate = Boolean(Date.parse(date));

  return isDate;
};

const isGender = (gender: any): boolean => {
  const isGender = Object.values(Gender).includes(gender);

  return isGender;
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }

  return name;
};

const parseDateOfBirth = (dateOfBirth: any): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect or missing date of birth');
  }

  return dateOfBirth;
};

const parseSsn = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }

  return ssn;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }

  return gender;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }

  return occupation;
};

export { parseName, parseDateOfBirth, parseSsn, parseGender, parseOccupation };
