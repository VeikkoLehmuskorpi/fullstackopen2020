interface ExercisesResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: 1 | 2 | 3;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  exerciseHours: number[],
  target: number
): ExercisesResult => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter(exerciseHour => exerciseHour > 0)
    .length;
  const average =
    exerciseHours.reduce((acc, cur) => acc + cur, 0) / exerciseHours.length;
  const rating =
    average < target
      ? 1
      : average >= target
      ? 2
      : average >= target * 2
      ? 3
      : 2;
  const ratingDescription =
    rating === 1
      ? 'did you even try?'
      : rating === 2
      ? 'not too bad but could be better'
      : rating === 3
      ? 'i knew you could do it'
      : 'not too bad but could be better';
  const success = average > target;

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const isValidNumber = (value: any) => {
  return !isNaN(Number(value));
};

interface ExerciseArguments {
  target: number;
  exerciseHours: Array<number>;
}

const parseExerciseArguments = (
  arguments: Array<string>
): ExerciseArguments => {
  if (arguments.length < 4) {
    throw new Error('Too few arguments!');
  }

  const [exec, file, target, ...exerciseHours] = arguments;

  if (isValidNumber(target) && exerciseHours.every(isValidNumber)) {
    return {
      target: Number(target),
      exerciseHours: exerciseHours.map(hour => Number(hour)),
    };
  } else {
    throw new Error('Provided arguments were not valid numbers!');
  }
};

try {
  const { target, exerciseHours } = parseExerciseArguments(process.argv);
  console.log(calculateExercises(exerciseHours, target));
} catch (err) {
  console.error('Error parsing arguments:', err.message);
}
