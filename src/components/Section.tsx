import Typography from "antd/es/typography/Typography";
import Text from "antd/es/typography/Text";
import { CSSProperties, ReactNode } from "react";

export function Section(props: { title: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <fieldset
      style={{
        border: "1px solid #f0f0f0",
        borderRadius: 8,
        marginInline: 0,
        paddingInlineStart: "0.5em",
        paddingInlineEnd: "0.5em",
        ...props.style,
      }}
    >
      <legend>
        <Text style={{ color: "#999", fontSize: 16 }}>{props.title}</Text>
      </legend>
      {props.children}
    </fieldset>
  );
}
