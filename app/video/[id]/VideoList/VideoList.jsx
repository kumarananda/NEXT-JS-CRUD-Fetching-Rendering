/** @format */

import Link from "next/link";
import React from "react";

async function getVideos() {
  const res = await fetch("http://localhost:9000/videos");

  if (!res.ok) throw new Error("There was an error");

  return res.json();
}

async function VideoList() {
  const video = await getVideos();

  return (
    <div className="w-full ">
      {video.map((item, index) => (
        <Link key={index} href={`/video/${item.id}`} className="">
          <h3 className="text-ellipsis ml-2 p-2 hover:text-blue-500">{item.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default VideoList;
