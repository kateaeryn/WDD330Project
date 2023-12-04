import { getMovieBySearch } from "./services.mjs";
import { getActorByName } from "./services.mjs";
import { getMoviePosterBySearch } from "./services.mjs";



export async function searchInput(input) {
    console.log(input);
    let list =  await getMovieBySearch(input);
    console.log(list);
    let array = list.results;
    
    const grid = document.createElement('ul');
    grid.classList.add("search-movie-grid");
    const div = document.querySelector(".searchResults");
    div.append(grid);
    localStorage.setItem("movieResults", input);    
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
       localStorage.setItem("movieResults", grid.innerHTML);
    });
    
}

export async function personInput(input) {
    console.log(input);
    let list =  await getActorByName(input);
    
    let array = list.results;
    console.log(array);
    const grid = document.createElement('ul');
    grid.classList.add("search-movie-grid");
    const div = document.querySelector(".searchResults");
    div.append(grid);
    
    localStorage.setItem("peopleResults", input);    
   array.map(async (input) => {
        const movie_card = document.createElement('li');
        const link = document.createElement('a');
        const image = document.createElement('img');  
       const title = document.createElement('h3');
       
    
       if (input.profile_path == null) {
           image.src = "/images/placeholder.png";
       } else {
           image.src = "https://image.tmdb.org/t/p/original/" + input.profile_path; 
       }
        
       link.href = "../personDetail.html/?person=";
        
        image.alt = input.original_name;
       title.innerText = input.original_name;
       link.append(image);
       link.append(title);
       movie_card.append(link);  
        grid.append(movie_card);
    });
    
}