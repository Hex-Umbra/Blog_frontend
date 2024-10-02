import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex justify-center flex-wrap px-96">
      <div>
        <img
          className="h-80 mr-5 m-6 rounded-xl"
          src="public/assets/nik-lUbIun4IL38-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="relative">
        <p className="text-2xl px-20 text-[#3A8F4B] drop-shadow-2xl font-medium">
          Welcome to BloGames, a Blog where you can find lots of information and
          articles about your favorite games ! Join us now by creating your
          first ever article !
        </p>
        <button className="absolute right-32 top-6 drop-shadow-lg">
        </button>
        <Link to={"/articles/new"} className="absolute right-32 top-6 drop-shadow-lg">
          <FaLongArrowAltRight size={60} color="#763A8F"/>
        </Link>
      </div>
    </div>
  );
}
