import { createRoot } from "react-dom/client";
import { Header } from "./Header";
import { DayTracker } from "./DayTracker";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <DayTracker />
    </div>
  );
}

root.render(<App />);
