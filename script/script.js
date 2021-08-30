//MAIN CAROUSELL
const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
const images = document.querySelector(".carousel").children;
let index = 0;
const totalImages = images.length;

left.addEventListener("click", () => { nextImage("prev"); });
right.addEventListener("click", () => { nextImage("next"); });

function nextImage(direction) {
  if (direction == 'next') {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}
setInterval(function () {
  nextImage("next");
}, 8000);
//MAIN CAROUSELL END
//SHOW BY CATEGORY AND LOCATION
const modal=document.querySelector(".modal-view");
const categItms = document.querySelector(".categories-items");
const dealItms=document.querySelector(".inner-bot");

function showItems(type,location) {
  for (const item of allItems) {
    if (item["categories"].includes(type)) {
      displayItems(item,location);
    }
  }
};
showItems("Coffee Bean",categItms);
const categories = document.querySelectorAll(".active");
const listCategories = document.querySelector(".type-categories");
listCategories.addEventListener("click", function addEvent(e) {
  categItms.innerHTML = "";
  showItems(e.target.innerText,categItms);
  
  for (const li of listCategories.children) {
    li.classList.remove("active");
  
  }
  e.target.classList.add("active");

  localStorage.setItem("categ",e.target.innerText);
  
});
//SHOP BY CATERGORIES END
//SHOW BY FILTER AND LOCATION
function showItemDeals(){
  let i=0;
  const dealss=allItems.filter(item => Number(item.discount) > 2);
  for(const deal of dealss){
    function showItemsd(item,location) {
      displayItems(item,location)  
    };
    showItemsd(deal,dealItms);
    i++;
    console.log(i);
    if(i>5 && i<7){
      break;
    }
  }
}
showItemDeals()
//SHOW ITMS

//CATEG ZONE ANTI-REFRESH
window.onload = function() {
    var reloading = localStorage.getItem("reloading");
    if (reloading) {
      categItms.innerHTML = "";
      const categClicked= localStorage.getItem('categ');
      showItems(categClicked,categItms);
      for (const li of listCategories.children) {
        if(li.innerText==categClicked)
        {li.classList.add("active");}else{li.classList.remove("active");}
      
      }
    }
};window.onload()
//

let btnsdeal = document.querySelectorAll(".dealarr");
let product = document.getElementsByClassName('product-item');
btnsdeal[0].addEventListener("click",function(){left_mover(100,product)});
btnsdeal[1].addEventListener("click",function(){right_mover(100,200,product)});
  
 let btnsblog=document.querySelectorAll(".arrow-blog");
 let blogproduct= document.getElementsByClassName('container-blog');
 btnsblog[0].addEventListener("click",function(){left_mover(33,blogproduct)});
 btnsblog[1].addEventListener("click",function(){right_mover(33,67,blogproduct)});

//CAROUSELL ITEMS BUTTONS MAIN PAGE END

const imageSlideBtns=document.querySelectorAll(".image-slide-btn");
imageSlideBtns[1].addEventListener("click",()=>{
  localStorage.setItem("categsort","Coffee Bean");
  location.href="./shop.html";
});
imageSlideBtns[0].addEventListener("click",()=>{
  localStorage.setItem("categsort","Health & Safety");
  location.href="./shop.html";
});

