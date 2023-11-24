const loginform = document.getElementById("login-form")
const loginButton = document.getElementById("login-form-submit")
const loginErrorMsg = document.getElementById("login-error-msg")

loginButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let username = loginform.username.value;
    let password = loginform.password.value;
    if(username ==="batata" && password==="batata"){
        alert("seu login deu certo");
        location.reload();
        window.location.href ="parallax/index.html"

    }else{
        loginErrorMsg.style.opacity = 1;
    }
});