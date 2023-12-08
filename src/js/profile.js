import { getPersonProfile } from "./services.mjs";
import { loadHeaderFooter, searchNow } from "./utilities.mjs";

loadHeaderFooter();
searchNow();

const id = getPersonId("person");

let profile = await getPersonProfile(id);

function getPersonId() {
  const ident = window.location.href.split("=").pop();
  return ident;
}

export async function renderPerson(person) {
  console.log(person);
  const card = document.querySelector(".personCard");
  const poster = document.querySelector(".detailImage");
  const tag = document.querySelector(".name");
  const birth = document.querySelector(".birthday");
  const place = document.querySelector(".birthplace");
  const bio = document.querySelector(".bio");
  const info = document.querySelector(".personInfo");

  poster.src = "https://image.tmdb.org/t/p/original" + person.profile_path;
  poster.alt = person.name;
  tag.innerText = person.name;
  birth.innerText = new Date(person.birthday).toLocaleDateString("en-US");
  place.innerText = person.place_of_birth;
  bio.innerText = person.biography;

  info.append(tag, birth, place, bio);
  card.append(poster, info);
}

renderPerson(profile);
