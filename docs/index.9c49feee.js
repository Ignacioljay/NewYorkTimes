const t=document.getElementById("blog-container"),e=document.getElementById("toggle-button"),n=document.getElementById("categories");async function a(t="world"){try{let e=`https://api.nytimes.com/svc/topstories/v2/${t}.json?api-key=IaLdA2fdWJUMyriRlfFtMEiWQw3A0H8Y`,n=await fetch(e);if(!n.ok)throw Error(`HTTP error! status: ${n.status}`);return(await n.json()).results}catch(t){return console.error("Error fetching random news",t),[]}}async function o(e){try{var n;n=await a(e),t.innerHTML="",n.forEach(e=>{let n=document.createElement("div");n.classList.add("blog-card");let a=document.createElement("img");a.src=e.multimedia?e.multimedia[0].url:"https://via.placeholder.com/280x180.png?text=No+Image+Available",a.alt=e.title||"No title";let o=document.createElement("h2");o.textContent=e.title||"Untitled Article";let r=document.createElement("p");r.textContent=e.abstract||"No description available.",n.appendChild(a),n.appendChild(o),n.appendChild(r),t.appendChild(n)})}catch(t){console.error("Error displaying content",t)}}o(),document.querySelectorAll(".category-button").forEach(t=>{t.addEventListener("click",t=>{o(t.target.dataset.category)})}),e.addEventListener("click",()=>{let t="none"!==n.style.display;n.style.display=t?"none":"flex"}),window.innerWidth<=600&&(n.style.display="none");
//# sourceMappingURL=index.9c49feee.js.map
