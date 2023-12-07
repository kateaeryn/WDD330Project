import {  loadHeaderFooter, searchNow } from "./utilities.mjs";

loadHeaderFooter();
searchNow();

function renderListItem(item) {
    const list = document.querySelector(".watchList");
    
    const card = document.createElement("div");
    const link = document.createElement("a");
    const poster = document.createElement("img");
    const title = document.createElement("h1");
    const remove = document.createElement("button");
    
    remove.classList.add("listBtn");
    remove.setAttribute("id","listBtn");
    remove.setAttribute("idNum",item[0]);
    card.classList.add("card");
    card.setAttribute("id", item[0]);

 link.href = "../movieDetail.html?movie=" + item[0];
  poster.src = "https://image.tmdb.org/t/p/original/" + item[2];
  poster.alt = item[1];
  title.innerText = item[1];
    remove.innerHTML = "Remove From Watch List";
    link.append(poster, title);
    card.append(link, remove);
  list.append(card);

}
function renderList() {
    let list = localStorage.getItem("wishlist");
    let newList = JSON.parse(list);
    if (newList.length == 0) {
        const list = document.querySelector(".watchList");
        const message = document.createElement("h1");
        message.innerText = "Nothing to see here . . . so sad . . . Time to find your next great movie!";
        list.append(message);
    } else {
        newList.forEach(item => {
            renderListItem(item)
        })
    }
};

renderList();
let buttons = document.querySelectorAll(".listBtn");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.classList.contains("listBtn")) {
            const movie = event.currentTarget.getAttribute("idNum");
            // const card = document.querySelector(".card");
            console.log(movie);
            let list = localStorage.getItem("wishlist");
            let newList = JSON.parse(list);
            newList.forEach(item => {
                if (item[0] == movie) {
                    const removed = newList.findIndex(item => item[0] == movie);
                    console.log(removed);
                    newList.splice(removed, 1);
                    localStorage.setItem("wishlist", JSON.stringify(newList));
                    document.location.reload();
                    console.log(newList);
            
                }
            })
   
        }
    })
});