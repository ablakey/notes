export type FoodItem = {
  name: string;
  calories: number;
};

export type TrackedFood = {
  name: string;
  added: number; // posix
};

export type TrackedWeight = {
  weight: number;
  added: number; // posix
};

export type TrackedData = {
  saved: number; // posix
  eaten: TrackedFood[];
  weightHistory: TrackedWeight[];
  targetCalories: number;
  foodList: FoodItem[];
};
