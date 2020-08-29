import express, { Request, Response } from 'express';
import diagnoseService from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const diagnoses = diagnoseService.getDiagnoses();

  res.json(diagnoses);
});

export default router;
