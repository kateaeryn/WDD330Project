import { getMovieDetails, getCredits } from "./services.mjs";
import { loadHeaderFooter, alertMessage, searchNow } from "./utilities.mjs";

loadHeaderFooter();
searchNow();

const idNum = getMovieId("movie");

const button = document.querySelector(".wishlistBtn");

function getMovieId() {
  const ident = window.location.href.split("=").pop();
  return ident;
}
let details = {};

export async function renderMovie(id) {
  details = await getMovieDetails(id);
  let credits = await getCredits(id);
  let crew = credits.crew;
  let cast = credits.cast;

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

  crew.length = 20;
  crew.forEach((member) => {
    const crewMem = document.createElement("li");
    crewMem.innerHTML = member.job + " : " + member.name;
    crewList.append(crewMem);
  });
  cast.length = 20;
  cast.forEach((member) => {
    const castMem = document.createElement("li");
    castMem.innerHTML = member.name + " as " + member.character;
    castList.append(castMem);
  });
  creditSection.append(castList, crewList);
  info.append(title, tag, date, genre, runtime, overview, button);
  card.append(poster, info, creditSection);
  if (details.tagline == "") {
    info.removeChild(tag);
  }
}

renderMovie(idNum);

button.addEventListener("click", () => {
  let list = [];
  let movie = [
    details.id,
    details.title,
    details.poster_path,
    details.runtime,
    details.release_date,
  ];
  list.push(movie);
  list = list.concat(JSON.parse(localStorage.getItem("wishlist") || "[]"));
  localStorage.setItem("wishlist", JSON.stringify(list));
  alertMessage(
    `<strong>${details.title}<strong> <br> was added to your WatchList`
  );
});
