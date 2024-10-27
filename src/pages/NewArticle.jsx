import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/articles/new`;

export default function NewArticle() {
  const navigate = useNavigate();
  const [titre, setTitre] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(ROUTE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titre, content }),
      });

      if (!res.ok) {
        throw new Error("Failed to create article");
      }
      // const data = await res.json();
      navigate(`/articles/`);
    } catch (err) {
      console.error(err.message);
  }};

  return (
    <section className="main-section h-screen">
      <h1 className="flex justify-center text-6xl text-center cursor-pointer duration-200 gap-2 items-center font-bold p-10 text-[#3A8F75]">
        New Article
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center my-5">
          <label htmlFor="titre" className="text-[#3A8F75] text-2xl p-3">
            Title :
          </label>
          <input
            className="p-3 bg-[#4B3A8F] text-white text-2xl"
            onChange={(e) => {
              setTitre(e.target.value);
            }}
            value={titre}
            type="text"
            id="titre"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <label htmlFor="content" className="text-[#3A8F75] text-2xl p-3">
            Content :
          </label>
          <textarea
            className="bg-[#4B3A8F] text-white text-lg"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            type="text"
            id="content"
            rows={15}
            cols={50}
            required
          />
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <button className="text-white bg-[#3A8F75] hover:bg-[#337c66] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
