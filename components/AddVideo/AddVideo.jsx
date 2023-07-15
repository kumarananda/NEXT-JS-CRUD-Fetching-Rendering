/** @format */
"use client";

import Modal from "@/ui/Modal/Modal";
import React, { useState } from "react";
import TextInput from "./TextInput";
import { addNewVideo } from "@/libs/addNewVideo";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function AddVideo() {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  // handle form change
  const [fromData, setFromData] = useState({ createdAt: new Date(), url: "", views: "", duration: "", title: "" });
  const formChange = e => {
    setFromData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormClose = () => {
    setModal(false);
    setFromData({ createdAt: new Date(), url: "", views: "", duration: "", title: "" });
  };

  const handleVideoAdd = async e => {
    e.preventDefault();
    const { url, views, duration, title } = fromData;
    if ((!url || !views, !duration, !title)) {
      return toast("All Fields required");
    }
    const checkUrl = url.includes("https://www.youtube.com/");
    const checkUrl_2 = url.includes("https://youtu.be/");
    if (!checkUrl && !checkUrl_2) {
      return toast("Youtube URL is not valid");
    }

    const checkEmbed = url.includes("embed");

    let embedLink = url;
    if (!checkEmbed) {
      if (checkUrl_2) {
        embedLink = url.replace("https://youtu.be/", "https://www.youtube.com/embed/");
      } else if (checkUrl) {
        embedLink = url.replace("https://www.youtube.com/", "https://www.youtube.com/embed/");
      }
    }

    const formatData = { ...fromData, url: embedLink };

    const data = await addNewVideo(JSON.stringify(formatData));

    if (data) {
      handleFormClose();
      router.refresh();
    }
  };

  return (
    <>
      <button onClick={() => setModal(true)} className="bg-sky-600 text-white px-5 py-[4px] rounded">
        Add Video
      </button>
      {modal ? (
        <Modal modalOpen={modal} setModalOpen={setModal} outCickHide={false}>
          <h2 className="p-5 border-b border-stone-600  flex justify-between">
            <span>Create new video</span>
            <button onClick={handleFormClose} className="  w-8 h-8 flex justify-center items-center  rounded-full text-[30px] ">
              <AiOutlineCloseCircle />
            </button>
          </h2>
          <form onSubmit={handleVideoAdd} className="p-5">
            <TextInput type={"text"} name={"title"} change={formChange} value={fromData.title} placeholder={"Enter video title"} />
            <TextInput type={"number"} name={"duration"} change={formChange} value={fromData.duration} placeholder={"Enter video duration (min)"} />
            <TextInput type={"text"} name={"url"} change={formChange} value={fromData.url} placeholder={"Enter youtube video url"} />
            <TextInput type={"number"} name={"views"} change={formChange} value={fromData.views} placeholder={"Enter video views"} />
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
