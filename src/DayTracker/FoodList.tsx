import { Card, Tag } from "antd";
import { Section } from "../components/Section";

function Food(props: { name: string }) {
  return <Tag style={{ margin: 0 }}>{props.name}</Tag>;
}

export function FoodList() {
  return (
    <Section title="Foods Eaten" style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
      <Food name={"Muffin"} />
      <Food name={"Muffin"} />
      <Food name={"Pop Tart"} />
      <Food name={"Muffin"} />
      <Food name={"Muffin"} />
      <Food name={"Muffin"} />
      <Food name={"Muffin"} />
    </Section>
  );
}
