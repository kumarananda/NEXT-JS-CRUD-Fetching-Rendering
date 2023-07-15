/** @format */

import React from "react";

import { getVideos } from "@/libs/getVideos";
import AddVideo from "@/components/AddVideo/AddVideo";
import { minToHm, nFormatter } from "@/utils/format";
import Link from "next/link";

export const dynamic = "force-dynamic"; // Per request update cache

export default async function Home() {
  const videos = await getVideos();

  return (
    <>
      <div className="m-4 ">
        <div className="text-3xl font-bold bg-slate-400 w-full p-4 rounded-t">
          <div className="text-lg font-bold flex justify-between">
            <h2 className="text-white">Video Player</h2>
            <AddVideo />
          </div>
        </div>
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
                  Views
                </th>
                <th scope="col" className="px-6 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {videos.map((item, index) => (
                <>
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <Link className="hover:text-blue-500" href={`/video/${item.id}`}>
                        {" "}
                        {item.title}
                      </Link>
                    </th>

                    <td className="px-6 py-4">{minToHm(item.duration)} Hour</td>
                    <td className="px-6 py-4">{nFormatter(item.views)}</td>
                    <td className="px-6 py-4">
                      <Link href={`/video/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Open
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
