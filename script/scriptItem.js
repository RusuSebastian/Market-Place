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

//
function showItemDetails(){
  const id=localStorage.getItem("id");
  const categories=localStorage.getItem("categories");
 for(const item of allItems){
   if(item.id==id){
    const itemNamePage=document.querySelector(".item-name-page");
    itemNamePage.innerText="/ "+item.name;
    const itemTypePage=document.querySelector(".item-type-page");
    itemTypePage.innerText="/ "+item.categories;

  const sectionItemL=[...document.querySelectorAll(".left-side")][1];
  const sectionItemR=[...document.querySelectorAll(".right-side")][1];
  sectionItemR.innerHTML=`<h2 class="title-item">${item.name}</h2>
  <p class="price">$${item.price} <span class="price-discount">${item.discount>0?'$'+((item.discount / 100) * item.price + Number(item.price)).toFixed(2):``}</span></p>
  <p class="small-description">${item.smallDescription}</p>
  <p class="stock"><span class="stock-span">${item.stock }</span> in stock</p>
  <form action="" class="Qty-add-cart">
      <label for="qty">Qty:</label>
      <input type="number" name="qty" id="qty" min="1" step="1" max="95"
      value="1" inputmode="numeric" pattern="[0-9]" >
      <button type="submit">ADD TO CART</button>
  </form>
  <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
  <p class="categories-item">Categories:<span class="categories-item-span">${item.categories}</span></p>`;
  sectionItemL.innerHTML=` <img src="${item.photos[0]}" alt="" id="featured">
  <div class="thumbnail-container">
      <img src="${item.photos[0]}" alt="" class="thumbnail activated-img">     
      <img src="${item.photos[1]}" alt="" class="thumbnail">
      <img src="${item.photos[2]}" alt="" class="thumbnail">
      <img src="${item.photos[3]}" alt="" class="thumbnail">
      <img src="${item.photos[4]}" alt="" class="thumbnail">
      <div class="arrow" id="arrow-item"></div>
      <div class="arrow" id="arrow-item"></div>
  </div>`;
  const descriptionItem=document.querySelector(".descrip-container");
  descriptionItem.innerHTML=` <h5><strong>Info about item</strong></h5>
  <p> ${item.bigDescription}</p>`;
  const aditionalInfo=document.querySelector(".additional-info");
  aditionalInfo.innerHTML=`    <table>
  <tbody>
      <tr>
          <th>Weight</th>
          <td>${item.weight}</td>
      </tr>
      <tr>
          <th>Dimension</th>
          <td>${item.dimension} cm</td>
      </tr>
  </tbody>
</table>`;
    }
    
  }
  let btnsitm=document.querySelectorAll("#arrow-item");
  let thumbnailContainer= document.getElementsByClassName('thumbnail');
  btnsitm[0].addEventListener("click",function(){left_mover(25,thumbnailContainer)});
  btnsitm[1].addEventListener("click",function(){right_mover(25,25,thumbnailContainer)});
  thumbnails();
  const dealItms=document.querySelector(".inner-bot");
  showItems(categories,dealItms);
}

window.onload=function(){
showItemDetails();
}
//






//cart pop-up
const cartModal=document.getElementsByClassName("widget-cart")[0];
const myCartBtn=document.getElementsByClassName("my-cart")[0];

myCartBtn.addEventListener("click", ()=>{
  cartModal.classList.toggle("show");
  // windowClicked(".cart-icon",cartModal);
});

//
const modal=document.querySelector(".modal-view");
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
// const dealItms=document.querySelector(".inner-bot");
// showItems("Coffee Bean",dealItms);


//


//
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


//
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


function thumbnails(){
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
}}

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

// let btnsitm=document.querySelectorAll("#arrow-item");
// let thumbnailContainer= document.getElementsByClassName('thumbnail');
// btnsitm[0].addEventListener("click",function(){left_mover(25,thumbnailContainer)});
// btnsitm[1].addEventListener("click",function(){right_mover(25,99,thumbnailContainer)});

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





