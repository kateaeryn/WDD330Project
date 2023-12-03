import { getMovieBySearch } from "./services.mjs";
import { getActorByName } from "./services.mjs";
import { getMoviePosterBySearch } from "./services.mjs";
import { getPersonImageBySearch } from "./services.mjs";

export async function searchInput(input) {
    console.log(input);
    let list =  await getMovieBySearch(input);
    console.log(list);
    let array = list.results;
    
    const grid = document.querySelector('.search-movie-grid');
    
        
   array.map(async (input) => {
        const movie_card = document.createElement('li');
        const link = document.createElement('a');
        const image = document.createElement('img');  
       const title = document.createElement('h3');
       
        let posters = await getMoviePosterBySearch(input.id);
        let posArray = posters.posters[0];
       
       let imageUrl = posArray.file_path;
        console.log(imageUrl); 
        
       link.href = "../movieDetail.html?movie=" + input.id;
        image.src = "https://image.tmdb.org/t/p/original" + imageUrl; 
        image.alt = input.title;
       title.innerText = input.title;
       link.append(image);
       link.append(title);
       movie_card.append(link);  
        grid.append(movie_card);
    });
    
}

export async function personInput(input) {
    console.log(input);
    let list =  await getActorByName(input);
    
    let array = list.results;
    console.log(array);
    const grid = document.querySelector('.search-movie-grid');
    
        
   array.map(async (input) => {
        const movie_card = document.createElement('li');
        const link = document.createElement('a');
        const image = document.createElement('img');  
       const title = document.createElement('h3');
       
    //     let profile = await getPersonImageBySearch(input.id);
    //     console.log(profile); 
    //    let posArray = profile;
       
    //    let imageUrl = posArray.file_path;
       if (input.profile_path == null) {
           image.src = "/images/western.png"
       } else {
           image.src = "https://image.tmdb.org/t/p/original/" + input.profile_path; 
       }
        
       link.href = "../movieDetail.html?movie=" + input.id;
        
        image.alt = input.original_name;
       title.innerText = input.original_name;
       link.append(image);
       link.append(title);
       movie_card.append(link);  
        grid.append(movie_card);
    });
    
}