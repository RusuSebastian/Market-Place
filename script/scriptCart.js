const c=document.querySelector(".inner-bot");

for(const item of allItems){
    if(item.discount > 10){
displayItems(item,c)}
    };

let btnsdeal = document.querySelectorAll(".dealarr");
let product = document.getElementsByClassName('product-item');

btnsdeal[0].addEventListener("click",function(){left_mover(100,product)});
btnsdeal[1].addEventListener("click",function(){right_mover(100,150,product)});