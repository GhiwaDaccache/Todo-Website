const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('log-button');


btn.addEventListener("click", function () {
    if( usernameInput.value == "AdminSEF123" && passwordInput.value == "SeF@ctORy$$456"){
        window.location.href = "../Pages/todo.html"
    }
    else{
        alert("User does not exist. Please enter a valid username ")
    }
});













