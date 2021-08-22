const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
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