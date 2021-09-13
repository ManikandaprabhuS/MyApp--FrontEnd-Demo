const sign_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function validateForm(){

var log_user= document.signin.user.value;
var log_pass= document.signin.pass.value;

if ((log_user == "") || (log_pass == "")) {
  alert("Username or password canot be Empty!.");
  return false;
}
if ((log_user.length < 6) || (log_pass.length < 6))
{
  alert("userName and Pasworrd is min 6 ");
  return false;
}
if(log_user =="sivakumar"){
  if(log_pass =="123456789"){
      return true;
  }
  else{
  alert("Username and pasword is not valid");
  return false;
  }
}
}