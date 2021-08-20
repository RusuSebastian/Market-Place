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

console.log(thumbnails);

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
let product = document.getElementsByClassName('deal-item');
btnsdeal[0].addEventListener("click",function(){left_mover(100,product)});
btnsdeal[1].addEventListener("click", function(){right_mover(100,200,product)});
  