import{l as d,s as m}from"./utilities-40eb7b4b.js";import{g as u,a as p}from"./services-069dd6e2.js";d();m();function g(e){const r=document.querySelector(".watchList"),t=document.createElement("div"),n=document.createElement("a"),o=document.createElement("img"),s=document.createElement("h1"),i=document.createElement("p"),c=document.createElement("p"),a=document.createElement("button"),l=document.createElement("section");a.classList.add("listBtn"),a.setAttribute("id",e[0]),t.classList.add("card"),t.setAttribute("id",e[0]),n.href="../movieDetail.html?movie="+e[0],o.src="https://image.tmdb.org/t/p/original/"+e[2],o.alt=e[1],s.innerText=e[1],a.innerHTML="Remove From Watch List",i.innerHTML=new Date(e[4]).getFullYear(),c.innerHTML=e[3]+" minutes",n.append(o),l.append(s,i,c,a),t.append(n,l),r.append(t)}function h(){let e=localStorage.getItem("wishlist"),r=JSON.parse(e);if(r.length==0){const t=document.querySelector(".watchList"),n=document.createElement("h1");n.innerText="There's nothing here . . . so sad . . . Time to find your next great movie!",t.append(n)}else r.forEach(t=>{g(t)})}h();let f=document.querySelectorAll(".listBtn");f.forEach(e=>{e.addEventListener("click",r=>{if(r.preventDefault(),r.target.classList.contains("listBtn")){const t=r.currentTarget.getAttribute("id");let n=localStorage.getItem("wishlist"),o=JSON.parse(n);o.forEach(s=>{if(s[0]==t){const i=o.findIndex(c=>c[0]==t);o.splice(i,1),localStorage.setItem("wishlist",JSON.stringify(o)),document.location.reload()}})}})});async function E(){let r=(await u()).results;const t=document.querySelector(".trending");r.map(async n=>{const o=document.createElement("img"),s=document.createElement("a");let a=(await p(n.id)).posters[0].file_path;s.href="../movieDetail.html?movie="+n.id,o.src="https://image.tmdb.org/t/p/original"+a,o.alt=n.title,s.append(o),t.append(s)})}E();
