
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US&with_genres=';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdmODAwNmZiZmI0YTIxZDMyMjViZjI5NGVmZDg4NSIsInN1YiI6IjY1NTY4NmFmNTM4NjZlMDBmZjA3N2MxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vel-Up8nm_jVB-3y_CXdcZ8z5oYFkl7OGJdClDbVQWY";
const posterUrl = 'https://api.themoviedb.org/3/movie/';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?query=';
const personUrl = 'https://api.themoviedb.org/3/search/person?query=';
const imageUrl = 'https://api.themoviedb.org/3/person/';

export async function getMoviesByGenre(genre) {
    const selections = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
        },
    };
    
    return await fetch(url + genre, selections)
        .then(res => res.json())
        .then(object => {return object})
        .catch(err => console.error('error:' + err));
}


export async function getMoviePoster(movie){
    const selections = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
        },
    };
    return await fetch(posterUrl + movie + "/images?language=en", selections)
        .then(res => res.json())
        .then(object => { return object });
        
  
}

export async function getMovieDetails(id) {
    const selections = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return await fetch(posterUrl + id + "?language=en-US", selections)
        .then(response => response.json())
        .then(object => { return object })
        .catch(err => console.error(err));
}

export async function getCredits(id) {
    const selections = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return await fetch(posterUrl + id +"/credits?language=en-US", selections)
        .then(response => response.json())
        .then(object => {return object})
        .catch(err => console.error(err));
}

export async function getMovieBySearch(input) {
    const selections = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return await fetch(searchUrl + input +"&include_adult=false&language=en-US", selections)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(object => {return object})
        .catch(err => console.error(err));
}


export async function getMoviePosterBySearch(input) {
    const selections = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return await fetch(posterUrl + input +"/images?language=en", selections)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(object => {return object})
        .catch(err => console.error(err));
}

export async function getActorByName(input) {
    const selections = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return await fetch(personUrl + input +"&include_adult=false&language=en-US", selections)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(object => {return object})
        .catch(err => console.error(err));
}
export async function getPersonImageBySearch(input) {
    const selections = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return await fetch(imageUrl + input +"/images", selections)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(object => {return object})
        .catch(err => console.error(err));
}