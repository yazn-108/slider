"use strict";
let sliderImages = Array.from(document.querySelectorAll(".slider img"));
let imgCount = sliderImages.length;
let imgNumber = 3;
let numOfImg = document.querySelector(".number");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let indicators = document.querySelector(".indicators")
    let ul = document.createElement("ul");
    ul.id = "bullets";
    for (let i = 0; i < imgCount; i++) {
        let li = document.createElement("li");
        li.setAttribute("data-index",i+1);
        li.textContent = i+1;
        ul.appendChild(li);}
indicators.appendChild(ul);

let allLi = Array.from(document.querySelectorAll("#bullets li"));
allLi.forEach((e) => {
    e.addEventListener("click",function(){
        imgNumber = parseInt(this.getAttribute("data-index"));
        checker();
    });
});

function removeActive(active){
    active.forEach((ele) => {ele.classList.remove("active");});
};
function addActive(active){active[imgNumber -1].classList.add("active");};

function checker(){
    numOfImg.textContent = `slider # ${imgNumber} Of ${imgCount}`;
    removeActive(sliderImages);
    removeActive(allLi);
    addActive(sliderImages);
    addActive(allLi);
    imgNumber == 1?prev.classList.add("disabled")
    :prev.classList.remove("disabled");
    imgNumber == imgCount?next.classList.add("disabled")
    :next.classList.remove("disabled");
};
checker();

next.addEventListener("click",() => {
if(!next.classList.contains("disabled")){imgNumber++;checker();};
});
prev.addEventListener("click",() => {
if(!prev.classList.contains("disabled")){imgNumber--;checker();};
});
