/** @format */

import { getVideos } from "@/libs/getVideos";
import Link from "next/link";
import React from "react";

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
