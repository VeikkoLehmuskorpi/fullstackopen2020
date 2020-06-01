export const calculateBmi = (height: number, weight: number): string => {
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

interface CalculatorArguments {
  value1: number;
  value2: number;
}

export const parseCalculatorArguments = (
  args: Array<string>
): CalculatorArguments => {
  if (args.length < 4) {
    throw new Error('Too few arguments!');
  }
  if (args.length > 4) {
    throw new Error('Too many arguments!');
  }

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error('Provided arguments were not valid numbers!');
  }
};

try {
  const { value1: height, value2: weight } = parseCalculatorArguments(
    process.argv
  );
  console.log(calculateBmi(height, weight));
} catch (err) {
  console.error('Error parsing arguments:', err.message);
}
