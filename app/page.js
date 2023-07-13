/** @format */

import React from "react";
import Image from "next/image";
import { getVideos } from "@/libs/getVideos";


export default async function Home() {

  const videos = await getVideos();


  return (
    <>
      <div className="m-4 ">
        <h1 className="text-3xl font-bold bg-slate-400 w-full p-4 rounded-t">Video List</h1>
        <div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Video Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Viwes
                </th>
                <th scope="col" className="px-6 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {videos.map((item, index)=> (<> 
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.title}
                </th>

                <td className="px-6 py-4">{item.duration}</td>
                <td className="px-6 py-4">{item.views}</td>
                <td className="px-6 py-4">
                  <a href={`/video/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Open
                  </a>
                </td>
              </tr>
              </>))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
