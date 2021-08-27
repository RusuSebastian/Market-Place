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


//cart pop-up
const cartModal=document.getElementsByClassName("widget-cart")[0];
const myCartBtn=document.getElementsByClassName("my-cart")[0];
myCartBtn.addEventListener("click", ()=>{
  cartModal.classList.toggle("show");
  
});

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

//SHOP PAGE

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

// end shop categ


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
    [...btnsPag.children].forEach(element =>{
      element.classList.remove("current-pag");
    });
    e.target.classList.add("current-pag");
    page=Number(e.target.innerText);
    categItms.innerHTML="";

    createElements(items,row,page);
    });
  }
};











//SHOW ITEMS END



//VIEW LIST TYPE
const btnList=document.querySelector(".list");
btnList.addEventListener("click",()=>{
  
  const content=document.querySelector(".bot-side");
  // content.innerHTML="";
  // showItems();
  // createElements(allItems,row,current_page);
  
  btnList.classList.add("activ-shop-view");
  btnGrid.classList.remove("activ-shop-view");

  // const content=document.querySelector(".bot-side");
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
});
//VIEW LIST TYPE END

//MODAL
const modal=document.querySelector(".modal-view");
const closeModal=document.querySelector(".close-modal");
closeModal.addEventListener("click", ()=>{
  modal.classList.remove("show-modal");
});
//MODAL END


const spanNumberItems=document.querySelector(".counter-itms-showed");
function countItems(array){
  spanNumberItems.innerText=array.length ;
}

//categories
const dropdownContainer=document.querySelector(".dropdown");
dropdownContainer.addEventListener("click",(e)=>{
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
  countItems(allItems);
  filter(allItems);
  filterByPrice(allItems);
  filterByColor(allItems,"color");
  filterByColor(allItems,"size");
  spanColor(allItems,"color");
  spanColor(allItems,"size");
  productTags(allItems);
  paginationBtns(allItems,current_page);
createElements(allItems,row,current_page);
console.log("page is loaded ")
};