import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

export function Header() {
  return (
    <div
      style={{
        backgroundColor: "#EEE",
        padding: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Button icon={<LeftOutlined />} />
      <Typography.Text>Monday Oct 1 2023</Typography.Text>
      <Button icon={<RightOutlined />} />
    </div>
  );
}
