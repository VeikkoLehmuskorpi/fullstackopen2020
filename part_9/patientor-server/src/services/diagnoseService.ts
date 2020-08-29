import diagnosesData from '../data/diagnoses';
import { Diagnose } from '../types';

const getDiagnoses = (): Array<Diagnose> => diagnosesData;

export default {
  getDiagnoses,
};
