import { loadHeaderFooter } from "./utilities.mjs";
import { searchInput, personInput } from "./search.mjs";


loadHeaderFooter();


document.querySelector("#searchMovie").addEventListener("click", (e)=> {
    e.preventDefault();
    let input = document.getElementById("MovieInput").value;   
   
        searchInput(input);
    
        
    
});

document.querySelector("#searchPerson").addEventListener("click", (e)=> {
    e.preventDefault();
    let input = document.getElementById("PersonInput").value;   
    console.log(input);
    personInput(input);
        
    
});