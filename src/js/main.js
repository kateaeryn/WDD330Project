import { getMoviePoster, getTrending } from "./services.mjs";
import { loadHeaderFooter, searchNow } from "./utilities.mjs";

loadHeaderFooter();

searchNow();



async function renderTrending() {
   let list = await getTrending(); 
    
    let options = list.results;
    console.log(options);
    const trending = document.querySelector(".trending");
    

    options.map(async (item) => {
        const img = document.createElement("img");
        const link = document.createElement("a");
        img.classList.add("carouselImg");

        let poster = await getMoviePoster(item.id);
        let array = poster.posters[0];
        let url = array.file_path;

        link.href = "../movieDetail.html?movie=" + item.id;
        img.src = "https://image.tmdb.org/t/p/original" + url;
        img.alt = item.title;
        link.append(img);
        trending.append(link);
    }
        )
}

renderTrending();

