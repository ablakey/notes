import { createRoot } from "react-dom/client";
import { Header } from "./Header";
import { DayTracker } from "./DayTracker";
import { Login } from "./Login";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Login />
      {/* <Header /> */}
      {/* <DayTracker /> */}
    </div>
  );
}

root.render(<App />);
