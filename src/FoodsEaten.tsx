import { AutoComplete, Card, Popconfirm, Tag, Typography } from "antd";
import { Section } from "./components/Section";
import { FoodEaten } from "./types";

function Food(props: { name: string; calories: number }) {
  return (
    <Popconfirm title="Remove food?" okText="Yes" cancelText="No" icon={null}>
      <div style={{ display: "flex", gap: 16 }}>
        <Typography.Text>{props.name}</Typography.Text>
        <Typography.Text>{props.calories}</Typography.Text>
      </div>
    </Popconfirm>
  );
}

export function FoodsEaten(props: { foods: FoodEaten[] }) {
  return (
    <Section title="Foods Eaten" style={{ display: "flex", gap: 4, flexDirection: "column" }}>
      {props.foods.map((food, idx) => (
        <Food key={idx} calories={food.calories} name={food.name} />
      ))}
    </Section>
  );
}
