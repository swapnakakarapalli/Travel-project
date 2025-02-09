function validate() {
    const username = document.getElementById("username").value;         //given input by user
    const nameError = document.getElementById("nameError");             //paragraph displays error
    let namestatus = false;                                             //for logical &&
    const alphaExp = /^[a-zA-Z]+$/;                                     //regular expression   /^[]+$/

    const mobile = document.getElementById("mobilenumber").value;
    const mobileError = document.getElementById("mobileError");
    let mobilestatus = false;
    const NumExp = /^[0-9]+$/;

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    let emailstatus = false;
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    //username
    if (username === "") {
        nameError.innerHTML = "Name is Mandatory";
    }
    else {
        if (username.match(alphaExp)) {
            nameError.innerHTML = "";
            namestatus = true;
        }
        else {
            nameError.innerHTML = "Only Characters";
        }
    }

    //mobileNumber
    if (mobile === "") {
        mobileError.innerHTML = "Mobile Number is Mandatory";
    }
    else {
        if (mobile.match(NumExp)) {
            if (mobile.length === 10) {
                mobileError.innerHTML = "";
                mobilestatus = true;
            }
            else {
                mobileError.innerHTML = "10 Digit Mobile Number";
            }
        }
        else {
            mobileError.innerHTML = "Only Digits";
        }
    }

    //email address
    if (email == "") {
        emailError.innerHTML = "Email is Mandatory";
    }
    else {
       if (email.match(emailExp)) {
        emailError.innerHTML = "";
        emailstatus = true;
       }
       else {
        emailError.innerHTML = "Invalid Email";
       }
    }

    //return
    if (namestatus && mobilestatus && emailstatus) {
        return true;
    }
    else {
        return false;
    }
}