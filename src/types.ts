export type FoodEaten = {
  name: string;
  calories: number;
  when: number;
};

export type TrackedWeight = {
  weight: number;
  when: number;
};

export type TrackedData = {
  foods: FoodEaten[];
  weights: TrackedWeight[];
  targetCalories: number;
};
