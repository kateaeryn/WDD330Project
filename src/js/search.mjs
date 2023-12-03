import { getMovieBySearch } from "./services.mjs";

export default async function searchInput(input) {
    console.log(input);
    let list =  await getMovieBySearch(input);
    // let array = [list.results];
    console.log(list);
    const grid = document.querySelector('.movie-grid');
    
        
   array.map(async (input) => {
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