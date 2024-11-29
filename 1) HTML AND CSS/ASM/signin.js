const NameLogin = document.querySelector("#input-login-name");
const PasswordLogin = document.querySelector("#input-login-password");

const btnLogin = document.querySelector(".login_signInButton");


btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    if (NameLogin.value === "" || PasswordLogin.value === "") {
        alert("Please enter Name or Password")
    }

    else{
        var user = JSON.parse(localStorage.getItem(NameLogin.value));

        if(
            user.name === NameLogin.value &&
            user.password === PasswordLogin.value)
            {
            window.location.href = "index.html";
        }
        else{
            alert("Invalid email or password!!")
        }
    }
})