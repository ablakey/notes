import { Button, InputNumber } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { Section } from "./components/Section";
import { Statistic } from "./components/Statistic";
import { TrackedWeight } from "./types";

export function Weight(props: {
  day: number;
  onAddWeight: (weight: number) => void;
  weightHistory: TrackedWeight[];
}) {
  const [editWeight, setEditWeight] = useState(false);
  const [inputWeight, setInputWeight] = useState(0);

  const sortedWeights = useMemo(() => {
    return [...props.weightHistory].sort((a, b) => a.when - b.when);
  }, [props.weightHistory]);

  const earliestWeight = sortedWeights[0].weight;

  const latestWeight = useMemo(() => {
    return sortedWeights.filter((w) => w.when <= props.day).at(-1)!.weight;
  }, [props.weightHistory, props.day]);

  const weightDifference = latestWeight - earliestWeight;

  const gainedWeight = weightDifference > 0;

  return (
    <Section title="Weight" style={{ display: "flex", justifyContent: "space-around" }}>
      {editWeight ? (
        <div style={{ display: "flex", gap: 4, alignItems: "center", width: 152 }}>
          <InputNumber
            type="number"
            min={50}
            max={500}
            precision={1}
            style={{ width: 80 }}
            onChange={(e) => {
              // Is always a number. We're not using high precision mode.
              if (typeof e === "number") {
                setInputWeight(e);
              }
            }}
          />
          <Button
            onClick={() => {
              props.onAddWeight(inputWeight);
              setEditWeight(false);
            }}
            icon={<CheckOutlined />}
            style={{ color: "#3f8600" }}
          />
          <Button
            icon={<CloseOutlined />}
            style={{ color: "#cf1322" }}
            onClick={() => setEditWeight(false)}
          />
        </div>
      ) : (
        <div
          onClick={() => setEditWeight(true)}
          style={{ width: 152, display: "flex", justifyContent: "center" }}
        >
          <Statistic value={latestWeight} title="Today" suffix="lb" />
        </div>
      )}
      <Statistic
        value={Math.abs(weightDifference)}
        status={gainedWeight ? "Bad" : "Good"}
        direction={gainedWeight ? "Up" : "Down"}
        title="Total"
        suffix="lb"
      />
    </Section>
  );
}
