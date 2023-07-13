/** @format */

import React from "react";
import VideoList from "./VideoList/VideoList";
import { getSingleVideo } from "@/libs/getSingleVideo";

async function SingleVideoPage({ params }) {
  const video = await getSingleVideo(params.id);

  return (
    <>
      <div className="w-full p-2">
        <h1 className="text-lg font-bold">Video Pleayer</h1>
        <div className="flex gap-2 ">
          <div className="w-[65%]">
            <iframe
              width="100%"
              className="aspect-video"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboardWrite; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="detiles flex mt-1 ">
              <div className="w-3/4">
                <span>Views {video.views}</span>
                <h2 className="font-bold">{video.title}</h2>
              </div>
              <div className="w-1/4">Dduration: {video.duration} </div>
            </div>
          </div>
          <div className="w-[35%] border">
            <h2 className="ml-2">Video List </h2>
            <div className="list w-full">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleVideoPage;
