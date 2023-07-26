import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addWatched, addWatchedList, removeWatchedList } from "./redux/Actions";

function Btn({ movie }) {
  let dispatch = useDispatch();
  let watchedList = useSelector((state) => state.watchedList);
  let watched = useSelector((state) => state.watched);
  let [watchedListDisabled, setWatchedListDisabled] = useState(
    Boolean(watchedList.find((e) => e.imdbID === movie.imdbID))
  );
  let [watchedDisabled, setWatchedDisabled] = useState(
    Boolean(watched.find((e) => e.imdbID === movie.imdbID))
  );

  let handleWatchedList = () => {
    dispatch(addWatchedList(movie));
  };
  useEffect(() => {
    setWatchedListDisabled(
      Boolean(watchedList.find((e) => e.imdbID === movie.imdbID)) ||
        Boolean(watched.find((e) => e.imdbID === movie.imdbID))
    );
    setWatchedDisabled(Boolean(watched.find((e) => e.imdbID === movie.imdbID)));
  }, [watchedList]);
  let handleWatched = () => {
    dispatch(removeWatchedList(movie));
    dispatch(addWatched(movie));
  };
  return (
    <div className="but flex gap-2">
      <button
        onClick={handleWatchedList}
        type="button"
        disabled={watchedListDisabled}
        className="border w-1/2 border-indigo-500 bg-indigo-500 text-white rounded-md px-2 py-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        watchedlist
      </button>
      <button
        onClick={handleWatched}
        type="button"
        disabled={watchedDisabled}
        className="border w-1/2 border-indigo-500 bg-indigo-500 text-white rounded-md px-2 py-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        watched
      </button>
    </div>
  );
}

export default Btn;
