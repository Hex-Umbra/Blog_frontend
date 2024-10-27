import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function ShowArticle() {
  
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const BASE_URL = import.meta.env.VITE_FETCH_URL;
  const ROUTE_URL = `${BASE_URL}/articles/${id}`;

  async  function getArticle() {
    try{
      const res = await fetch(ROUTE_URL)
      if(!res.ok){
        throw new  Error('Failed to fetch data')
      }
      const data = await res.json();
      console.log(data);
      setArticle(data);
    }catch(e){
      console.error(e)
    }

  }

useEffect(()=>{
  getArticle();
}, [])

if (!article) {
  return <div>No article found.</div>; 
}
  return (
    <section className="main-section h-screen w-full flex justify-center">
      <div className="flex w-1/2 flex-col h-full">
        <h1 className="flex justify-center text-6xl text-center cursor-pointer duration-200 gap-2 items-center font-bold p-10 text-[#3A8F75]">{article.titre}</h1> 
        <p className="text-[#3A8F75] text-lg p-10">{article.content}</p>
      </div>
    </section>
  );
}
