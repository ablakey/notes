import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic as AntdStatistic } from "antd";
import { isInteger } from "lodash";
const colours = {
  Good: "#3f8600",
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
      precision={isInteger(props.value) ? 0 : 1}
      prefix={prefixes[props.direction ?? "None"]}
      valueStyle={{ color: colours[props.status ?? "None"] }}
    />
  );
}
