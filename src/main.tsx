import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { useLocalStorage } from "usehooks-ts";
import { CalorieStats } from "./CalorieStats";
import { FoodList } from "./FoodList";
import { Progress } from "./Progress";
import { Weight } from "./Weight";
import { Header } from "./Header";
import { Login } from "./Login";
import { fetchData } from "./ajax";
import { TrackedData } from "./types";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [gistId, setGistId] = useLocalStorage<string | null>("gistId", null);

  const [error, setError] = useState("");
  const [trackedData, setTrackedData] = useState<TrackedData | null>(null);

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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {trackedData ? (
        <>
          <Header />
          <div style={{ margin: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <CalorieStats />
            <FoodList />
            <Weight />
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
