import { addWatched } from "./Actions";
import * as Types from "./TypeOfActions";

// eslint-disable-next-line no-unused-vars
let initialState = {
  watched: JSON.parse(window.localStorage.watched),
  watchedList: JSON.parse(window.localStorage.watched),
};

// eslint-disable-next-line import/no-anonymous-default-export
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_WATCHED_LIST:
      return {
        ...state,
        watchedList: [action.payload, ...state.watchedList],
      };
    case Types.REMOVE_FROM_WATCHED_LIST:
      return {
        ...state,
        watchedList: state.watchedList.filter(
          (r) => r.imdbID !== action.payload.imdbID
        ),
      };
    case Types.ADD_TO_WATCHED:
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case Types.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (r) => r.imdbID !== action.payload.imdbID
        ),
      };
    case Types.MOVE_TO_WATCHED:
      return {
        ...state,
        watched: [action.payload, ...state.watched],
        watchedList: state.watchedList.filter(
          (r) => r.imdbID !== action.payload.imdbID
        ),
      };

    default:
      return state;
  }
};
export default reducer;
