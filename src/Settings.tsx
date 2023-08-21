import { Button } from "antd";
import { Section } from "./components/Section";

export function Settings(props: { handleLogout: VoidFunction }) {
  return (
    <Section title="Settings">
      <Button onClick={props.handleLogout}>Log Out</Button>
    </Section>
  );
}
