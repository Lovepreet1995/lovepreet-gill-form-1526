function formValidate() {
    let name = document.getElementById("fullname").value;
    let mail = document.getElementById("email").value;
    let mess = document.getElementById("message").value;
    let button = document.getElementById("button");
    let mainForm = document.getElementById("iform");
    let mailex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let data = {
         name: "",
        mail: "",
        mess: ""
    };
    
    let error = [];

    // Full name

    if (name !== "") {
        data.name = fullname;
    } else {
        error.push("Enter your full name.");
    }

    //Email

    if (mail !== "") {
        if (mailex.test(mail)) {
            data.mail = email;
        } else {
            error.push("Invalid email!");
        }
    } else {
        error.push("Enter your email.");
    }

    // Message
    
    if (mess !== "") {
        data.mess = message;
    } else {
        error.push("Enter your message.");
    }
    if (error.length > 0) {
        console.log("Error:")
        console.log(error);
    } else {
        console.log("Collected Data:");
        console.log(data);
        iform.reset();
    }
}

button.addEventListener("click", formValidate);

