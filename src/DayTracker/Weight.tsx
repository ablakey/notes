import { Button, InputNumber, Statistic, Typography } from "antd";
import { Section } from "../components/Section";
import { ArrowUpOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Weight() {
  const [editWeight, setEditWeight] = useState(false);

  return (
    <Section title="Weight" style={{ height: 58 }}>
      {editWeight ? (
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Typography.Text>Today's Weight:</Typography.Text>
          <InputNumber type="number" />
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
