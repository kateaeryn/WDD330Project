import { getActorByName, getPersonProfile } from "./services.mjs";
import { loadHeaderFooter, searchNow } from "./utilities.mjs";

loadHeaderFooter();
searchNow();

const id = getPersonId("person");
console.log(id);

let profile = await getPersonProfile(id);
console.log(profile);

function getPersonId() {
  const id = window.location.href.split("=").pop();
  return id;
}

export function renderPerson(profile) {
  const card = document.querySelector(".personCard");
  const poster = document.querySelector(".detailImage");
  const tag = document.querySelector(".name");
  const birth = document.querySelector(".birthday");
  const place = document.querySelector(".birthplace");
  const bio = document.querySelector(".bio");

  poster.src = "https://image.tmdb.org/t/p/original" + profile.profile_path;
  poster.alt = profile.name;
  tag.innerText = profile.name;
  birth.innerText = profile.birthday;
  place.innerText = profile.place_of_birth;
  bio.innerText = profile.biography;

  card.append(poster, tag, birth, place, bio);
}

renderPerson(profile);
