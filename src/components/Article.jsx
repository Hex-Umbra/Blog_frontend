import React from "react";

// eslint-disable-next-line react/prop-types
export default function Article({ titre = "Mario Kart Wii", date = "today" }) {
  return (
    <article className="p-4 h-full hover:hover-effect ease-in duration-100 cursor-pointer">
      <div className="h-3/5 bg-[#4B3A8F] w-80 py-10 rounded-t-md">
        <h2 className="text-center text-3xl p-5 text-[#3A8F75]">{titre}</h2>
      </div>
      <div className="h-2/5 bg-[#513f99] w-80 text-center text-2xl text-[#3A8F75] py-10 rounded-b-lg">
        <span>{date}</span>
      </div>
    </article>
  );
}
