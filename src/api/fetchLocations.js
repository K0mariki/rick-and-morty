export async function fetchLocations() {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
