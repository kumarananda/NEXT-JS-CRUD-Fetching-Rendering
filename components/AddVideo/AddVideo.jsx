/** @format */
"use client";

import Modal from "@/ui/Modal/Modal";
import React, { useState, useTransition } from "react";
import TextInput from "./TextInput";
import { addNewVideo } from "@/libs/addNewVideo";

function AddVideo() {
  const [modal, setModal] = useState(false);
  // handle form change
  const [fromData, setFromData] = useState({ createdAt: new Date(), url: "", views: "", duration: "", description: "", title: "" });
  const formChange = e => {
    setFromData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleVideoAdd = async e => {
    e.preventDefault();

    await addNewVideo(fromData);
    const data = new FormData(fromData);
    const title = data.get("title");
    const description = data.get("description");
    const duration = data.get("duration");
    const views = data.get("views");
    const url = data.get("url");
    const createdAt = data.get("createdAt");

    await fetch(`http://localhost:9000/videos`, {
      method: "POST",
      body: fromData,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, duration, views, url, createdAt }),
    });
  };

  return (
    <>
      <button onClick={() => setModal(true)} className="bg-sky-600 text-white px-5 py-[4px] rounded">
        Add Video
      </button>
      {modal ? (
        <Modal modalOpen={modal} setModalOpen={setModal} outCickHide={true}>
          <form onSubmit={handleVideoAdd} className="p-5 ">
            <h2 className="p-2 border-b border-stone-600 mb-5">Create new video</h2>
            <TextInput name={"title"} change={formChange} value={fromData.title} placeholder={"Enter video title"} />
            <TextInput name={"description"} change={formChange} value={fromData.description} placeholder={"Enter video description"} />
            <TextInput name={"url"} change={formChange} value={fromData.url} placeholder={"Enter video url"} />
            <TextInput name={"views"} change={formChange} value={fromData.views} placeholder={"Enter video views (12k)"} />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add new Video
            </button>
          </form>
        </Modal>
      ) : null}
    </>
  );
}

export default AddVideo;
