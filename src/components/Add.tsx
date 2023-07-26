import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./AddCard";
import { json } from "node:stream/consumers";
import CardofAdd from "./AddCard";
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
function Add() {
  let storage;
  if (localStorage.getItem("search")) {
    storage = JSON.parse(localStorage.search);
  } else {
    storage = "";
  }
  // let storage = "";
  let [search, setSearch] = useState(`${storage}`);
  let [movie, setMovie] = useState<Movie[]>([]);
  let [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=2378f5ca`)
      .then((res) => {
        if (res.data.Search) {
          setMovie(res.data.Search);
          window.localStorage.search = JSON.stringify(search);
        } else {
          setMovie([]);
        }
      });
  }, [search]);

  return (
    <div className="parent bg-teal-600">
      <div className="add    pt-20 container m-auto ">
        <div className=" search w-full rounded-lg  p-5  m-auto">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              className="w-full bg-white pl-2 text-base font-semibold outline-0"
              placeholder=""
              id=""
            />
          </div>
        </div>
        <div className="movies grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-10 ">
          {/* {movie.map((m) => (
            <CardofAdd key={m.imdbID} movie={m} />
          ))} */}
          {movie
            .filter((e) => e.Poster !== "N/A")
            .filter((e) => e.Type === "movie")
            .map((m) => (
              <CardofAdd key={m.imdbID} movie={m} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Add;
