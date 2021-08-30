
const questAns=[...document.querySelectorAll(".quest-ans")];

questAns.forEach((ans)=>{
    ans.addEventListener("click", function(){
        ans.classList.toggle("ans-activated");
    });
})


