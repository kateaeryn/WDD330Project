(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function s(i){return async function(){const t=await fetch(i);if(t.ok)return await t.text()}}async function a(i,t,r,n,e="afterbegin",o=!0){o&&t!==null&&(t.innerHTML="");const c=await i(r);t!==null&&t.insertAdjacentHTML(e,c),n&&n(r)}async function l(){const i=await s("/topBottom/header.html"),t=await s("/topBottom/footer.html"),r=document.querySelector("#main-header"),n=document.querySelector(".footer");await a(i,r),await a(t,n)}export{l};
