import { ADD_MOVIE, GETRATE, GETTITLE } from "../types/movietypes";

export const searchByTitle = title => {
  return {
    type: GETTITLE,
    payload: title,
  };
};
export const searchByRate = rate => {
  return {
    type: GETRATE,
    payload: rate,
  };
};
export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};
