import * as Types from "./TypeOfActions";
export let addWatchedList = (movie) => {
  return {
    type: Types.ADD_TO_WATCHED_LIST,
    payload: movie,
  };
};
export let addWatched = (movie) => {
  return {
    type: Types.ADD_TO_WATCHED,
    payload: movie,
  };
};
export let removeWatchedList = (movie) => {
  return {
    type: Types.REMOVE_FROM_WATCHED_LIST,
    payload: movie,
  };
};
export let removeWatched = (movie) => {
  return {
    type: Types.REMOVE_FROM_WATCHED,
    payload: movie,
  };
};
export let moveToWatched = (movie) => {
  return {
    type: Types.MOVE_TO_WATCHED,
    payload: movie,
  };
};
