import { loadHeaderFooter, searchNow } from "./utilities.mjs";
import { searchInput } from "./search.mjs";

loadHeaderFooter();
searchNow();

let input = sessionStorage.getItem("searchResults");
searchInput(input);

