import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

export function Header() {
  return (
    <div
      style={{
        backgroundColor: "#EEE",
        paddingTop: 12,
        paddingBottom: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Button icon={<LeftOutlined />} />
      <div style={{ width: 190, display: "flex", justifyContent: "center" }}>
        <Typography.Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Monday Oct 1 2023
        </Typography.Text>
      </div>
      <Button icon={<RightOutlined />} />
    </div>
  );
}
