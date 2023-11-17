// import { getMoviesByGenre } from "./services.mjs";

// const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
// const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdmODAwNmZiZmI0YTIxZDMyMjViZjI5NGVmZDg4NSIsInN1YiI6IjY1NTY4NmFmNTM4NjZlMDBmZjA3N2MxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vel-Up8nm_jVB-3y_CXdcZ8z5oYFkl7OGJdClDbVQWY";

// export async function getMovies() {
//     const selections = {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${token}`,
//             accept: 'application/json',
//         },
//     };
//    return await fetch(url, selections)
//         .then(res => res.json())
//         .then(json => console.log(json))
//         .catch(err => console.error('error:' + err));
// }
// var genres;

// function productCardTemplate(movie) {
//   return `<li class="movie-card">
//             <a href="">
//             <picture>
//               <source media="(min-width: 480px)" srcset="${}" />
//               <img
//                 src="${}"
//                 alt="Image of ${}"
//               />
//             </picture>
//               <h3 class="card__brand">${}</h3>
              
//               `;
// }

// export default async function genreList(selector, genre) {
//   const el = document.querySelector(selector);
//   genres = await getMoviesByGenre(genre);

//   if (genres.length < 1) {
//     const tents = await getProductsByCategory("tents");
//     const backpacks = await getProductsByCategory("backpacks");
//     const sleeping = await getProductsByCategory("sleeping-bags");
//     const hammocks = await getProductsByCategory("hammocks");
//   }
// }
