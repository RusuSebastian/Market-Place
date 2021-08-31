const c=document.querySelector(".inner-bot");
const modal=document.querySelector(".modal-view");
for(const item of allItems){
    if(item.discount > 10){
displayItems(item,c)}
    };

let btnsdeal = document.querySelectorAll(".dealarr");
let product = document.getElementsByClassName('product-item');

btnsdeal[0].addEventListener("click",function(){left_mover(100,product)});
btnsdeal[1].addEventListener("click",function(){right_mover(100,150,product)});


//
const tbody=document.querySelector(".tbody-cart-item");
const cart=JSON.parse(localStorage.getItem("cart"));


cart.forEach(elem =>{
for(const eleme of allItems){
    if(eleme.id==elem.item){
tbody.innerHTML+=`
<tr class="item-from-cart">
<td class="product-remove">
    <button class="remove-item-cart">X</button>
</td>
<td class="product-thumbnail">
    <img src="${eleme.photos[0]}" alt="" class="item-pic">
</td>
<td class="product-name">
    <p class="item-name">${elem.name}</p>
</td>
<td class="product-price">
    <span class="item-price">$ ${elem.price}</span>
</td>
<td class="product-quantity">
    <div class="quantity">
        <span>Qty: </span>
        <input type="number" name="qty-checkout" id="qty-checkout" value="${elem.quantity}" min="0" max="100" pattern="[0-9]">
    </div>
</td>
<td class="product-subtotal">
    <span class="item-subtotal">$ ${elem.price*elem.quantity}</span>
</td>
</tr>`;}
}
});

const trUpdate=document.createElement("tr");
trUpdate.classList.add("actions");
trUpdate.innerHTML=`<td class="action" colspan="6">
<button type="submit" class="update-cart-btn">Update cart</button>
</td>`;
tbody.appendChild(trUpdate);

let cartItem = JSON.parse(localStorage.getItem('cart'));

function removeItemCheckout(){
const newcart=[];
const removeItem = document.getElementsByClassName('remove-item-cart');
// let cartItem = JSON.parse(localStorage.getItem('cart'));
    for(var i = 0; i < removeItem.length; i++){
        let removeBtn = removeItem[i];
        removeBtn.addEventListener('click', (event) =>{
        event.preventDefault();
        
        console.log(event.target.parentElement.parentElement.children[2].children[0].textContent);
        cartItem.forEach(item => {
          if(item.name != event.target.parentElement.parentElement.children[2].children[0].textContent){
            newcart.push(item);
          }
        });
        localStorage.setItem('cart', JSON.stringify(newcart))
        function reloadP() {
            localStorage.setItem("reloading", "true");
            window.location.reload();
        }
        reloadP()
    
        })
        cartModal.classList.add("show"); 
        }
    }removeItemCheckout();

    
const cartForum=document.querySelector(".cart-form");
cartForum.addEventListener("submit",(e)=>{
e.preventDefault();
const inputCheck=document.querySelectorAll("#qty-checkout");
console.log(inputCheck.length,cartItem.length);

for(let i=0;i<inputCheck.length;i++){
cartItem[i].quantity=inputCheck[i].value;

}
localStorage.setItem("cart",JSON.stringify(cartItem));

function reloadP() {
    localStorage.setItem("reloading", "true");
    window.location.reload();
}
reloadP()

});









window.onload=()=>{
    const aside=document.querySelector("aside");
    aside.classList.remove("show");
}