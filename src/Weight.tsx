import { Button, InputNumber } from "antd";
import { ArrowUpOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Section } from "./components/Section";
import { Statistic } from "./components/Statistic";

export function Weight() {
  const [editWeight, setEditWeight] = useState(false);

  return (
    <Section title="Weight" style={{ display: "flex", justifyContent: "space-around" }}>
      {editWeight ? (
        <div style={{ display: "flex", gap: 4, alignItems: "center", width: 152 }}>
          <InputNumber type="number" style={{ width: 80 }} />
          <Button icon={<CheckOutlined />} style={{ color: "#3f8600" }} />
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
          <Statistic value={260} title="Today" suffix="lb" />
        </div>
      )}
      <Statistic value={11.2} direction="Up" title="Total" suffix="lb" />
    </Section>
  );
}
