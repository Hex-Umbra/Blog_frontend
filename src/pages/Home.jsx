import React from "react";
import FilterOptions from "../components/FilterOptions";
import HeroSection from "../components/HeroSection";
import Article from "../components/Article";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="bg-[#42337D] h-[50vh] w-full">
        <HeroSection />
      </section>
      <FilterOptions />
      <div className="bg-[#2F2459] h-[34vh] w-full grid grid-cols-4 items-center">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}
