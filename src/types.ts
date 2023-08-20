export type FoodItem = {
  name: string;
  calories: number;
};

export type TrackedFood = {
  name: string;
  when: number; // posix
};

export type TrackedWeight = {
  weight: number;
  when: number; // posix
};

export type TrackedData = {
  saved: number; // posix
  eaten: TrackedFood[];
  weightHistory: TrackedWeight[];
  targetCalories: number;
  foodList: FoodItem[];
};
