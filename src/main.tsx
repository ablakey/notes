import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useLocalStorage } from "usehooks-ts";
import { CalorieStats } from "./CalorieStats";
import { FoodsEaten } from "./FoodsEaten";
import { Progress } from "./Progress";
import { Weight } from "./Weight";
import { Header } from "./Header";
import { Login } from "./Login";
import { fetchData, patchData } from "./ajax";
import { TrackedData } from "./types";
import { cloneDeep } from "lodash";
import { getToday } from "./utils";
import { Settings } from "./Settings";
import { AddFood } from "./AddFood";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [gistId, setGistId] = useLocalStorage<string | null>("gistId", null);

  const [error, setError] = useState<string | null>(null);
  const [trackedData, setTrackedData] = useState<TrackedData | null>(null);
  const [currentDay, setCurentDay] = useState(getToday());

  const currentDayFoodsEaten = (trackedData?.foods ?? []).filter((f) => f.when === currentDay);

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

  async function addWeight(weight: number) {
    if (!token || !gistId || !trackedData) {
      return;
    }

    const data = cloneDeep(trackedData);
    data.weights.push({
      weight: weight,
      when: currentDay,
    });

    const result = await patchData(token, gistId, data);
    if (typeof result === "string") {
      setError(result);
    } else {
      setTrackedData(result);
    }
  }

  async function handleAddFood(name: string, calories: number) {
    if (!token || !gistId || !trackedData) {
      return;
    }

    const data = cloneDeep(trackedData);
    data.foods.push({
      name,
      calories: calories,
      when: currentDay,
    });

    const result = await patchData(token, gistId, data);
    if (typeof result === "string") {
      setError(result);
    } else {
      setTrackedData(result);
    }
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
            <CalorieStats />
            <FoodsEaten foods={currentDayFoodsEaten} />
            <AddFood onAddFood={handleAddFood} />

            <Weight day={currentDay} weights={trackedData.weights} onAddWeight={addWeight} />
            <Progress />
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
