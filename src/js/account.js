import { loadHeaderFooter, searchNow } from "./utilities.mjs";
import { getTrending, getMoviePoster } from "./services.mjs";

loadHeaderFooter();
searchNow();

function renderListItem(item) {
  const list = document.querySelector(".watchList");

  const card = document.createElement("div");
  const link = document.createElement("a");
  const poster = document.createElement("img");
  const title = document.createElement("h1");
  const date = document.createElement("p");
  const time = document.createElement("p");
  const remove = document.createElement("button");
  const section = document.createElement("section");

  remove.classList.add("listBtn");
  // remove.setAttribute("id", "listBtn");
  remove.setAttribute("id", item[0]);
  card.classList.add("card");
  card.setAttribute("id", item[0]);

  link.href = "../movieDetail.html?movie=" + item[0];
  poster.src = "https://image.tmdb.org/t/p/original/" + item[2];
  poster.alt = item[1];
  title.innerText = item[1];
  remove.innerHTML = "Remove From Watch List";
  date.innerHTML = new Date(item[4]).getFullYear();
  time.innerHTML = item[3] + " minutes";
  link.append(poster);
  section.append(title, date, time, remove);
  card.append(link, section);
  list.append(card);
}
function renderList() {
  let list = localStorage.getItem("wishlist");
  let newList = JSON.parse(list);
  if (newList.length === 0) {
    const watchlist = document.querySelector(".watchList");
    const message = document.createElement("h1");
    message.innerText =
      "There's nothing here . . . so sad . . . Time to find your next great movie!";
    watchlist.append(message);
  } else {
    newList.forEach((item) => {
      renderListItem(item);
    });
  }
}

renderList();
let buttons = document.querySelectorAll(".listBtn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("listBtn")) {
      const movie = event.currentTarget.getAttribute("id");

      let list = localStorage.getItem("wishlist");
      let newList = JSON.parse(list);
      newList.forEach((item) => {
        if (item[0] == movie) {
          const removed = newList.findIndex((element) => element[0] == movie);
          newList.splice(removed, 1);
          localStorage.setItem("wishlist", JSON.stringify(newList));
          document.location.reload();
        }
      });
    }
  });
});

async function renderTrending() {
  let list = await getTrending();

  let options = list.results;
  const trending = document.querySelector(".trending");

  options.map(async (item) => {
    const img = document.createElement("img");
    const link = document.createElement("a");

    let poster = await getMoviePoster(item.id);
    let array = poster.posters[0];
    let url = array.file_path;

    link.href = "../movieDetail.html?movie=" + item.id;
    img.src = "https://image.tmdb.org/t/p/original" + url;
    img.alt = item.title;
    link.append(img);
    trending.append(link);
  });
}

renderTrending();
