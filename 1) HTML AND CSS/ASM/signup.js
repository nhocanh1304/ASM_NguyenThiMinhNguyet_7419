var emailSignUp = document.querySelector("#input-signup-email");
var passSignUp = document.querySelector("#input-signup-password");
var nameSignUp = document.querySelector("#input-signup-name");
var passSignUpConfirm = document.querySelector("#input-signup-confirm-password");


var btnSignUp = document.querySelector(".signup__signInButton");

btnSignUp.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailSignUp.value === "" || passSignUp.value === "" || nameSignUp.value === "" || passSignUpConfirm.value === "") {
        alert("Please enter email or password!!");
    }
    else {

        if (passSignUp.value === passSignUpConfirm.value) {
            // alert("chek pass ok!")
            var user = {
                name: nameSignUp.value,
                email: emailSignUp.value,
                password: passSignUp.value,
            }
        }

    }
    let jsonUser = JSON.stringify(user);
    localStorage.setItem(nameSignUp.value, jsonUser);
    window.location.href = "signin.html"
    // alert(jsonUser);
})
