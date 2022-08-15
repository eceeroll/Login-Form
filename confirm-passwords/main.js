const password1 = document.getElementById("pass-input");
const password2 = document.getElementById("confirm-input");
const submitBtn = document.getElementById("submit-btn");
const alertArea = document.querySelector(".alert");


submitBtn.addEventListener("click", checkPasswords);


function checkPasswords(e) {
    e.preventDefault();
    if(password1.value === password2.value) {
        return showAlert("success", "Passwords has matched!")

    }else {
        return showAlert("danger", "Passwords are not matching!")
    }
}

function showAlert(type,message){
    console.log("girdi")
    const alert1 = document.createElement("div");

    alert1.className = `alert alert-${type}`;

    alert1.textContent = message;

    alertArea.appendChild(alert1);

    setTimeout(function(){
        alert1.remove();
    },1000);

}