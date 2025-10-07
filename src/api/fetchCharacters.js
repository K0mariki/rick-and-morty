export default async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
