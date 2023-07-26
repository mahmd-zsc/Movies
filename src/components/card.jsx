import React from "react";
import open_eye from "./img/view.png";
import close_eye from "./img/hide.png";
import deleted from "./img/delete.png";
import { useDispatch } from "react-redux";
import {
  addWatchedList,
  moveToWatched,
  removeWatched,
  removeWatchedList,
} from "./redux/Actions";
function Card({ movie, condition }) {
  let dispatch = useDispatch();
  let handleOpenEye = () => {
    dispatch(moveToWatched(movie));
  };
  let handleCloseEye = () => {
    dispatch(addWatchedList(movie));
    dispatch(removeWatched(movie));
  };
  let handleRemove = () => {
    if (condition) {
      dispatch(removeWatchedList(movie));
    } else {
      dispatch(removeWatched(movie));
    }
  };
  return (
    <div className="relative search rounded-lg overflow-hidden m-auto">
      <img className="h-full w-full" src={movie.Poster} alt="poster" />
      <div className="info flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-5 ">
        {condition && (
          <img
            onClick={handleOpenEye}
            className="w-10 cursor-pointer"
            src={open_eye}
            alt=""
          />
        )}
        {!condition && (
          <img
            onClick={handleCloseEye}
            className="w-10 cursor-pointer"
            src={close_eye}
            alt=""
          />
        )}

        <img
          onClick={handleRemove}
          className="w-10 cursor-pointer"
          src={deleted}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
