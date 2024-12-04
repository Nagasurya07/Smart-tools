const passwordbox=document.getElementById("password")
const length=12;
const copypass=document.getElementById("c")
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijlmnopqrstuvwxyz"
const number="1234567890"
const symbol="~!@#$%^^&*()_-+=/><[]{]"
const allchar=uppercase+lowercase+number+symbol;
function createpassword(){
  let password=""
  while(length>password.length){
    password+=allchar[Math.floor(Math.random()*allchar.length)]
  }
  passwordbox.value=password;
  
}
function copypassword(){
  passwordbox.select();

  document.execCommand("copy")
  copypass.innerHTML="Copied!"
  copypass.style.color="green"
  
}
