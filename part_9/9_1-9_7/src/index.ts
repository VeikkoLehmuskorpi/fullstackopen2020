import express from 'express';
import { calculateBmi, parseCalculatorArguments } from './bmiCalculator';
import {
  calculateExercises,
  parseExerciseArguments,
} from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const { height: inputHeight, weight: inputWeight } = req.query;
    const { value1: weigth, value2: height } = parseCalculatorArguments([
      '',
      '',
      String(inputWeight),
      String(inputHeight),
    ]);

    res.json({
      height,
      weigth,
      bmi: calculateBmi(height, weigth),
    });
  } catch (err) {
    res.json('malformatted parameters').status(422);
  }
});

interface ExerciseParams {
  daily_exercises: number[];
  target: number;
}

app.post('/exercises', (req, res) => {
  try {
    const {
      daily_exercises: inputDailyExercises,
      target: inputTarget,
    } = req.body as ExerciseParams;

    if (!inputDailyExercises || !inputTarget) {
      throw new Error('parameters missing');
    }

    const { target, exerciseHours } = parseExerciseArguments([
      '',
      '',
      String(inputTarget),
      ...inputDailyExercises.map((exercise: number) => String(exercise)),
    ]);

    res.json(calculateExercises(exerciseHours, target));
  } catch (err) {
    res.json({ error: 'malformatted parameters' }).status(402);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
