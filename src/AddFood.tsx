import { Button, Input, InputNumber, Tag, Typography } from "antd";
import { Section } from "./components/Section";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { isNumber } from "lodash";

function FoodButton(props: {
  name: string;
  calories: number;
  onClick: (name: string, calories: number) => void;
}) {
  return (
    <Button size="small" type="dashed" onClick={() => props.onClick(props.name, props.calories)}>
      <PlusOutlined style={{ color: "#CCC", fontSize: 10 }} />
      <span style={{ marginLeft: 2 }}>{`${props.name} ${props.calories}`}</span>
    </Button>
  );
}

export function AddFood(props: { onAddFood: (name: string, calories: number) => void }) {
  const [newName, setNewName] = useState("");
  const [newCalories, setNewCalories] = useState<number | null>(null);

  return (
    <Section title="Add Food" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        <FoodButton name="muffin" calories={160} onClick={props.onAddFood} />
      </div>
      <div
        style={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "max-content 1fr max-content max-content",
          alignItems: "center",
        }}
      >
        <Typography.Text>Add:</Typography.Text>
        <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
        <InputNumber
          value={newCalories}
          onChange={(e) => {
            if (isNumber(e) && isFinite(e)) {
              setNewCalories(e);
            }
          }}
        />
        <Button
          onClick={() => {
            if (newName.length && newCalories) {
              props.onAddFood(newName, newCalories);
            }
          }}
          icon={<PlusOutlined />}
          style={{ color: "#3f8600" }}
        />
      </div>
    </Section>
  );
}
