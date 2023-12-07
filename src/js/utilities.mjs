
async function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  };
}

export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear && parentElement !== null) {
    parentElement.innerHTML = "";
  }
  const htmlString = await templateFn(data);
  if (parentElement !== null) {
    parentElement.insertAdjacentHTML(position, htmlString);
  }
  if (callback) {
    callback(data);
  }
}

export async function loadHeaderFooter() {
  const headerTemplateFn = await loadTemplate("/topBottom/header.html");
  const footerTemplateFn = await loadTemplate("/topBottom/footer.html");
  const headerEl = document.querySelector("#main-header");
  const footerEl = document.querySelector(".footer");
  await renderWithTemplate(headerTemplateFn, headerEl);
  await renderWithTemplate(footerTemplateFn, footerEl);

 
}
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear && parentElement !== null) {
    parentElement.innerHTML = "";
  }
  console.log(list);
  const htmlString = list.map(templateFn);
  
  if (parentElement !== null) {
    parentElement.insertAdjacentHTML(position, htmlString.join(""));
  }
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function alertMessage(message, scroll = true, duration = 3000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
  setTimeout(function () {
    main.removeChild(alert);
  }, duration);
}

export function searchNow() {
    document.querySelector("#searchMovie").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "../search.html";
        let input = document.getElementById("MovieInput").value;
        sessionStorage.setItem("searchResults", input);
    })
};