import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useLocalStorage } from "usehooks-ts";
import { FoodsEaten } from "./FoodsEaten";
import { Chores } from "./Chores";
import { Weight } from "./Weight";
import { Header } from "./Header";
import { Login } from "./Login";
import { fetchData, patchData } from "./ajax";
import { FoodEaten, TrackedData } from "./types";
import { cloneDeep, sum } from "lodash";
import { getToday } from "./utils";
import { Settings } from "./Settings";
import { AddFood } from "./AddFood";
import { Streaks } from "./Streaks";
import { Calories } from "./Calories";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [gistId, setGistId] = useLocalStorage<string | null>("gistId", null);

  const [error, setError] = useState<string | null>(null);
  const [trackedData, setTrackedData] = useState<TrackedData | null>(null);
  const [currentDay, setCurentDay] = useState(getToday());

  const currentDayFoodsEaten = (trackedData?.foods ?? []).filter((f) => f.when === currentDay);

  const currentDayCalories = sum(currentDayFoodsEaten.map((f) => f.calories));

  useEffect(() => {
    if (token && gistId) {
      doEffect();
    }

    async function doEffect() {
      const result = await fetchData(token!, gistId!);
      if (typeof result === "string") {
        setError(result);
      } else {
        setTrackedData(result);
      }
    }
  }, [token, gistId]);

  async function patchTrackedData(newData: TrackedData) {
    if (!token || !gistId || !trackedData) {
      return;
    }

    const result = await patchData(token, gistId, newData);
    if (typeof result === "string") {
      setError(result);
    } else {
      setTrackedData(result);
    }
  }

  async function addWeight(weight: number) {
    const data = cloneDeep(trackedData!);
    data.weights.push({
      weight: weight,
      when: currentDay,
    });

    patchTrackedData(data);
  }

  async function handleAddFood(name: string, calories: number) {
    const data = cloneDeep(trackedData!);
    data.foods.push({
      name,
      calories: calories,
      when: currentDay,
    });

    patchTrackedData(data);
  }

  async function handleRemoveFood(food: FoodEaten) {
    const data = cloneDeep(trackedData!);
    const idxToRemove = data.foods.findIndex(
      (f) => f.calories === food.calories && f.name === food.name && f.when === food.when,
    );

    if (idxToRemove === -1) {
      return;
    }

    data.foods = data.foods.filter((_, idx) => idx !== idxToRemove);

    patchTrackedData(data);
  }

  function handleLogout() {
    setToken(null);
    setGistId(null);
    setError(null);
    setTrackedData(null);
    setCurentDay(getToday());
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {trackedData ? (
        <>
          <Header />
          <div style={{ margin: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <Calories current={currentDayCalories} max={trackedData.targetCalories} />
            <Streaks gym={1} sleep={0} budget={5} />
            <FoodsEaten foods={currentDayFoodsEaten} removeFood={handleRemoveFood} />
            <AddFood foods={trackedData.foods} onAddFood={handleAddFood} />

            <Weight day={currentDay} weights={trackedData.weights} onAddWeight={addWeight} />
            <Chores />
            <Settings handleLogout={handleLogout} />
          </div>
        </>
      ) : (
        <Login
          onTryLogin={(token, gistId) => {
            setToken(token);
            setGistId(gistId);
          }}
        />
      )}
    </div>
  );
}

root.render(<App />);
