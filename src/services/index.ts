import type { Character } from "../components/types";

export async function fetchCharacters(): Promise<Character[]> {
  const url = "http://localhost:3001/characters";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}`);
    }
    const data = (await res.json()) as Character[];
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("No data returned from server");
    }
    return data;
  } catch (err) {
    throw err;
  }
}

export default { fetchCharacters };
