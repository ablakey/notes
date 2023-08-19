import { createRoot } from "react-dom/client";
import { Button } from "antd";

const container = document.getElementById("root");
const root = createRoot(container!);

function App() {
  return <Button type="primary">Click</Button>;
}

root.render(<App />);
