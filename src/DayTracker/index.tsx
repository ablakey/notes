import { CalorieStats } from "./CalorieStats";
import { FoodList } from "./FoodList";
import { Weight } from "./Weight";

export function DayTracker() {
  return (
    <div style={{ margin: 8, display: "flex", flexDirection: "column", gap: 8 }}>
      <CalorieStats />
      <FoodList />
      <Weight />
    </div>
  );
}
