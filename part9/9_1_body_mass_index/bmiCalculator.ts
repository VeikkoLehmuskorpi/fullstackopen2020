const calculateBmi = (height: number, weight: number): string => {
  const bodyMassIndex = Number(((weight / (height * 2)) * 100).toFixed(1));

  if (bodyMassIndex < 18.5) {
    return 'Underweight';
  }

  if (18.5 <= bodyMassIndex && bodyMassIndex <= 24.9) {
    return 'Normal (healthy weight)';
  }

  if (25 <= bodyMassIndex && bodyMassIndex <= 29.9) {
    return 'Overweight';
  }

  if (30 <= bodyMassIndex && bodyMassIndex <= 39.9) {
    return 'Obese';
  }

  if (bodyMassIndex >= 40) {
    return 'Morbidly obese';
  }
};

console.log(calculateBmi(180, 74));
