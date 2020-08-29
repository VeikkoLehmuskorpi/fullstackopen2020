import express, { Request, Response } from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const patients = patientService.getNonSensitivePatients();

  res.json(patients);
});

export default router;
