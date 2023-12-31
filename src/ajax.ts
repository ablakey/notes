import { TrackedData } from "./types";

export async function patchData(
  token: string,
  gistId: string,
  data: TrackedData,
): Promise<TrackedData | string> {
  try {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      mode: "cors",
      method: "PATCH",
      body: JSON.stringify({
        files: {
          "trackeddata.json": {
            content: JSON.stringify(data, undefined, 4),
          },
        },
      }),
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const contents = await response.json();
    return JSON.parse(contents.files["trackeddata.json"].content);
  } catch (e) {
    console.error(e);
    return "An error happened.";
  }
}

export async function fetchData(token: string, gistId: string): Promise<TrackedData | string> {
  try {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const contents = await response.json();
    return JSON.parse(contents.files["trackeddata.json"].content);
  } catch (e) {
    console.error(e);
    return "An error happened.";
  }
}
