export default async function fetchLocation() {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
