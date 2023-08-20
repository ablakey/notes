import { Card, Progress, Typography } from "antd";
import { Section } from "./components/Section";

export function CalorieStats() {
  return (
    <Section title="Calories">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr max-content",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Progress percent={30} showInfo={false} style={{ margin: 0 }} />
        <Typography.Text>1230 of 9999</Typography.Text>
      </div>
    </Section>
  );
}
