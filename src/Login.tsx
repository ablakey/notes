import { Alert, Button, Input, Typography } from "antd";
import { Section } from "./components/Section";
import { useState } from "react";

export function Login(props: { onTryLogin: (validToken: string, validGistId: string) => void }) {
  const [token, setToken] = useState("");
  const [gistId, setGistId] = useState("");

  return (
    <Section
      title="Login"
      style={{ margin: 8, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
    >
      <div
        style={{
          display: "Grid",
          gridTemplateColumns: "max-content 1fr",
          gap: 8,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography.Text>Token:</Typography.Text>
        <Input value={token} onChange={(e) => setToken(e.target.value)} />
        <Typography.Text>Gist ID:</Typography.Text>
        <Input value={gistId} onChange={(e) => setGistId(e.target.value)} />
      </div>
      <Button type="primary" onClick={() => props.onTryLogin(token, gistId)}>
        Login
      </Button>
    </Section>
  );
}
