import { loadHeaderFooter, getParam } from "./utilities.mjs";
import genreList from "./moviegrid.mjs";

loadHeaderFooter();

const genres = getParam("genre");

genreList(genres);

function getGenreId() {
  const id = window.location.href.split("=").pop();
  return id;
}

const pageGenre = getGenreId();
document.querySelector(".genrePage").innerHTML = pageGenre;
