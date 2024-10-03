import React from "react";
import FilterOptions from "../components/FilterOptions";
import HeroSection from "../components/HeroSection";
import FetchArticle from "../components/FetchArticle";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <RemoveScrollBar />
      <section className="main-section">
        <HeroSection />
      </section>
      <FilterOptions />
      <div className="bg-[#2F2459] flex justify-center">
        <div>
          <FetchArticle limit={3} hidden="invisible" />
        </div>
      </div>
    </div>
  );
}
