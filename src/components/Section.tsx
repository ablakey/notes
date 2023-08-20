import { Typography } from "antd";
import { CSSProperties, ReactNode } from "react";

export function Section(props: { title: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <fieldset
      style={{ border: "1px solid #f0f0f0", borderRadius: 8, marginInline: 0, ...props.style }}
    >
      <legend>
        <Typography.Text style={{ color: "#999", fontSize: 16 }}>{props.title}</Typography.Text>
      </legend>
      {props.children}
    </fieldset>
  );
}
