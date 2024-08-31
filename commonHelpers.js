import{a as q,h as E,i as l}from"./assets/vendor-451007fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const c=document.querySelector(".scrollup-btn"),B=function(){window.scrollY<300?c.classList.add("visually-hidden"):c.classList.remove("visually-hidden")};window.addEventListener("scroll",B);c.addEventListener("click",M);function M(){window.scrollTo({top:0,behavior:"smooth"})}const h=document.querySelector(".js-header-menu"),P=getComputedStyle(document.documentElement),$=parseInt(P.getPropertyValue("--breakpoint-md").trim());function C(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.removeEventListener("click",b)})}function T(){document.querySelectorAll(".js-toggle-menu-btn").forEach(t=>{t.addEventListener("click",b)})}function b(){h.classList.toggle("open"),document.body.classList.toggle("no-scroll")}function L(){window.innerWidth>=$?(h.classList.remove("open"),document.body.classList.remove("no-scroll"),C()):T()}const k=document.querySelector(".quote-text-wrapper"),v=document.querySelector(".filter-list"),u=document.querySelector(".pagination-section");function d(e){const t=e.results.map(o=>`
        <li class="filter-item">
          <button type="submit" class="filter-btn untreated data-filter=${o.filter} data-name=${o.name}">
            <div class="filter-container">
              <img class="filter-img" src="${o.imgURL}" alt="${o.name}" width=335 height=225>
              <div class="filter-overlay"></div>
              <p class="filter-name">${o.name}</p>
              <p class="filter-filter">${o.filter}</p>
            </div>  
          </button>
        </li>
      `).join("");v.insertAdjacentHTML("beforeend",t)}function w(e){let t="";for(let o=1;o<=e.totalPages;o++)t+=`
      <button type="button" class="pagination-btn untreated${o===1?" active":""}" data-page=${o}>${o}</button>
    `;u.insertAdjacentHTML("beforeend",t)}function g(e){const t=`
    <p class="quote-text">${e.quote}</p>
    <p class="quote-author">${e.author}</p>
  `;k.insertAdjacentHTML("beforeend",t)}function A(e){document.querySelectorAll(".nav-btn").forEach(o=>o.classList.remove("decorated")),e.target.classList.add("decorated")}function f(e){v.innerHTML="",e&&(u.innerHTML="")}function O(e){u.querySelectorAll(".pagination-btn").forEach(o=>o.classList.remove("active")),e.classList.add("active"),window.scrollTo(0,0)}const m=q.create({baseURL:"https://your-energy.b.goit.study/api/",timeout:3e3});async function p({page:e=1,limit:t=12,filter:o}){var s,n;try{return(await m.get("filters",{params:{page:e,limit:t,filter:o}})).data}catch(r){throw new Error(((n=(s=r.response)==null?void 0:s.data)==null?void 0:n.message)||r.message)}}async function j(){var e,t;try{return(await m.get("quote")).data}catch(o){throw new Error(((t=(e=o.response)==null?void 0:e.data)==null?void 0:t.message)||o.message)}}const i={filter:"Muscles",page:1,limit:null};async function H(e){A(e),f(!0),i.page=1,i.filter=e.target.dataset.filter;const t=await p(i);d(t),w(t)}async function N(){const e=E().format("L"),t=JSON.parse(localStorage.getItem("quote-data"));if(!t||t.date!==e){const o=await j();g(o);const s={};s.date=e,s.quote=o.quote,s.author=o.author,localStorage.clear("quote-data"),localStorage.setItem("quote-data",JSON.stringify(s))}else g(t)}async function F(){const e=window.innerWidth;let t=null;if(e>1439?t=12:t=9,t!==i.limit){f(!0),i.page=1,i.limit=t;const o=await p(i);d(o),w(o)}}async function I(e){f();const t=e.target;i.page=t.dataset.page;const o=await p(i);d(o),O(t)}async function D(e){var t,o;try{return(await m.post("subscription",{email:e})).data}catch(s){throw new Error(((o=(t=s.response)==null?void 0:t.data)==null?void 0:o.message)||s.message)}}l.settings({class:"custom-toast",position:"topRight",maxWidth:432,color:"#FFFFFF",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",displayMode:1});function x(e){l.info({message:e,backgroundColor:"#6C8CFF"})}function U(e){l.error({message:e,backgroundColor:"#EF4040"})}const S=document.querySelector(".subscribe__form"),y=S.querySelector('[name="email"]');async function W(e){if(e.preventDefault(),!!y.value)try{const t=y.value,o=await D(t);x(o.message),S.reset()}catch(t){U(t.message)}}const _=document.querySelector(".main-nav"),z=document.querySelector(".pagination-section"),Q=document.querySelector(".subscribe__form");window.addEventListener("resize",()=>{L(),F()});L();F();N();_.addEventListener("click",H);z.addEventListener("click",I);Q.addEventListener("submit",W);
//# sourceMappingURL=commonHelpers.js.map
