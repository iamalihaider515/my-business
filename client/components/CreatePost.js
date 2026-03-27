"use client";
import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    const token = localStorage.getItem("token");

    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ content }),
    });

    alert("Post created");
  };

  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <textarea
        className="w-full border p-2"
        placeholder="Write something..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handlePost} className="bg-green-500 text-white px-4 py-2 mt-2">
        Post
      </button>
    </div>
  );
}