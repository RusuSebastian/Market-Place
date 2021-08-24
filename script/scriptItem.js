const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

//cart pop-up
const cartModal=document.getElementsByClassName("widget-cart")[0];
const myCartBtn=document.getElementsByClassName("my-cart")[0];
console.log(cartModal,myCartBtn);
myCartBtn.addEventListener("click", ()=>{
  cartModal.classList.toggle("show");
  // windowClicked(".cart-icon",cartModal);
});


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
const dealItms=document.querySelector(".inner-bot");
showItems("Coffee Bean",dealItms);



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



function hover(element, nr) {
  
    element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
  }
  
  function unhover(element, nr) {
    element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
  }


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



let thumbnails=document.getElementsByClassName("thumbnail");
let activeImages=document.getElementsByClassName("active");



for(const thumbnail of thumbnails){
    thumbnail.addEventListener("click",function(){
        if(activeImages.length > 0){
            activeImages[0].classList.remove("activated-img");
        }
        this.classList.add("activated-img");
        document.getElementById("featured").src=this.src;
    });
}

//CAROUSEL ITMS FUNCT


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


//

let btnsitm=document.querySelectorAll("#arrow-item");
let thumbnailContainer= document.getElementsByClassName('thumbnail');
btnsitm[0].addEventListener("click",function(){left_mover(25,thumbnailContainer)});
btnsitm[1].addEventListener("click",function(){right_mover(25,99,thumbnailContainer)});

//
let btnsdeal = document.querySelectorAll(".dealarr");
let product = document.getElementsByClassName('product-item');
btnsdeal[0].addEventListener("click",function(){left_mover(100,product)});
btnsdeal[1].addEventListener("click",function(){right_mover(100,200,product)});
//


const tab=document.querySelector(".tabs");
const descContainer=document.querySelector(".descrip-container");
const addiContainer=document.querySelector(".additional-info");

tab.addEventListener("click", function(e){
  
  for(const btn of tab.children){
    btn.classList.remove("btnactiv");
  }
  e.target.classList.add("btnactiv");
   if(e.target.classList[0]==="descrip"){
    descContainer.style.display="block";
    addiContainer.style.display="none";
  }else if(e.target.classList[0]==="additional"){
    descContainer.style.display="none";
    addiContainer.style.display="block";
  }
  
})

