/** @format */

export async function getSingleVideo(id) {
  const res = await fetch(`http://localhost:9000/videos/${id}`);

  if (!res?.ok) throw new Error("There was an error");

  return res.json();
}
