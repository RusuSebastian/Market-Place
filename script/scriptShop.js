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
  for (const item of items) {
      const product = document.createElement("div");
      product.classList.add("product-item");
      product.onmouseover = function () {
        imgProduct.src = item.url2;
      };
      product.onmouseout = function () {
        imgProduct.src = item.url;
      };
      categItms.appendChild(product);
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
  
};
showItems();

