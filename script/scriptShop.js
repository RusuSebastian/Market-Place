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


//cart pop-up
const cartModal=document.getElementsByClassName("widget-cart")[0];
const myCartBtn=document.getElementsByClassName("my-cart")[0];
console.log(cartModal,myCartBtn);
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
    },
    {
      type: ["Health & Safety","Varieties"],
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

  const categItms = document.querySelector(".bot-side");

function showItems() {
  for (const item of allItems) {
      
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
showItems();
//SHOW ITEMS END





//VIEW LIST TYPE
const btnList=document.querySelector(".list");
btnList.addEventListener("click",()=>{
  
  const content=document.querySelector(".bot-side");
  content.innerHTML="";
  showItems();
  
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
  content.innerHTML="";
  content.style.display="grid";
  showItems();
  
});
//VIEW LIST TYPE END

//MODAL
const modal=document.querySelector(".modal-view");

const closeModal=document.querySelector(".close-modal");

closeModal.addEventListener("click", ()=>{
  modal.classList.remove("show-modal");
});
//MODAL END