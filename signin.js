var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";
}

var son = document.querySelector(".submit-btn")
son.addEventListener("click", submit)
 function submit(){
     window.location="index.html"
 }

             
                  

// const form = document.getElementById("form-box")
// const email = document.getElementById("email")
// const password = document.getElementById("password")
// const password2 = document.getElementById("password2")

// form.addEventListener('submit', e => {
//     e.preventDefault();

// });
// const setError (element, message) =>{

// }


// const validateInputs=() =>{
//     const usernameValue=user.value.trim();
//     const emailValue=email.value.trim();
//     const passwordValue=password.value.trim(); 
//     const password2Value=password2.value.trim();
//  };