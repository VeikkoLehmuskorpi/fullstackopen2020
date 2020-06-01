import express from 'express';
import { calculateBmi, parseCalculatorArguments } from './bmiCalculator';

const app = express();

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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
