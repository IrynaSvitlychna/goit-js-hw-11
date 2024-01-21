import{S as f,i as g}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="/goit-js-hw-11/assets/bi_x-octagon-cafef662.svg",d=document.querySelector("#form"),y=document.querySelector("#searchInput"),n=document.querySelector(".search-btn"),u=document.querySelector(".gallery"),b=document.querySelector(".container");let L=new f(".gallery a",{captionsData:"alt",captionDelay:250,className:"lightbox-on"});const l={title:"",iconUrl:`${h}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",theme:"dark",messageSize:"16px",progressBarColor:"#B5EA7C",position:"topRight"};d.addEventListener("submit",v);function v(o){o.preventDefault(),u.innerHTML="",S();const i=new URLSearchParams({key:"41942157-8ce243761fb563c2a1b85d8a4",q:y.value,orientation:"horizontal",per_page:9,image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${i}`).then(s=>s.json()).then(s=>{const r=s.hits;if(r.length===0)throw new Error("There are no images matching your search query. Please try again!");q(r),c()}).catch(s=>{console.log(s),g.error(l,l.message=`Sorry! ${s.message}`),c()})}function q(o){const i=o.toSorted((s,r)=>r.likes-s.likes).map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:a,comments:p,downloads:m})=>`<li class="gallery-item"><div class='image-wrapper'>
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${e}"
        width="360"
        height="200"
      />
    </a>
    <div class="gallery-item-description">
        <ul class='gallery-item-description-list'>
            <li class='description-list-item'>
                <p class='description'>Likes</p>
                <p class='quantity'>${t}</p>
            </li>
            <li class='description-list-item'>
                <p class='description'>Views</p>
                <p class='quantity'>${a}</p>
            </li>
            <li class='description-list-item'>
                <p class='description'>Comments</p>
                <p class='quantity'>${p}</p>
            </li>
            <li class='description-list-item'>
                <p class='description'>Downloads</p>
                <p class='quantity'>${m}</p>
            </li>
        </ul>
      </div>
    </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",i),L.refresh()}function S(){b.insertAdjacentHTML("afterbegin",'<div class="loader"></div>'),n.disabled=!0,n.classList.add("search-btn-disabled")}function c(){document.querySelector(".loader").remove(),n.disabled=!1,n.classList.remove("search-btn-disabled"),d.reset()}
//# sourceMappingURL=commonHelpers.js.map
