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

const forms=document.querySelectorAll("form");
console.log(forms)

forms[1].addEventListener("submit",(e)=>{
e.preventDefault();
const inputs=forms[1].querySelectorAll("input");

if(inputs[1].value==inputs[2].value){
    localStorage.setItem("username",inputs[0].value);
    localStorage.setItem("pass",inputs[1].value);
    inputs[1].style.border="1px solid #ddd";
    inputs[2].style.border="1px solid #ddd";
    document.querySelector("section").classList.remove("active");
    document.querySelector(".container").classList.remove("active");
    document.querySelector(".pass-error").style.display ="none";
}else{
    inputs[1].style.border="1px solid red";
    inputs[2].style.border="1px solid red";
    document.querySelector(".pass-error").style.display ="block";
}
inputs[0].value=inputs[1].value=inputs[2].value="";           
});

forms[0].addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputs=forms[0].querySelectorAll("input");
    let usr=localStorage.getItem("username");
    let pass=localStorage.getItem("pass");
    if(inputs[0].value==usr && inputs[1].value==pass){
        location.href="../index.html";
    }else{
        document.querySelector(".pass-error").style.display ="block";
    }
});