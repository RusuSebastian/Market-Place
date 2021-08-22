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

//testimonials
  const dots=document.querySelector(".testimonials-dots");
  const tertimonial=document.querySelector(".testimonials");

  dots.addEventListener("click", function(e){
    for(const dot of dots.children){
       dot.classList.remove("active-dot");
      if(e.target.className !== "active-dot"){
        e.target.classList.add("active-dot");
        }
    }
    if(e.target == dots.children[0])
    {tertimonial.style.left="0";}
    else if(e.target == dots.children[1])
    {tertimonial.style.left="-100%";}
    else if(e.target == dots.children[2])
    {tertimonial.style.left="-200%";}
  });

 //counters
  const nums=[...document.querySelectorAll(".numberCounted")];
 
        function sa(num,max){
            let number=num.textContent;
            number++;
            num.textContent=number;
            if(Number(num.textContent) === max){
                clearInterval(setId);
            }
        }
        
        setId=setInterval((()=>{sa(nums[0],11);}),753);
        setId=setInterval((()=>{sa(nums[1],3335);}),6);
        setId=setInterval((()=>{sa(nums[2],973);}),23);
        setId=setInterval((()=>{sa(nums[3],132);}),87);


   
