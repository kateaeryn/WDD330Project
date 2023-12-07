import { loadHeaderFooter, searchNow } from "./utilities.mjs";
import { searchInput, personInput } from "./search.mjs";

loadHeaderFooter();
searchNow();

let input = sessionStorage.getItem("searchResults");
searchInput(input);


// document.querySelector("#searchPerson").addEventListener("click", (e) => {
//   e.preventDefault();
//   let input = document.getElementById("PersonInput").value;
//   const grid = document.querySelector(".search-movie-grid");
//   grid.remove();
//   personInput(input);
// });

// window.onhashchange = function () {
//     if (window.performance && window.PerformanceNavigationTiming.type === window.PerformanceNavigationTiming.back_forward) {
//         const previous = localStorage.getItem("movieResults");
//         searchInput(previous);
//         console.log("back button");
//     }
// }
