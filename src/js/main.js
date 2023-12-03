import { loadHeaderFooter } from "./utilities.mjs";

loadHeaderFooter();

import searchInput from "./search.mjs";

document.querySelector(".searchBtn").addEventListener("click", function () {
 let input = document.getElementById("searchMovie").value;   
    if (input !== null) {
        searchInput(input)

    } 
});

