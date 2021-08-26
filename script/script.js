
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
const modal=document.querySelector(".modal-view");
const categItms = document.querySelector(".categories-items");
const dealItms=document.querySelector(".inner-bot");
function showItems(type,location) {
  for (const item of allItems) {
    if (item["categories"].includes(type)) {
      const product = document.createElement("div");
      product.classList.add("product-item");
      product.onmouseover = function () {
        imgProduct.src = item["photos"][1];
      };
      product.onmouseout = function () {
        imgProduct.src = item["photos"][0];
      };
      location.appendChild(product);
      const imgProduct = document.createElement("img");
      imgProduct.setAttribute("id", "my-img");
      imgProduct.src = item["photos"][0];
      product.appendChild(imgProduct);
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      product.appendChild(productInfo);
      const pInfo = document.createElement("a");
      pInfo.classList.add("info");
      pInfo.href="item-page.html";
      
      pInfo.onclick=()=>{
        localStorage.setItem("id",item.id);
        localStorage.setItem("categories",item.categories);

      }
      pInfo.innerText = item["name"];
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
          oldPrice.innerText = ` $ ` + ((item.discount / 100) * item.price + Number(item.price)).toFixed(2);
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
           const modalContainer=document.querySelector(".modal-content");
           const leftSide=document.querySelector(".left-side");
           const rightSide=document.querySelector(".right-side");
           leftSide.innerHTML=`<img src="${item.photos[0]}" alt="" > `;
           rightSide.innerHTML=`
           <h2 class="title-item">${item.name}</h2>
           <p class="price">$${item.price} <span class="price-discount">${item.discount>0?'$'+((item.discount / 100) * item.price + Number(item.price)).toFixed(2):``}</span></p>
           <p class="small-description">${item.smallDescription}</p>
           <p class="stock"><span class="stock-span">${item.stock} </span>in stock</p>
           <form action="" class="Qty-add-cart">
               <label for="qty">Qty:</label>
               <input type="number" name="qty" id="qty" min="1" step="1" max="95"
               value="1" inputmode="numeric" pattern="[0-9]" >
               <button type="submit">ADD TO CART</button>
           </form>
           <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
           <p class="categories-item">Categories:<span class="categories-item-span">${item.categories[0]}</span></p>
           <button class="close-modal">Close</button>`;
           
            const closeModal=document.querySelector(".close-modal");
            closeModal.addEventListener("click", ()=>{
            modal.classList.remove("show-modal");
            });
           modalContainer.appendChild(leftSide);       
           modalContainer.appendChild(rightSide);       
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

function showItemsd(location,item) {
      const product = document.createElement("div");
      product.classList.add("product-item");
      product.onmouseover = function () {
        imgProduct.src = item["photos"][1];
      };
      product.onmouseout = function () {
        imgProduct.src = item["photos"][0];
      };
      location.appendChild(product);
      const imgProduct = document.createElement("img");
      imgProduct.setAttribute("id", "my-img");
      imgProduct.src = item["photos"][0];
      product.appendChild(imgProduct);
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      product.appendChild(productInfo);
      const pInfo = document.createElement("a");
      pInfo.classList.add("info");
      pInfo.href="item-page.html";
      
      pInfo.onclick=()=>{
        localStorage.setItem("id",item.id);
        localStorage.setItem("categories",item.categories);

      }
      
      pInfo.innerText = item.name;
      
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
          oldPrice.innerText = ` $ ` + ((item.discount / 100) * item.price + Number(item.price)).toFixed(2);
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
        const modalContainer=document.querySelector(".modal-content");
        const leftSide=document.querySelector(".left-side");
        const rightSide=document.querySelector(".right-side");
        leftSide.innerHTML=`<img src="${item.photos[0]}" alt="" > `;
        rightSide.innerHTML=`
        <h2 class="title-item">${item.name}</h2>
        <p class="price">$${item.price} <span class="price-discount">${item.discount>0?'$'+((item.discount / 100) * item.price + Number(item.price)).toFixed(2):``}</span></p>
        <p class="small-description">${item.smallDescription}</p>
        <p class="stock"><span class="stock-span">${item.stock} </span>in stock</p>
        <form action="" class="Qty-add-cart">
            <label for="qty">Qty:</label>
            <input type="number" name="qty" id="qty" min="1" step="1" max="95"
            value="1" inputmode="numeric" pattern="[0-9]" >
            <button type="submit">ADD TO CART</button>
        </form>
        <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
        <p class="categories-item">Categories:<span class="categories-item-span">${item.categories[0]}</span></p>
        <button class="close-modal">Close</button>`;
        const closeModal=document.querySelector(".close-modal");
            closeModal.addEventListener("click", ()=>{
            modal.classList.remove("show-modal");
            });
        modalContainer.appendChild(leftSide);       
        modalContainer.appendChild(rightSide);       
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
    
  
};
function showItemDeals(){
  let i=0;
  const dealss=allItems.filter(item => Number(item.discount) > 2);
  for(const deal of dealss){
    showItemsd(dealItms,deal);
    i++;
    console.log(i);
    if(i>5 && i<7){
      break;
    }
  }
}
showItemDeals()


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
