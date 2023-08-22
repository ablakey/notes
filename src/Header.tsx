import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { dayToDate } from "./utils";

export function Header(props: { day: number; changeDay: (newDay: number) => void }) {
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
      <Button icon={<LeftOutlined />} onClick={() => props.changeDay(props.day - 1)} />
      <div style={{ width: 190, display: "flex", justifyContent: "center" }}>
        <Typography.Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {dayToDate(props.day).toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
          })}
        </Typography.Text>
      </div>
      <Button icon={<RightOutlined />} onClick={() => props.changeDay(props.day + 1)} />
    </div>
  );
}
