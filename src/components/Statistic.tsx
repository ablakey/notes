import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic as AntdStatistic } from "antd";

const colours = {
  Good: "#cf1322",
  Bad: "#cf1322",
  None: "#000",
};

const prefixes = {
  Up: <ArrowUpOutlined />,
  Down: <ArrowDownOutlined />,
  None: null,
};

export function Statistic(props: {
  value: number;
  title: string;
  status?: "Good" | "Bad" | "None";
  suffix?: string;
  direction?: "Up" | "Down" | "None";
}) {
  return (
    <AntdStatistic
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "normal",
      }}
      value={props.value}
      title={props.title}
      suffix={props.suffix}
      prefix={prefixes[props.direction ?? "None"]}
      valueStyle={{ color: colours[props.status ?? "None"] }}
    />
  );
}
