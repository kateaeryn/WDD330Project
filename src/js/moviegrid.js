import { loadHeaderFooter, getParam } from "./utilities.mjs";
import  genreList from "./moviegrid.mjs";


loadHeaderFooter();

// const location = window.location.href.split('=').pop();
// console.log(location);
// getGenreId(location);

const genres = getParam('genre');

genreList(genres);