// start //

const closeEye = document.querySelector('.close-eye');
const openEye = document.querySelector('.open-eye');
const passInput = document.getElementById('pass');

function showPass() {
    closeEye.classList.add("pp");
    openEye.classList.remove("pp");
    if (passInput.type = "password") {
        passInput.type = "text";
    }
    else {
        passInput.type = "password";
    }
}
function hidePass() {
    openEye.classList.add("pp");
    closeEye.classList.remove("pp");
    if (passInput.type = "text") {
        passInput.type = "password"
    } else {
        passInput.type = "text";
    }
}

//// Password show/hide   close /////


const registerClick = document.querySelector('.register-click');
const loginClick = document.querySelector('.login-click');

const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

const signupBtn = document.getElementById('signup');

registerClick.addEventListener('click',()=>{
    loginForm.classList.add('pp');
    registerForm.classList.remove('pp');
    signupBtn.innerHTML = "Login";
})
loginClick.addEventListener('click',()=>{
    registerForm.classList.add('pp');
    loginForm.classList.remove('pp');
    signupBtn.innerHTML = "Register";
})

////// form transfer close ////


signupBtn.addEventListener('click',()=>{
    loginForm.classList.toggle('pp');
    registerForm.classList.toggle('pp');
    signupBtn.innerHTML = "Register";
})
       
