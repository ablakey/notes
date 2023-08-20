import { InputNumber, Statistic } from "antd";
import { Section } from "../components/Section";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Weight() {
  const [editWeight, setEditWeight] = useState(false);

  return (
    <Section title="Weight" style={{ height: 58 }}>
      {editWeight ? (
        <InputNumber type="number" />
      ) : (
        <div
          onClick={() => setEditWeight(true)}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Statistic value={260} precision={1} suffix="lb" />
          <Statistic
            value={11.2}
            precision={1}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="lb"
          />
        </div>
      )}
    </Section>
  );
}
