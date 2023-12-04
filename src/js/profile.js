import { loadHeaderFooter } from "./utilities.mjs";

loadHeaderFooter();

export function renderPerson(input) {
  const card = document.querySelector(".detailCard");
  const poster = document.querySelector(".detailImage");
  const tag = document.querySelector(".name");
  const birth = document.querySelector(".birthday");
  const place = document.querySelector(".birthplace");
  const bio = document.querySelector(".bio");

  poster.src = "https://image.tmdb.org/t/p/original" + input.profile_path;
  poster.alt = input.name;
  tag.innerText = `"${input.name}"`;
  birth.innerText = input.birthday;
  place.innerText = input.place_of_birth;
  bio.innerText = input.biography;

  card.append(poster, tag, birth, place, bio);
}
