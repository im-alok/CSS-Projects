


let button = document.getElementById('btn');
button.addEventListener('click', check);

function check() {
    let validemail = "ranjanalok00007@gmail.com"
    let validpass = "alok@123"
    let gmail = document.getElementById('Email').value;
    let passcode = document.getElementById("PASSWORD").value;

    if (gmail === validemail && passcode === validpass){
        window.open("test.html");
    }

    else
        alert("Username/password is Wrong");
}