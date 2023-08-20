import { AutoComplete, Card, Popconfirm, Tag } from "antd";
import { Section } from "./components/Section";

function Food(props: { name: string }) {
  return (
    <Popconfirm title="Remove food?" okText="Yes" cancelText="No" icon={null}>
      <Tag style={{ fontSize: 16, margin: 0, padding: "4px 8px" }}>{props.name}</Tag>
    </Popconfirm>
  );
}

export function FoodList() {
  return (
    <Section title="Foods Eaten" style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        <Food name={"Muffin"} />
        <Food name={"Muffin"} />
        <Food name={"Pop Tart"} />
        <Food name={"Muffin"} />
        <Food name={"Muffin"} />
        <Food name={"Muffin"} />
        <Food name={"Muffin"} />
      </div>
      <div>
        <AutoComplete placeholder="Add..." style={{ width: "100%" }} />
      </div>
    </Section>
  );
}
