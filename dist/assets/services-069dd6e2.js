const r="https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US&with_genres=",o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdmODAwNmZiZmI0YTIxZDMyMjViZjI5NGVmZDg4NSIsInN1YiI6IjY1NTY4NmFmNTM4NjZlMDBmZjA3N2MxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vel-Up8nm_jVB-3y_CXdcZ8z5oYFkl7OGJdClDbVQWY",a="https://api.themoviedb.org/3/movie/",c="https://api.themoviedb.org/3/search/multi?query=",s="https://api.themoviedb.org/3/person/",i="https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US";async function h(n){const t={method:"GET",headers:{Authorization:`Bearer ${o}`,accept:"application/json"}};return await fetch(r+n,t).then(e=>e.json()).then(e=>e).catch(e=>console.error("error:"+e))}async function l(n){const t={method:"GET",headers:{Authorization:`Bearer ${o}`,accept:"application/json"}};return await fetch(a+n+"/images?language=en",t).then(e=>e.json()).then(e=>e)}async function u(n){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o}`}};return await fetch(a+n+"?language=en-US",t).then(e=>e.json()).then(e=>e).catch(e=>console.error(e))}async function d(n){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o}`}};return await fetch(a+n+"/credits?language=en-US",t).then(e=>e.json()).then(e=>e).catch(e=>console.error(e))}async function p(n){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o}`}};return await fetch(c+n+"&include_adult=false&language=en-US",t).then(e=>e.json()).then(e=>e).catch(e=>console.error(e))}async function g(n){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o}`}};return await fetch(a+n+"/images?language=en",t).then(e=>e.json()).then(e=>e).catch(e=>console.error(e))}async function m(n){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o}`}};return await fetch(s+n,t).then(e=>e.json()).then(e=>e).catch(e=>console.error(e))}async function j(){const n={method:"GET",headers:{Authorization:`Bearer ${o}`,accept:"application/json"}};return await fetch(i,n).then(t=>t.json()).then(t=>t).catch(t=>console.error("error:"+t))}export{l as a,m as b,u as c,d,p as e,g as f,j as g,h};
