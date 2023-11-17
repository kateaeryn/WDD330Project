import { loadHeaderFooter, getParam } from "./utilities.mjs";
import genreList from "./moviegrid.mjs";

loadHeaderFooter();

const genres = getParam('genre');
genreList(genres);