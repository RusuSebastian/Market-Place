
//SLider filtre
(function() {
  const parent = document.querySelector('.range-slider');

  if (!parent) {
      return;
  }

  const rangeS = parent.querySelectorAll('input[type="range"]'),
        numberS = parent.querySelectorAll('input[type="number"]');

  rangeS.forEach((el) => {
      el.oninput = () => {
          let slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);

          if (slide1 > slide2) {
              [slide1, slide2] = [slide2, slide1];
          }

          numberS[0].value = slide1;
          numberS[1].value = slide2;
      }
  });

  numberS.forEach((el) => {
      el.oninput = () => {
          let number1 = parseFloat(numberS[0].value),
              number2 = parseFloat(numberS[1].value);

          if (number1 > number2) {
              let tmp = number1;
              numberS[0].value = number2;
              numberS[1].value = tmp;
          }

          rangeS[0].value = number1;
          rangeS[1].value = number2;
      }
  });
})();
// end 
//MODAL
const modal=document.querySelector(".modal-view");
//MODAL END


//SHOW ITEMS
const categItms = document.querySelector(".bot-side");
function showItems(categ) {
  for (const item of allItems) { 
    if(item.categories==categ){ 
      const product = document.createElement("div");
      product.classList.add("product-item");
      product.onmouseover = function () {
      imgProduct.src = item.photos[1];

      };
      product.onmouseout = function () {
        imgProduct.src = item.photos[0];
      };
      categItms.appendChild(product);
      const imgProduct = document.createElement("img");
      imgProduct.setAttribute("id", "my-img");
      imgProduct.src = item.photos[0];
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

      const pminiDrisc = document.createElement("div");
      pminiDrisc.classList.add("mini-drisc");
      productInfo.appendChild(pminiDrisc);
      const info=document.createElement("p");
      info.classList.add("mini-discript")
      info.innerText=item.smallDescription;
      info.style.fontSize="12px";
      info.style.marginTop="10px";
      info.style.color="#838383";
      info.style.display="none";
      pminiDrisc.appendChild(info);
if(btnList.classList.contains("activ-shop-view")){
        product.style.flexDirection="row";
        productInfo.style.overflow="hidden";
        productInfo.style.padding="50px";
        info.style.display="block";
      }
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
        <form action="" class="Qty-add-cart">
            <label for="qty">Qty:</label>
            <input type="number" name="qty" id="qty" min="1" step="1" max="95"
            value="1" inputmode="numeric" pattern="[0-9]" >
            <button type="submit">ADD TO CART</button>
        </form>
        <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
        <p class="categories-item">Categories:<span class="categories-item-span">${item.categories[0]}</span></p>
        <button class="close-modal">Close</button>`; 
        
        const formModal=document.querySelector(".Qty-add-cart");
         console.log(formModal)
    formModal.addEventListener("submit",(event)=>{
           const qty=document.querySelector("#qty");
           event.preventDefault();
           function reloadP() {
            localStorage.setItem("reloading", "true");
            window.location.reload();
        }reloadP()
           console.log(69);
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
      
  }}
};





let row=12;
let current_page=1;
function createElements(items,items_per_page, page){ 
  categItms.innerHTML="";
  page--;
  let start=items_per_page * page;
  let end = start + items_per_page;
  let paginatedallItems=items.slice(start,end);
  
      for(const item of paginatedallItems){
      const product = document.createElement("div");
      product.classList.add("product-item");
      product.onmouseover = function () {
      imgProduct.src = item.photos[1];

      };
      product.onmouseout = function () {
        imgProduct.src = item.photos[0];
      };
      categItms.appendChild(product);
      const imgProduct = document.createElement("img");
      imgProduct.setAttribute("id", "my-img");
      imgProduct.src = item.photos[0];
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

      const pminiDrisc = document.createElement("div");
      pminiDrisc.classList.add("mini-drisc");
      productInfo.appendChild(pminiDrisc);
      const info=document.createElement("p");
      info.classList.add("mini-discript")
      info.innerText=item.smallDescription;
      info.style.fontSize="12px";
      info.style.marginTop="10px";
      info.style.color="#838383";
      info.style.display="none";
      pminiDrisc.appendChild(info);
if(btnList.classList.contains("activ-shop-view")){
        product.style.flexDirection="row";
        productInfo.style.overflow="hidden";
        productInfo.style.padding="50px";
        info.style.display="block";
      }
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
        <form action="" class="Qty-add-cart">
            <label for="qty">Qty:</label>
            <input type="number" name="qty" id="qty" min="1" step="1" max="95"
            value="1" inputmode="numeric" pattern="[0-9]" >
            <button type="submit">ADD TO CART</button>
        </form>
        <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
        <p class="categories-item">Categories:<span class="categories-item-span">${item.categories[0]}</span></p>
        <button class="close-modal">Close</button>`;  
        
        
        const formModal=document.querySelector(".Qty-add-cart");
         console.log(formModal)
    formModal.addEventListener("submit",(event)=>{
           const qty=document.querySelector("#qty");
           event.preventDefault();
           function reloadP() {
            localStorage.setItem("reloading", "true");
            window.location.reload();
        }reloadP()
           console.log(69);
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
};

function paginationBtns(items,page){
  if(items.length==0){
    return;
  }else{
    const btnsPag=document.querySelector(".pagination");
    btnsPag.innerHTML="";
    let page_count=Math.ceil(items.length/row);
    for(i=1;i<page_count+1;i++){
      let btn=document.createElement('button');
      btn.innerText=i;
      btnsPag.appendChild(btn);
    }
    btnsPag.firstElementChild.classList.add("current-pag");

    btnsPag.addEventListener("click",(e)=>{

    if(e.target.type=="submit"){
    localStorage.setItem("currentPage",e.target.innerText);
    [...btnsPag.children].forEach(element =>{
      element.classList.remove("current-pag");
    });
    e.target.classList.add("current-pag");
    page=Number(e.target.innerText);
    categItms.innerHTML="";
    createElements(items,row,page);
    }
    
  });
}}


//SHOW ITEMS END
function btnListFunction(){
  const content=document.querySelector(".bot-side");
  btnList.classList.add("activ-shop-view");
  btnGrid.classList.remove("activ-shop-view");
  content.style.display="block";
  const items=[...content.children];
  for(let item of items){
    item.style.flexDirection="row";
    item.firstElementChild.style.width="250px";
    item.lastElementChild.style.overflow="hidden";
    item.lastElementChild.style.padding="50px"; 

  }
  const allminidiscript=[...document.querySelectorAll(".mini-discript")];
  for (let mini of allminidiscript){
    mini.style.display="block";
  }

}

//VIEW LIST TYPE
const btnList=document.querySelector(".list");
btnList.addEventListener("click",()=>{
  btnListFunction(); 
  localStorage.setItem("Grid",false);
});

const btnGrid=document.querySelector(".grid");

btnGrid.addEventListener("click",()=>{
  btnList.classList.remove("activ-shop-view");
  btnGrid.classList.add("activ-shop-view");
  const content=document.querySelector(".bot-side");
  // content.innerHTML="";
  content.style.display="grid";
  // showItems();
  // createElements(allItems,row,current_page);
  const items=[...content.children];
  for(let item of items){
    item.style.flexDirection="column";
    item.firstElementChild.style.width="auto";
    item.lastElementChild.style.overflow="hidden";
    item.lastElementChild.style.padding="0px"; 
  }
  const allminidiscript=[...document.querySelectorAll(".mini-discript")];
  for (let mini of allminidiscript){
    mini.style.display="none";
  }

  localStorage.setItem("Grid",true);
});
//VIEW LIST TYPE END




const spanNumberItems=document.querySelector(".counter-itms-showed");
function countItems(array){
  spanNumberItems.innerText=array.length ;
}

//categories
const dropdownContainer=document.querySelector(".dropdown");
dropdownContainer.addEventListener("click",(e)=>{
  const categoriesall=document.querySelectorAll(".categories");
  for(const elem of categoriesall){
    elem.style.color="black";
  }
  e.target.style.color="#b09d7b";
  localStorage.setItem("categsort",e.target.innerText)
document.querySelector("#sorting").selectedIndex = 0;
categItms.innerHTML="";
let newArray=[];
if(e.target.innerText=="All Categories"){
  countItems(allItems);
  createElements(allItems,row,current_page);
  filter(allItems);
  filterByPrice(allItems);
  paginationBtns(allItems,current_page);
  filterByColor(allItems,"color");
  filterByColor(allItems,"size");
  spanColor(allItems,"color");
  spanColor(allItems,"size");
  productTags(allItems);
}else{

for(const element of allItems){
 if(element.categories == e.target.innerText){
  newArray.push(element);
 } 
};
showItems(e.target.innerText);
filterByPrice(newArray);
filter(newArray);
paginationBtns(newArray,current_page);
countItems(newArray);
filterByColor(newArray,"color");
filterByColor(newArray,"size");
spanColor(newArray,"color");
spanColor(newArray,"size");
productTags(newArray);
}


});

//
function filter(arraytouse){
const selectFilter=document.querySelector("#sorting");
selectFilter.addEventListener("change",(e)=>{
localStorage.setItem("filterInput",e.target.value.split("-"));
const [key, direction] = e.target.value.split("-");
array=arraytouse;
array.sort((a, b) => {
  if (direction == "asc") {
    if (Number(a[key]) < Number(b[key])) return -1;
    if (Number(a[key]) > Number(b[key])) return 1;
    return 0;
  }
  if (Number(a[key]) < Number(b[key])) return 1;
  if (Number(a[key]) > Number(b[key])) return -1;
  return 0;
});
categItms.innerHTML="";
createElements(array,row,current_page);
paginationBtns(array,current_page);
countItems(array);
filterByColor(array,"color");
filterByColor(array,"size");
spanColor(array,"color");
spanColor(array,"size");
productTags(array);
});
}



//pricefilter
const formPrice=document.querySelector(".form-price");
const inputs=formPrice.querySelectorAll("input");

formPrice.addEventListener("submit",function(e){
  e.preventDefault()});

function filterByPrice(arraytofilter){
  formPrice.addEventListener("submit",function(e){
    
    e.preventDefault();
    let min = inputs[0].value;
    let max = inputs[1].value;
    let newarr=[];
    localStorage.setItem("priceRange",[min,max])
    for(const element of arraytofilter){
      if(Number(element.price) >= min && Number(element.price) <=max){
        newarr.push(element);
      }
    }
    categItms.innerHTML="";
    createElements(newarr,row,current_page);
    paginationBtns(newarr,current_page);
    filter(newarr);
    countItems(newarr);
    filterByColor(newarr,"color");
    filterByColor(newarr,"size");
    spanColor(newarr,"color");
    spanColor(newarr,"size");
    productTags(newarr);
  });
}



//


function filterByColor(array,filtrul){
  const listFilters=document.querySelector(`.filter-by-${filtrul}`);
  listFilters.addEventListener("click",(e)=>{
    let key=e.target.innerText.split(" ")[0];
    
    let newarr=[];
    for(const element of array){
      if(key===element[filtrul]){
        newarr.push(element);
      }
    }
    createElements(newarr,row,current_page);
    paginationBtns(newarr,current_page);
    filter(newarr);
    filterByPrice(newarr);//
    countItems(newarr);
    spanColor(newarr,filtrul);
    productTags(newarr);
  });

}


function spanColor(currentArray,filtru){
  const spansColor=[...document.querySelectorAll(`.span-by-${filtru}`)];
  let nr;
  for(const elem of spansColor){
    nr=0; 
    for(const element of currentArray){
      
      if(elem.parentElement.innerText.split(" ")[0]===element[filtru])
      {
       nr++;
    }
    
    }
    elem.innerText=` (${nr})`;
  }
}


function productTags(arrray){
  const tagsContainer=document.querySelector(".tags");

  tagsContainer.addEventListener("click",(e)=>{
    let newarr=[];
    for(const elem of arrray){
      if(elem.tags.includes(e.target.innerText)){
        newarr.push(elem);
      }
    }
    createElements(newarr,row,current_page);
    paginationBtns(newarr,current_page);
    filter(newarr);
    countItems(newarr);
    filterByColor(newarr,"color");
    filterByColor(newarr,"size");
    spanColor(newarr,"color");
    spanColor(newarr,"size");
  })
}


window.onload = () => {
  
  
  let grid=localStorage.getItem("Grid");
  if(grid=="false"){
    btnListFunction();
  }
 
  console.log("page is loaded "); 
  
  let category=localStorage.getItem("categsort");

 const listofcategory=[...document.querySelectorAll(".categories")];
  for(const item of listofcategory){
    if (item.innerText==category)
    {item.style.color="#b09d7b"}
  }

  newArray=[];
  for(const element of allItems){
    if(element.categories.includes(category)){
     newArray.push(element);  
    } 
   } 
  
  
    const keyDirection=localStorage.getItem("filterInput");
  if(keyDirection!==""){
    newArray.sort((a, b) => {
    if (keyDirection.split(",")[1] == "asc") {
      if (Number(a[keyDirection.split(",")[0]]) < Number(b[[keyDirection.split(",")[0]]])) return -1;
      if (Number(a[keyDirection.split(",")[0]]) > Number(b[keyDirection.split(",")[0]])) return 1;
      return 0;
    }
    if (Number(a[keyDirection.split(",")[0]]) < Number(b[[keyDirection.split(",")[0]]])) return 1;
    if (Number(a[keyDirection.split(",")[0]]) > Number(b[[keyDirection.split(",")[0]]])) return -1;
    return 0;
  });}
  
  
    createElements(newArray,row,current_page);
    countItems(newArray);
    filter(newArray);
    filterByPrice(newArray);
    filterByColor(newArray,"color");
    filterByColor(newArray,"size");
    spanColor(newArray,"color");
    spanColor(newArray,"size");
    productTags(newArray);
    paginationBtns(newArray,current_page);
  
  if((category==null||keyDirection==null)||(category=="All Categories"))
    {
      let newArrayy=allItems;
      const keyDirection=localStorage.getItem("filterInput");
      if(keyDirection!= null){
      newArrayy.sort((a, b) => {
      if (keyDirection.split(",")[1] == "asc") {
        if (Number(a[keyDirection.split(",")[0]]) < Number(b[[keyDirection.split(",")[0]]])) return -1;
        if (Number(a[keyDirection.split(",")[0]]) > Number(b[keyDirection.split(",")[0]])) return 1;
        return 0;
      }
      if (Number(a[keyDirection.split(",")[0]]) < Number(b[[keyDirection.split(",")[0]]])) return 1;
      if (Number(a[keyDirection.split(",")[0]]) > Number(b[[keyDirection.split(",")[0]]])) return -1;
      return 0;
    });}
    createElements(newArrayy,row,current_page);
    countItems(newArrayy);
    filter(newArrayy);
    filterByPrice(newArrayy);
    filterByColor(newArrayy,"color");
    filterByColor(newArrayy,"size");
    spanColor(newArrayy,"color");
    spanColor(newArrayy,"size");
    productTags(newArrayy);
    paginationBtns(newArrayy,current_page);
    
    const current_pagee=localStorage.getItem("currentPage");
    if(current_pagee != null){
    paginationBtns(allItems,current_pagee);
    const pagebtns=document.querySelector(".pagination");
    
      [...pagebtns.children].forEach(element =>{
        element.classList.remove("current-pag");
       
      });
      pagebtns.children[current_pagee-1].classList.add("current-pag");
     
      createElements(allItems,row,current_pagee);
      
    }
 
  
  }
   
  }


