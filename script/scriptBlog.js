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