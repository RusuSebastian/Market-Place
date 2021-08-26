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
  // windowClicked(".cart-icon",cartModal);
});



const questAns=[...document.querySelectorAll(".quest-ans")];

questAns.forEach((ans)=>{
    ans.addEventListener("click", function(){
        ans.classList.toggle("ans-activated");
    });
})



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