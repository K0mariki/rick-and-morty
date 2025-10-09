export async function getEntitysByIds(entityType = "character", arrIds = [1]) {
  const entityIds = arrIds.map((url) => {
    const match = url.match(/\/(\d+)$/);
    return match ? match[1] : null;
  });

  const res = await fetch(
    `https://rickandmortyapi.com/api/${entityType}/${entityIds}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();

  if (Array.isArray(data) || data["info"]) {
    return data;
  } else {
    return [data];
  }
}

export async function getEntitysByName(entityType = "character", name, signal) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/${entityType}${
      name ? `/?name=${name}` : ""
    }`, {signal}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
}
