import { getGenreId, getMoviesByGenre } from "./services.mjs";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdmODAwNmZiZmI0YTIxZDMyMjViZjI5NGVmZDg4NSIsInN1YiI6IjY1NTY4NmFmNTM4NjZlMDBmZjA3N2MxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vel-Up8nm_jVB-3y_CXdcZ8z5oYFkl7OGJdClDbVQWY";
const url = 'https://api.themoviedb.org/3/movie/';
var genres;

const urlId = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

// export async function genreId(genre) {
//     genre = genre ?? window.location.search.split("?q=")[1];
//     const genreList = getGenreId();
//     console.log(genreList);
//     if (genre == genreList) {
//         return genre;
//     }
    
// }

export default async function genreList(genre) {
    genre = genre ?? window.location.search.split("?q=")[1];
    console.log(genre);
    genres = await getMoviesByGenre(genre);
    console.log(genres);
    const grid = document.querySelector('.movie-list');
    const array = genres.results;
    const movie = array.forEach(element => {
        // genreId(element);
        const movie_card = document.createElement('li');
        const link = document.createElement('a');
        // const picture = document.createElement('picture');
        // const img = document.createElement('img');
        
        link.href = "../movieDetail.html?movie=" + element.id;
        // const posters = getMoviePoster(element.id);
        // posters.map(function (img) {
        //     img.src = img.poster_path;
        // })        
        // picture.srcset = posters.posters;
        // img.src = posters.posters; 
        // img.alt = element.name;
        // picture.append(element.name);
       
        movie_card.append(link, );
        link.innerText = element.title;
        grid.append(movie_card);
    });
    
}

console.log(getGenreId());
