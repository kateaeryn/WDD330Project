import { loadHeaderFooter } from "./utilities.mjs";
import { searchInput, personInput } from "./search.mjs";

loadHeaderFooter();

document.querySelector("#searchMovie").addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("MovieInput").value;
  const grid = document.querySelector(".search-movie-grid");
  grid.remove();
  searchInput(input);
});

document.querySelector("#searchPerson").addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("PersonInput").value;
  const grid = document.querySelector(".search-movie-grid");
  grid.remove();
  personInput(input);
});

// window.onhashchange = function () {
//     if (window.performance && window.PerformanceNavigationTiming.type === window.PerformanceNavigationTiming.back_forward) {
//         const previous = localStorage.getItem("movieResults");
//         searchInput(previous);
//         console.log("back button");
//     }
// }
