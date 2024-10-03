import React from "react";
import FetchArticle from "../components/FetchArticle";

export default function BrowseArticles() {
  return (
    <section className="main-section h-[105vh] flex justify-center">
      <div className="w-4/5">

      <FetchArticle limit={12} />
      </div>
    </section>
  );
}
