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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
