
const questAns=[...document.querySelectorAll(".quest-ans")];

questAns.forEach((ans)=>{
    ans.addEventListener("click", function(){
        ans.classList.toggle("ans-activated");
    });
})




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


   
