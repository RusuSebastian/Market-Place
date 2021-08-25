//MODAL
const modal=document.querySelector(".modal-view");
// const modalBtns=[...document.querySelectorAll(".view-modal")];
const closeModal=document.querySelector(".close-modal");
//  modalShower();
// function modalShower(){
//  modalBtns.forEach(btnMod =>{
//      btnMod.addEventListener("click", ()=>{
//        modal.classList.add("show-modal");
//      });
//  });
//  closeModal.addEventListener("click", ()=>{
//    modal.classList.remove("show-modal");
//  });
// }
closeModal.addEventListener("click", ()=>{
  modal.classList.remove("show-modal");
});
//MODAL END



//DARKMODE 
let darkMode=localStorage.getItem('darkMode');
const chk = document.getElementById('chk');
const toggleDarkMode = () =>{
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    localStorage.setItem("darkMode", "enabled");
  }else{
    localStorage.setItem("darkMode", null);
  }
};
if(darkMode==="enabled"){
  chk.checked=true;
  document.body.classList.add('dark');
}
chk.addEventListener('change', () => {
	darkMode=localStorage.getItem('darkMode');
  toggleDarkMode();
  console.log(darkMode);
});
//DARKMODE END






//DROP DOWNS
function windowClicked (buttonClass,dropdown){
  window.onclick = function (e) {
    if (!e.target.matches(buttonClass)) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}

//cart pop-up
const cartModal=document.getElementsByClassName("widget-cart")[0];
const myCartBtn=document.getElementsByClassName("my-cart")[0];

myCartBtn.addEventListener("click", ()=>{
  cartModal.classList.toggle("show");
  // windowClicked(".cart-icon",cartModal);
});



//dropdowns
const accountBtn = document.querySelector(".account-btn");
const dropdown = document.querySelector(".dropdown-content");

accountBtn.onclick = (() =>{
  dropdown.classList.toggle("show");
  windowClicked(".account-btn",dropdown);
});

const categ = document.querySelector(".categories-button");
const categdrop = document.querySelector(".dropdown-content-categories");

categ.onclick = (() => {
  categdrop.classList.toggle("show");
  windowClicked(".categories-button",categdrop);
});
//END DROP DOWNS



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


//IMG HOVER
function hover(element, nr) {
  
  element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
}

function unhover(element, nr) {
  element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
}

//IMG HOVER END



//SHOP BY CATEGORIES
const items = [
  {
    type: ["Machines","Cup and Glass","Health & Safety","Varieties","Excels Coffee"],
    url: "./photos/items/coffee2.jpg",
    url2: "./photos/items/coffee3.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "32"
  },
  {
    type: ["Coffee Bean","Machines","Cup and Glass","Health & Safety","Varieties","Excels Coffee"],
    url: "./photos/items/coffee2.jpg",
    url2: "./photos/items/coffee3.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "10.00",
    discount: "43"
  },
  {
    type: ["Coffee Bean","Machines","Cup and Glass","Health & Safety","Varieties","Excels Coffee"],
    url: "./photos/items/coffee2.jpg",
    url2: "./photos/items/coffee3.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "12"
  },
  {
    type:["Coffee Bean","Machines","Cup and Glass","Health & Safety","Varieties","Excels Coffee"],
    url: "./photos/items/coffee2.jpg",
    url2: "./photos/items/coffee3.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "0"
  },
  {
    type: "Machines",
    url: "./photos/items/coffee1.jpg",
    url2: "./photos/items/coffee4.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "32"
  },
  {
    type: "Coffee Bean",
    url: "./photos/items/coffee3.jpg",
    url2: "./photos/items/coffee4.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "54"
  },
  {
    type: "Coffee Bean",
    url: "./photos/items/coffee4.jpg",
    url2: "./photos/items/coffee5.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "35"
  },
  {
    type: ["Health & Safety","Varieties","Coffee Bean"],
    url: "./photos/items/coffee4.jpg",
    url2: "./photos/items/coffee5.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "35"
  },
  {
    type: ["Health & Safety","Varieties"],
    url: "./photos/items/coffee4.jpg",
    url2: "./photos/items/coffee5.jpg",
    info: "Sky Blue Designer Pink Longue Tub",
    price: "100.00",
    discount: "35"
  }
];

const categItms = document.querySelector(".categories-items");
const dealItms=document.querySelector(".inner-bot");
function showItems(type,location) {
  for (const item of items) {
    if (item.type.includes(type)) {
      const product = document.createElement("div");
      product.classList.add("product-item");
      product.onmouseover = function () {
        imgProduct.src = item.url2;
      };
      product.onmouseout = function () {
        imgProduct.src = item.url;
      };
      location.appendChild(product);
      const imgProduct = document.createElement("img");
      imgProduct.setAttribute("id", "my-img");
      imgProduct.src = item.url;
      product.appendChild(imgProduct);
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      product.appendChild(productInfo);
      const pInfo = document.createElement("p");
      pInfo.classList.add("info");
      pInfo.innerText = item.info;
      productInfo.appendChild(pInfo);
      const pPrice = document.createElement("p");
      pPrice.classList.add("price");
      pPrice.innerText = `$${item.price}`;
      productInfo.appendChild(pPrice);

      //
      const oldPrice = document.createElement("span");
      oldPrice.classList.add("old-price");
      function old() {
        if (item.discount > 0) {
          oldPrice.innerText = ` $ ` + ((item.discount / 100) * item.price + Number(item.price));
        }
      };
      old();
      pPrice.appendChild(oldPrice);
      //
      const discPrice = document.createElement("span");
      discPrice.classList.add("discount");
      function disc() {
        if (item.discount > 0) {
          discPrice.innerText = `-${item.discount}%`
        }
      };
      disc();
      pPrice.appendChild(discPrice);
      //
      const productBtns = document.createElement("div");
      productBtns.classList.add("product-btns");
      productInfo.appendChild(productBtns);
      const cart = document.createElement("div");
      cart.classList.add("cart");
      productBtns.appendChild(cart);

      const cartImg=document.createElement("img");
      cartImg.src="./photos/item-hover/shopping-basket.svg";
      cart.appendChild(cartImg);

      const view = document.createElement("button");
      view.classList.add("view-modal");
      productBtns.appendChild(view);

      view.addEventListener("click",()=>{       
           modal.classList.add("show-modal");            
      });

      const viewImg=document.createElement("img");
      viewImg.src="./photos/item-hover/eye.svg";
      view.appendChild(viewImg);

      const wish = document.createElement("button");
      wish.classList.add("wishlist");
      productBtns.appendChild(wish);

      const wishImg=document.createElement("img");
      wishImg.src="./photos/item-hover/heart.svg";
      wish.appendChild(wishImg);
    }
  }
};
showItems("Coffee Bean",categItms);
showItems("Coffee Bean",dealItms);


//shopcateg
const categories = document.querySelectorAll(".active");
const listCategories = document.querySelector(".type-categories");

listCategories.addEventListener("click", function addEvent(e) {
  categItms.innerHTML = "";
  showItems(e.target.innerText,categItms);
  
  for (const li of listCategories.children) {
    li.classList.remove("active");
  
  }
  e.target.classList.add("active");


});

//SHOP BY CATERGORIES END




//CAROUSELL ITEMS 
let l=0;
  
function right_mover(movePer,maxMove,product){
    let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer *= 2;
	 	maxMove *= 2;
	 }
    l = l + movePer;
    if (product == 1){l = 0; }
    for(const i of product)
    {
        if (l > maxMove){l = l - movePer;}
        i.style.left = '-' + l + '%';
    }
    
}

function left_mover (movePer,product){
    let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
        movePer *= 2;
      
	 }
    let product_page = Math.ceil(product.length/4);
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of product){
        if (product_page>1){
            i.style.left = '-' + l + '%';
        }
    }
}
//CAROUSELL ITEMS END

let btnsdeal = document.querySelectorAll(".dealarr");
let product = document.getElementsByClassName('product-item');
btnsdeal[0].addEventListener("click",function(){left_mover(100,product)});
btnsdeal[1].addEventListener("click",function(){right_mover(100,200,product)});
  
 let btnsblog=document.querySelectorAll(".arrow-blog");
 let blogproduct= document.getElementsByClassName('container-blog');
 btnsblog[0].addEventListener("click",function(){left_mover(33,blogproduct)});
 btnsblog[1].addEventListener("click",function(){right_mover(33,67,blogproduct)});

//CAROUSELL ITEMS BUTTONS MAIN PAGE END




//BUTTON TO UP PAGE
 window.addEventListener("scroll", ()=>{
   const button=document.querySelector(".button-up-page");
   button.addEventListener("click",function(){
    document.documentElement.scrollTop = 0;
    
   });
  if(window.scrollY>252){
    button.style.display="block";
  }else{
    button.style.display="none";
  }
 });
//BUTTON TO UP PAGE END

