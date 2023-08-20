import { Section } from "../components/Section";
import { Statistic } from "../components/Statistic";

export function Progress() {
  return (
    <Section title="Progress" style={{ display: "flex", justifyContent: "space-around" }}>
      <Statistic value={111} title="Days Won" />
      <Statistic value={112} title="Days Lost" />
      <Statistic value={11.2} title="Δ Calories" />
    </Section>
  );
}
