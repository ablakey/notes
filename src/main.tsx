import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useLocalStorage } from "usehooks-ts";
import { CalorieStats } from "./CalorieStats";
import { FoodList } from "./FoodList";
import { Progress } from "./Progress";
import { Weight } from "./Weight";
import { Header } from "./Header";
import { Login } from "./Login";
import { fetchData, patchData } from "./ajax";
import { TrackedData } from "./types";
import { cloneDeep } from "lodash";
import { getToday } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [gistId, setGistId] = useLocalStorage<string | null>("gistId", null);

  const [error, setError] = useState("");
  const [trackedData, setTrackedData] = useState<TrackedData | null>(null);
  const [currentDay, setCurentDay] = useState(getToday());

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
    data.weightHistory.push({
      weight: weight,
      when: getToday(),
    });

    const result = await patchData(token, gistId, data);
    if (typeof result === "string") {
      setError(result);
    } else {
      setTrackedData(result);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {trackedData ? (
        <>
          <Header />
          <div style={{ margin: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <CalorieStats />
            <FoodList />
            <Weight
              day={currentDay}
              weightHistory={trackedData.weightHistory}
              onAddWeight={addWeight}
            />
            <Progress />
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
