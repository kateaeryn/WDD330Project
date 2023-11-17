
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdmODAwNmZiZmI0YTIxZDMyMjViZjI5NGVmZDg4NSIsInN1YiI6IjY1NTY4NmFmNTM4NjZlMDBmZjA3N2MxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vel-Up8nm_jVB-3y_CXdcZ8z5oYFkl7OGJdClDbVQWY";
const posterUrl = 'https://api.themoviedb.org/3/movie/';
const urlId = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

export async function getMoviesByGenre(genre) {
    const selections = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
        },
    };
    
    return await fetch(url + genre, selections)
        .then(res => res.json());
        // .then(json => console.log(json))
        // .catch(err => console.error('error:' + err));
}


export async function getMoviePoster(movie){
    const selections = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
        },
    };
    return await fetch(posterUrl + movie + '/images', selections);
  
}

// export async function getGenreId(){
//     const response = await fetch("json/genreId.json")
//     const list = await response.json()
//     return list;
           
// };
