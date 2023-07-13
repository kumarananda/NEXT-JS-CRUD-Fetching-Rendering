/** @format */

export async function getVideos() {
  const res = await fetch("http://localhost:9000/videos");

  if (!res.ok) throw new Error("There was an error");

  return res.json();
}
