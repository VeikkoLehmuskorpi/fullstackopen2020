import express, { Request, Response } from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const patients = patientService.getNonSensitivePatients();

  res.json(patients);
});

router.post('/', (req: Request, res: Response) => {
  try {
    const newPatient = patientService.addPatient(req.body);

    res.json(newPatient);
  } catch (err) {
    console.error('Error adding new patient:', err);
    res.status(400).send('Failed to add new patient');
  }
});

export default router;
