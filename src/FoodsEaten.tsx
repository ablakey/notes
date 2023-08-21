import { AutoComplete, Card, Popconfirm, Tag, Typography } from "antd";
import { Section } from "./components/Section";
import { FoodEaten } from "./types";

function Food(props: { name: string; calories: number; onRemove: VoidFunction }) {
  return (
    <Popconfirm
      title="Remove food?"
      okText="Yes"
      cancelText="No"
      icon={null}
      onConfirm={props.onRemove}
    >
      <Tag style={{ display: "flex", gap: 4, marginRight: 0 }}>
        <Typography.Text>{props.name}</Typography.Text>
        <Typography.Text style={{ color: "#999" }}>{props.calories}</Typography.Text>
      </Tag>
    </Popconfirm>
  );
}

export function FoodsEaten(props: { foods: FoodEaten[]; removeFood: (food: FoodEaten) => void }) {
  return (
    <Section title="Foods Eaten" style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
      {props.foods.map((food, idx) => (
        <Food
          key={idx}
          calories={food.calories}
          name={food.name}
          onRemove={() => props.removeFood(food)}
        />
      ))}
    </Section>
  );
}
