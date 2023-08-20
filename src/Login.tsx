import { Alert, Button, Input, Typography } from "antd";
import { Section } from "./components/Section";
import { useState } from "react";

export function Login() {
  const [token, setToken] = useState("");
  const [gist, setGist] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");
    try {
      const response = await fetch(`https://api.github.com/gists/${gist}`, {
        mode: "cors",
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      const json = (await response.json()) as any;

      if (response.status >= 300) {
        setError(json.message);
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <Section
      title="Login"
      style={{ margin: 8, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
    >
      <div
        style={{
          display: "Grid",
          gridTemplateColumns: "max-content 1fr",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Typography.Text>Token:</Typography.Text>
        <Input value={token} onChange={(e) => setToken(e.target.value)} />
        <Typography.Text>Gist ID:</Typography.Text>
        <Input value={gist} onChange={(e) => setGist(e.target.value)} />
      </div>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
      {error.length ? <Alert type="error" message={error} /> : null}
    </Section>
  );
}
