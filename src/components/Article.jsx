import React from "react";

export default function Article() {
  return (
    <article className="p-6 h-full hover:hover-effect ease-in duration-100 w-1/4 cursor-pointer">
      <div className="h-3/5 border-[#3A8F4B] w-80 border-2">
        <h2 className="text-center text-6xl p-5 text-[#3A8F4B]">Mario Kart Wii</h2>
      </div>
      <div className="h-2/5 border-[#3A8F4B] w-80 border-2 overflow-hidden text-center text-2xl text-[#3A8F75] p-3">
        <span>{Date()}</span>
      </div>
    </article>
  );
}
