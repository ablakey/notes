import { Button, Input, InputNumber, Tag, Typography } from "antd";
import { Section } from "./components/Section";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { isNumber, uniqBy } from "lodash";
import { FoodEaten } from "./types";

function FoodButton(props: {
  name: string;
  calories: number;
  onClick: (name: string, calories: number) => void;
}) {
  return (
    <Button size="small" type="dashed" onClick={() => props.onClick(props.name, props.calories)}>
      <PlusOutlined style={{ color: "#CCC", fontSize: 10 }} />
      <Typography.Text style={{ marginLeft: 2 }}>{props.name}</Typography.Text>
      <Typography.Text style={{ color: "#999", marginLeft: 4 }}>{props.calories}</Typography.Text>
    </Button>
  );
}

export function AddFood(props: {
  foods: FoodEaten[];
  onAddFood: (name: string, calories: number) => void;
}) {
  const [newName, setNewName] = useState("");
  const [newCalories, setNewCalories] = useState<number | null>(null);

  /**
   * For food options:
   * - make a full set of all available options, removing duplicates.
   * -
   */
  const foodDict: Record<string, FoodEaten> = {};

  props.foods.forEach((f) => {
    const key = `${f.name.toLowerCase()}_${f.calories}`;
    foodDict[key] = f;
  });

  const sortedFoods = [...Object.values(foodDict)]
    .sort((a, b) => b.when - a.when)
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 20);

  return (
    <Section title="Add Food" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {sortedFoods.map((f) => (
          <FoodButton
            key={`${f.name.toLowerCase()}_${f.calories}`}
            name={f.name}
            calories={f.calories}
            onClick={props.onAddFood}
          />
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "max-content 1fr max-content max-content",
          alignItems: "center",
        }}
      >
        <Typography.Text style={{ color: "#999" }}>Add:</Typography.Text>
        <Input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Food name"
        />
        <InputNumber
          pattern="\d*"
          placeholder="Calories"
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
              setNewCalories(null);
              setNewName("");
            }
          }}
          icon={<PlusOutlined />}
          style={{ color: "#3f8600" }}
        />
      </div>
    </Section>
  );
}
