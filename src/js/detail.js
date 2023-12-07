import { getMovieDetails, getCredits } from "./services.mjs";
import { loadHeaderFooter, alertMessage, searchNow } from "./utilities.mjs";

loadHeaderFooter();
searchNow();

const id = getMovieId("movie");
console.log(id);

let details = await getMovieDetails(id);
console.log(details);
const button = document.querySelector(".wishlistBtn");

function getMovieId() {
  const id = window.location.href.split("=").pop();
  return id;
}
let credits = await getCredits(id);
let crew = credits.crew;
let cast = credits.cast;

export function renderMovie(details, crew, cast) {
  const card = document.querySelector(".detailCard");
  const title = document.querySelector(".detailTitle");
  const poster = document.querySelector(".detailPoster");
  const tag = document.querySelector(".tagline");
  const overview = document.querySelector(".overview");
  const crewList = document.querySelector(".crew");
  const castList = document.querySelector(".cast");
  const creditSection = document.querySelector(".credits");
  const date = document.querySelector(".date");
  const genre = document.querySelector(".genre");
  const runtime = document.querySelector(".runtime");
  const info = document.querySelector(".info");

  title.innerHTML = details.title;
  poster.src = "https://image.tmdb.org/t/p/original" + details.poster_path;
  poster.alt = details.title;
  tag.innerText = `"${details.tagline}"`;
  overview.innerHTML = details.overview;
  date.innerHTML = new Date(details.release_date).toLocaleDateString("en-US");
  genre.innerHTML = details.genres[0].name;
  runtime.innerHTML = details.runtime + " minutes";
  
  crew.forEach((member) => {
    const crewMem = document.createElement("li");
    crewMem.innerHTML = member.job + " : " + member.name;
    crewList.append(crewMem);
  });
  cast.forEach((member) => {
    const castMem = document.createElement("li");
    castMem.innerHTML = member.name + " as " + member.character;
    castList.append(castMem);
  });
  creditSection.append(crewList, castList);
  info.append(title, tag, date, genre, runtime, overview, button);
  card.append(poster,info, creditSection);
  
}

renderMovie(details, crew, cast);

button.addEventListener("click", () => {
  let list = [];
  let movie = [details.id, details.title, details.poster_path];
  list.push(movie);
  list = list.concat(JSON.parse(localStorage.getItem("wishlist") || "[]"));
  localStorage.setItem("wishlist", JSON.stringify(list));
  alertMessage(
    `<strong>${details.title}<strong> <br> was added to your WatchList`
  );
});
