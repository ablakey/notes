import { Switch } from "antd";
import { Section } from "./components/Section";
import { Statistic } from "./components/Statistic";

export function Chores() {
  return (
    <Section title="Daily Routine" style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Switch checkedChildren="Gym" unCheckedChildren="Gym" />
      <Switch checkedChildren="Sleep" unCheckedChildren="Sleep" />
    </Section>
  );
}
