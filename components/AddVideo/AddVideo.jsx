/** @format */
"use client";

import Modal from "@/ui/Modal/Modal";
import React, { useState, useTransition } from "react";
import TextInput from "./TextInput";
import { addNewVideo } from "@/libs/addNewVideo";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";

function AddVideo() {
  const [modal, setModal] = useState(false);

  // handle form change
  const [fromData, setFromData] = useState({ createdAt: new Date(), url: "", views: "", duration: "", title: "" });
  const formChange = e => {
    setFromData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleVideoAdd = async e => {
    e.preventDefault();

    await addNewVideo(JSON.stringify(fromData));
  };

  const handleFormClose = () => {
    setModal(false);
    setFromData({ createdAt: new Date(), url: "", views: "", duration: "", title: "" });
  };

  return (
    <>
      <button onClick={() => setModal(true)} className="bg-sky-600 text-white px-5 py-[4px] rounded">
        Add Video
      </button>
      {modal ? (
        <Modal modalOpen={modal} setModalOpen={setModal} outCickHide={false}>
          <h2 className="p-5 border-b border-stone-600  flex justify-between">
            <h2>Create new video</h2>
            <button onClick={handleFormClose} className="  w-8 h-8 flex justify-center items-center  rounded-full text-[30px] ">
              <AiOutlineCloseCircle />
            </button>
          </h2>
          <form onSubmit={handleVideoAdd} className="p-5">
            <TextInput name={"title"} change={formChange} value={fromData.title} placeholder={"Enter video title"} />
            <TextInput name={"duration"} change={formChange} value={fromData.duration} placeholder={"Enter video duration (min)"} />
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
