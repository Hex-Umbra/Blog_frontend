/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_FETCH_URL;
const ROUTE_URL = `${BASE_URL}/articles`;

export default function FetchArticle({ limit,hidden = "visible" }) {
  const [articles, setArticles] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  async function getArticles() {
    const res = await fetch(ROUTE_URL);
    const data = await res.json();
    setArticles(data);
    console.log(articles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  //Pagination

  const indexOfLastArticle = currPage * limit;
  const indexOfFirstArticle = indexOfLastArticle - limit;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  //Changing Pages
  const nextPage = () => {
    if (currPage < Math.ceil(articles.length / limit)) {
      setCurrPage(currPage + 1);
    }
  };

  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <div className="h-[34vh] w-full flex flex-wrap self-auto">
      {currentArticles.map((item, index) => (
        <Link to={`/articles/${item._id}`} className="" key={index}>
          <Article titre={item.titre} date={item.createdAt} />
        </Link>
      ))}
      <div className={`space-x-4 mt-4 ${hidden} absolute bottom-[-100px]`}>
        <button
          onClick={prevPage}
          disabled={currPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 h-9"
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={currPage === Math.ceil(articles.length / limit)}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 h-9"
        >
          Next
        </button>
      </div>
    </div>
  );
}
