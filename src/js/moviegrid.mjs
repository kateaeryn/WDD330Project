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
    console.log(genres);
    const grid = document.querySelector('.movie-list');
    const array = genres.results;
    
    
   array.map(async (movie) => {
        const movie_card = document.createElement('li');
        const link = document.createElement('a');
        const img = document.createElement('img');
        
        link.href = "../movieDetail.html?movie=" + movie.id;
       
        let posters = await getMoviePoster(movie.id);
        let posArray = posters.posters[0];
        let imageUrl = posArray.file_path;
        console.log(posArray.file_path);
        

        
        img.src = "https://image.tmdb.org/t/p/original" + imageUrl; 
        img.alt = movie.title;
       link.appendChild(img); 
       movie_card.append(link, img);     
        
        
       link.innerText = movie.title;
       
        grid.append(movie_card);
    });
    
}

