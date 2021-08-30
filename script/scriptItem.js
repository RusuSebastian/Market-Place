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
  <form action="" class="Qty-add-cart-item">
      <label for="qty-item">Qty:</label>
      <input type="number" name="qty-item" id="qty-item" min="1" step="1" max="95"
      value="1" inputmode="numeric" pattern="[0-9]" >
      <button type="submit">ADD TO CART</button>
  </form>
  <p class="sku">SKU:<span class="sku-span"> NHFL5</span></p>
  <p class="categories-item">Categories:<span class="categories-item-span">${item.categories}</span></p>`;
  const formItem=document.querySelector(".Qty-add-cart-item");
  formItem.addEventListener("submit",(event)=>{
    const qty=document.querySelector("#qty-item");
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

//
const modal=document.querySelector(".modal-view");
function showItems(type,location) {
  for (const item of allItems) {
    if (item["categories"].includes(type)) {
      displayItems(item,location);
  }
};






//CAROUSEL ITMS FUNCT

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
  
})};
