import { loadHeaderFooter } from "./utilities.mjs";
import searchInput from "./search.mjs";

loadHeaderFooter();


document.querySelector("#searchNow").addEventListener("click", function () {
 let input = document.getElementById("searchMovie").value;   
    if (input !== null) {
        searchInput(input)
        
    } 
});
