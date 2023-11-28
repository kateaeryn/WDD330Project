import { getMoviesByGenre } from "./services.mjs";
import { getMoviePoster } from "./services.mjs";


// const location = window.location.href.split('=').pop();
// console.log(location);

export default async function genreList(genre) {
    let id = "";
    const response = await fetch("json/genreId.json")
    const list = await response.json()
    list.forEach(element => {
        if (element.name === genre) {
            id = element.id;
        } 
    }) 
    let genres = await getMoviesByGenre(id);
    
    const grid = document.querySelector('.movie-grid');
    const array = genres.results;
    
    
   array.map(async (movie) => {
        const movie_card = document.createElement('li');
        const link = document.createElement('a');
        const image = document.createElement('img');  
       const title = document.createElement('h3');

        let posters = await getMoviePoster(movie.id);
        let posArray = posters.posters[0];
        let imageUrl = posArray.file_path;
        
        
       link.href = "../movieDetail.html?movie=" + movie.id;
        image.src = "https://image.tmdb.org/t/p/original" + imageUrl; 
        image.alt = movie.title;
       title.innerText = movie.title;
       link.append(image);
       link.append(title);
       movie_card.append(link);  
        grid.append(movie_card);
    });
    
}

