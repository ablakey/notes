import { Switch } from "antd";
import { Section } from "./components/Section";
import { Statistic } from "./components/Statistic";

export function Streaks(props: { gym: number; sleep: number; budget: number }) {
  return (
    <Section title="Streaks" style={{ display: "flex", justifyContent: "space-around" }}>
      <Statistic title="Gym" value={props.gym} status={props.gym > 0 ? "Good" : "Bad"} />
      <Statistic title="Sleep" value={props.sleep} status={props.sleep > 0 ? "Good" : "Bad"} />
      <Statistic title="Budget" value={props.budget} status={props.budget > 0 ? "Good" : "Bad"} />
    </Section>
  );
}
