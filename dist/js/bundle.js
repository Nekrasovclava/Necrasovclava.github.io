const btn2=document.getElementById("btn2"),p2=document.getElementById("p2");function open2(){"none"==p2.classList?(p2.classList.remove("none"),p2.classList.add("glass"),p2.animate({transform:["translateX(-950px)","translatex(0px)"]},{duration:2e3})):(p2.classList.remove("glass"),p2.classList.add("none"))}const btn1=document.getElementById("btn1"),p1=document.getElementById("p1");function open1(){"none"==p1.classList?(p1.classList.remove("none"),p1.classList.add("glass"),p1.animate({transform:["translateX(-950px)","translatex(0px)"]},{duration:2e3})):(p1.classList.remove("glass"),p1.classList.add("none"))}const btn3=document.getElementById("btn3"),p3=document.getElementById("p3");function open3(){"none"==p3.classList?(p3.classList.remove("none"),p3.classList.add("glass"),p3.animate({transform:["translateX(-950px)","translatex(0px)"]},{duration:2e3})):(p3.classList.remove("glass"),p3.classList.add("none"))}btn1.addEventListener("click",open1),btn2.addEventListener("click",open2),btn3.addEventListener("click",open3);const smoothScrollLinks=document.querySelectorAll(".navigation__list-item");for(let t of smoothScrollLinks)t.addEventListener("click",t=>{t.preventDefault();t=t.target;document.querySelector(t.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})});const form=document.getElementById("form");form.addEventListener("submit",t=>{t.preventDefault();let e=Array.from(t.target.elements).map(t=>({name:t.name,value:t.value}));e=e.filter(t=>!!t.name);const n=new FormData;e.forEach(t=>{n.append(t.name,t.value)}),console.log(n)}),$(".navigation__title").on("click",function(){$(".navigation__list ").is(":hidden")?$(".navigation__list ").slideDown("slow"):$(".navigation__list ").slideUp()});