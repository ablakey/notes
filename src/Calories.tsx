import { Card, Progress, Typography } from "antd";
import { Section } from "./components/Section";

export function Calories(props: { current: number; max: number }) {
  const percent = props.current / props.max;
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
        <Progress percent={percent * 100} showInfo={false} style={{ margin: 0 }} />
        <Typography.Text>{`${props.current} of ${props.max}`}</Typography.Text>
      </div>
    </Section>
  );
}
