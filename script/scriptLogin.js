const container=document.querySelector(".container");
const inputs=document.querySelectorAll(".form-box input[type='password'");
const icons=[...document.querySelectorAll(".form-icon")];
const spans=[...document.querySelectorAll(".form-box .top span")];
const section=document.querySelector("section");


spans.map((span) => {

    span.addEventListener("click", (e)=>{
        const color=e.target.dataset.id;
        container.classList.toggle("active");
        section.classList.toggle("active");
        
        
    });
});


Array.from(inputs).map((input) =>{
    icons.forEach((icon)=>{
        icon.innerHTML = `<img src="./photos/login/eye.svg" alt="">`;
        
        icon.addEventListener("click",()=>{
            const type=input.getAttribute("type");
            console.log(type);
            if (type ==="password"){
                input.setAttribute("type","text");
                icon.innerHTML=`<img src="./photos/login/hide.svg" alt="">`;
            }else if(type==="text"){
                input.setAttribute("type","password");
                icon.innerHTML=`<img src="./photos/login/eye.svg" alt="">`;
            }
            
        });

    });
});