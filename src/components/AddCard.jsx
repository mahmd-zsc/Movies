import React from "react";
import Btn from "./btn";
import img from "./img/imdb.png";
function CardofAdd({ movie }) {
  return (
    <div className=" w-[70%]   sm:w-full min-h-[500px] m-auto  overflow-hidden rounded-lg bg-white flex flex-col">
      <img className=" h-[300px] w-full" src={movie.Poster} alt="Poster" />

      <div className="info p-4 flex flex-col gap-2 flex-grow relative ">
        <a
          target="_blank"
          href={`https://www.imdb.com/comic-con/july-picks/${movie.imdbID}/mediaviewer/rm405807105/?ref_=hm_edcft_ft_lst_july23pks_1_i`}
        >
          <img className="w-16 absolute right-2 -top-8 " src={img} alt="" />
        </a>
        <h2 className="text-xl font-bold">{movie.Title}</h2>
        <p className="opacity-40 text-sm mr-10">{movie.Year}</p>
        <div className="flex-grow"></div>{" "}
        {/* This empty div will push the buttons to the bottom */}
        <Btn movie={movie} />
      </div>
    </div>
  );
}

export default CardofAdd;
