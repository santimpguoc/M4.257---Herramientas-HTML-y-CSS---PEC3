const e=document.querySelectorAll(".carrusel img"),t=document.querySelector(".prev"),n=document.querySelector(".next");let c=0;function l(t){e.forEach((e,n)=>{e.classList.toggle("active",n===t)})}function r(){l(c=(c+1)%e.length)}setInterval(r,5e3),n.addEventListener("click",r),t.addEventListener("click",function(){l(c=(c-1+e.length)%e.length)}),l(c);
//# sourceMappingURL=index.dcfaed90.js.map
