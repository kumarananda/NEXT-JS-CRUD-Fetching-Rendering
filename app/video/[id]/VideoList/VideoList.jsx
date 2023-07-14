/** @format */
"use client";
import Link from "next/link";
import React from "react";

function VideoList({ videoId, videos }) {
  return (
    <div className="w-full ">
      {videos.map((item, index) => {
        if (videoId !== item.id.toString()) {
          return (
            <Link key={index} href={`/video/${item.id}`} className="">
              <h3 className="text-ellipsis ml-2 p-2 hover:text-blue-500">{item.title}</h3>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default VideoList;
