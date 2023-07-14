/** @format */

export async function addNewVideo(data) {
  const res = await fetch(`http://localhost:9000/videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  if (!res.ok) throw new Error("There was an error");

  return res.json();
}
