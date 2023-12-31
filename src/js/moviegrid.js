import { loadHeaderFooter, getParam, searchNow } from "./utilities.mjs";
import genreList from "./moviegrid.mjs";

loadHeaderFooter();
searchNow();

const genres = getParam("genre");

genreList(genres);

function getGenreId() {
  const id = window.location.href.split("=").pop();
  const newid = id.replace("20", "");
  const newNewid = newid.replace("%", " ");
  return newNewid;
}

const pageGenre = getGenreId();
document.querySelector(".genrePage").innerHTML = pageGenre;
