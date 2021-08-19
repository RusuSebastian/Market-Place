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



//main carusel

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

//End main carousel



//img hover


function hover(element, nr) {
  
  element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
}

function unhover(element, nr) {
  element.children[0].setAttribute('src', `./photos/items/coffee${nr}.jpg`);
}

//end img hover

//shop by categories

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

console.log(items[8].type);
const categItms = document.querySelector(".categories-items");

function showItems(type) {
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
      const cart = document.createElement("a");
      cart.classList.add("cart");
      productBtns.appendChild(cart);
      const view = document.createElement("a");
      view.classList.add("view-modal");
      productBtns.appendChild(view);
      const wish = document.createElement("a");
      wish.classList.add("wishlist");
      productBtns.appendChild(wish);
    }
  }
};
showItems("Coffee Bean");


//shopcateg
const categories = document.querySelectorAll(".active");
const listCategories = document.querySelector(".type-categories");
console.log(listCategories.children);
listCategories.addEventListener("click", function addEvent(e) {
  categItms.innerHTML = "";
  showItems(e.target.innerText);

  for (const li of listCategories.children) {
    li.classList.remove("active");
  }
  e.target.classList.add("active");
});

// end shop categ


//carousel items


let btnsdeal = document.querySelectorAll(".dealarr");

	let product = document.getElementsByClassName('deal-item');
	let product_page = Math.ceil(product.length/4);
 
	let l = 0;
	let movePer = 100;
	let maxMove = 200;
	// mobile_view	
	// let mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches)
	//  {
	//  	movePer = 100;
	//  	maxMove = 501;
	//  }
//
  
	function right_mover(){
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	function left_mover (){
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}

  btnsdeal[0].addEventListener("click",left_mover);
  btnsdeal[1].addEventListener("click",right_mover);
  
  
  //
 let btnsblog=document.querySelectorAll(".arrow-blog");
 let blogproduct= document.getElementsByClassName('container-blog');
 let productblog_page = Math.ceil(blogproduct.length/3);

 
	let movePer1 = 33;
	let maxMove1 = 67;
 function right_moverr (){
  l = l + movePer1;
  if (blogproduct == 1){l = 0; }
  for(const i of blogproduct)
  {
    if (l > maxMove1){l = l - movePer1;}
    i.style.left = '-' + l + '%';
  }

}
function left_moverr (){
  l = l - movePer1;
  if (l<=0){l = 0;}
  for(const i of blogproduct){
    if (productblog_page>1){
      i.style.left = '-' + l + '%';
    }
  }
}
 

 btnsblog[0].addEventListener("click",left_moverr);

 btnsblog[1].addEventListener("click",right_moverr);

 




