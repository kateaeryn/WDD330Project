import { getMoviesByGenre } from "./services.mjs";
// import { getGenreId } from "./services.mjs";


// const location = window.location.href.split('=').pop();
// console.log(location);

export default async function genreList(genre) {
    let id = "";
    const response = await fetch("json/genreId.json")
    const list = await response.json()
    console.log(list);
    console.log(genre);
    list.forEach(element => {
        if (element.name === genre) {
            console.log(element.id);
            id = element.id;
        } 
    }) 
    console.log(id);
    let genres = await getMoviesByGenre(id);
    console.log(genres);
    // let theId = getGenreId(genre);
    // console.log(id);
    const grid = document.querySelector('.movie-list');
    const array = genres.results;
    const movie = array.forEach(element => {
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

