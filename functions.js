//DARKMODE 
function darkMode(){
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
    }
    darkMode()
//DARKMODE END
//BURGER MENU
const burger=document.querySelector(".burger-menu");
burger.addEventListener("click",()=>{
  burger.children[0].classList.toggle("show");
})
//


//CART POP UP
const cartModal=document.getElementsByClassName("widget-cart")[0];
const myCartBtn=document.getElementsByClassName("my-cart")[0];

myCartBtn.addEventListener("click", ()=>{
  cartModal.classList.toggle("show");
});


//DROP DOWNS
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

for(const elem of categdrop.children){
  elem.addEventListener("click",()=>{
    localStorage.setItem("categsort",elem.innerText);
    location.href="./shop.html"
  });
};


function windowClicked (buttonClass,dropdown){
    window.onclick = function (e) {
      if (!e.target.matches(buttonClass)) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    }
  }
  
//DROP DOWNS END

//USERNAME
let username=localStorage.getItem("username");
if(username !=""){
document.querySelector(".account-btn").innerText=username;
dropdown.innerHTML=` <div class="bar-item">
<img src="/photos/header/login.svg" alt=""> 
<p>Sign out</p> 
</div>`;
}
document.querySelector(".bar-item").children[1].addEventListener("click",()=>{
  localStorage.setItem("username","");
  localStorage.setItem("pass","");
  location.href="./login.html";
})
//
//IMG HOVER
function hover(element, nr) {
  
    element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
  }
  
  function unhover(element, nr) {
    element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
  }
  
  //IMG HOVER END


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



 //CART FUNCTIONALITIES 
 function cartPrice(){
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    let total =document.querySelector(".total");
    if (cartItem != null ){
    for(const item of cartItem){
    let Total = Number(item.price) * Number(item.quantity);
    subTotal=subTotal+Total;
        }
    if(total != null){
      total.textContent = "$ "+subTotal;}
    }  }  

function displaycart(){
let cartItem = JSON.parse(localStorage.getItem('cart'));
if (cartItem != null){
for(elems of allItems){
for(elem of cartItem){
if (elem.item==elems.id){
    const listCart=document.querySelector(".list-cart");
    const itemCart=document.createElement("li");
    itemCart.classList.add("item-list-cart");
    
    itemCart.innerHTML=`
     <img src="${elems.photos[0]}" alt="" class="item-pic">
     <div class="text-widget-cart">
      <a href="" class="link-item">${elems.name}</a></br>
      <span class="amount">${elem.quantity} </span>x <span class="price">$${elems.price}</span>
      <button class="remove-item-list-cart">X</button>
       </div>`;
listCart.appendChild(itemCart);}
}
}
}
}displaycart();

function cartNumberDisplay(){
let cartNumbers = 0;
let cartItem = JSON.parse(localStorage.getItem('cart'))
if (cartItem != null){
cartItem.forEach(item => {
cartNumbers = Number(item.quantity) + cartNumbers;

});

if(cartNumbers==1){
document.querySelector('.my-cart-number').textContent = cartNumbers + ` item`;
}else{
document.querySelector('.my-cart-number').textContent = cartNumbers + ` items`;}
}
}

function removeItemCart(){
const newcart=[];
const removeItem = document.getElementsByClassName('remove-item-list-cart')
  for(var i = 0; i < removeItem.length; i++){
    let removeBtn = removeItem[i]
    removeBtn.addEventListener('click', (event) =>{
    let cartItem = JSON.parse(localStorage.getItem('cart'))
    console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
    cartItem.forEach(item => {
      if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
        newcart.push(item);
      }
    });
    localStorage.setItem('cart', JSON.stringify(newcart))
    function reloadP() {
        localStorage.setItem("reloading", "true");
        window.location.reload();
    }reloadP()

    })
    cartModal.classList.add("show");
    }
}

function emptyCart(){
if(document.querySelector(".list-cart").children.length==0){
cartModal.innerHTML=`</span>x <span class="price">CART IS EMPTY</span>
<button class="go-to-cart" style="visibility:hidden">X</button>`;

}
}
emptyCart();
removeItemCart();
cartNumberDisplay();
cartPrice();


function displayItems(item,location) {

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

           
    cart.onclick = ()=>{  
        function reloadP() {
            localStorage.setItem("reloading", "true");
            window.location.reload();
        }reloadP()
    

      if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
      let storedCart = JSON.parse(localStorage.getItem("cart"));    
      let objItem={
      name:item.name,
      item:item.id,
      quantity:1,
      price:item.price};  
      if(storedCart==""){
        storedCart.push(objItem);
        localStorage.setItem("cart",JSON.stringify(storedCart));
        cartPrice()
        cartNumberDisplay()
      }else{
      for(const elem of storedCart){   
        if(elem.item === item.id){
          console.log("deja adaugat")
          elem.quantity ++;
          
          objItem.nr= elem.nr;
          localStorage.setItem("cart",JSON.stringify(storedCart));
          cartPrice()
          cartNumberDisplay()
          return;
        }             
      }
        objItem.quantity=1;
          storedCart.push(objItem);
          localStorage.setItem("cart",JSON.stringify(storedCart));
          cartPrice()
          cartNumberDisplay()
      };  
      displaycart()
    }

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
         <form  class="Qty-add-cart">
             <label for="qty">Qty:</label>
             <input type="number" name="qty" id="qty" min="1" step="1" max="95"
             value="1" inputmode="numeric" pattern="[0-9]" >
             <button type="submit">ADD TO CART</button>
         </form>
         <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
         <p class="categories-item">Categories:<span class="categories-item-span">${item.categories[0]}</span></p>
         <button class="close-modal">Close</button>`;



         const formModal=document.querySelector(".Qty-add-cart");
         


         formModal.addEventListener("submit",(event)=>{
           const qty=document.querySelector("#qty");
           event.preventDefault();
           function reloadP() {
            localStorage.setItem("reloading", "true");
            window.location.reload();
        }reloadP()
           
           if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
          }
          let storedCart = JSON.parse(localStorage.getItem("cart"));    
          let objItem={
          name:item.name,
          item:item.id,
          quantity:qty.value,
          price:item.price};  
          if(storedCart==""){
            storedCart.push(objItem);
            localStorage.setItem("cart",JSON.stringify(storedCart));
            cartPrice()
            cartNumberDisplay()
          }else{
          for(const elem of storedCart){   
            if(elem.item === item.id){
              console.log("deja adaugat")
              elem.quantity =Number(elem.quantity)+Number(qty.value);
              
              objItem.nr= elem.nr;
              localStorage.setItem("cart",JSON.stringify(storedCart));
              cartPrice()
              cartNumberDisplay()
              return;
            }             
          }
            objItem.quantity=qty.value;
              storedCart.push(objItem);
              localStorage.setItem("cart",JSON.stringify(storedCart));
              cartPrice()
              cartNumberDisplay()
          };  
          displaycart()
         });



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



const goToCheckout=document.querySelector(".go-to-cart");
goToCheckout.addEventListener("click",()=>{
window.location.href="cart.html";
});




const searchOption=document.querySelector("#categSearchBar");
const searchInput=document.querySelector("#searchInput");

let allNames=[];
searchOption.addEventListener("change",(e)=>{
const newArr=[];
const names=[];
 for(const elem of allItems){
   if(e.target.value==elem.categories){
     newArr.push(elem);
   }
   if (e.target.value=="All categories"){
     newArr.push(elem);
   }
 } 
 newArr.forEach(elem =>{
   names.push(elem.name);
 });
 allNames=names;
 console.log(allNames);
 localStorage.setItem("categsort",e.target.value);
});

let allKeys="";
searchInput.addEventListener("keyup",(e)=>{
let keys=e.target.value.toLowerCase();
allKeys=keys;
});

const searchForm=document.querySelector(".search-Bar");
searchForm.children[0].addEventListener("submit",(e)=>{
e.preventDefault();
//iteram names si verificam daca elementele contin keys
//daca rezultatul e true adaugam intr-un array numele itemelor 
//respective, next iteram all items si verificam daca itemele.names
//contin arrayul respectiv, iar rezultatul se va afisa in fereastra
//shop.html si categoria respectiva se va activa.
let names=[];
for(const elem of allNames){
  if(elem.toLowerCase().includes(allKeys.toLowerCase())){
    names.push(elem);
    // console.log(names);
  }
}
let newItems=[];
for(const elem of allItems){
  for(const element of names){
  if(elem.name.toLowerCase().includes(element.toLowerCase()))
    {
      newItems.push(elem);
    }
  }
}
console.log(newItems);

localStorage.setItem("itmsSearched",JSON.stringify([]));
let itemsSearch = JSON.parse(localStorage.getItem("itmsSearched"));

for(const el of newItems){
  itemsSearch.push(el);
}
localStorage.setItem("itmsSearched",JSON.stringify(itemsSearch));
if(itemsSearch==""){
  alert("No products were found matching your selection.")
}else{
  location.href="./shop.html";
  localStorage.setItem("search",true);
}



});