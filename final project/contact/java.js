document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();


    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");


    nameError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
    messageError.innerText = "";


    let isValid = true;

    if (name.length < 3) {
        nameError.innerText = "invalid";
        isValid = false;
    }

    if (!email.includes("@") || !email.includes(".com")) {
        emailError.innerText = "invalid";
        isValid = false;
    }

    if (subject.length === 0) {
        subjectError.innerText = "required";
        isValid = false;
    }

    if (message.length === 0) {
        messageError.innerText = "required";
        isValid = false;
    }

    if (isValid) {

        this.reset();
    }
});