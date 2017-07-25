function formValidation() {
    var nameEmptyError = "Name field cannot be left empty";
    var telEmptyError = "Telephone field cannot be left empty";
    var emailEmptyError = "Email field cannot be left empty";
    
//    var name = document.getElementById("name").value;
//    var nameError = document.getElementById("name_error");
//    if (name == "") {
//        name.style.visibility = "visible";
//    }
    
    var nameRegExp = /^[a-zA-Z]+$/;
    if (!nameRegExp.test(name)) {
        alert("Only letters are accepted within the name field");
    }
    
    var telephone = document.getElementById("telephone").value;
    if (telephone == "") {
        alert(telEmptyError);
    }
    
    if (telephone.length > 11) {
        alert("Telephone number should consist of no more than 11 digits");
    } else if (telephone.length < 11) {
        alert("Telephone number should consist of no less than 11 digits");
    }
    
    var telephoneRegExp = /^[0-9]+$/;
    if (!telephoneRegExp.test(telephone)) {
        alert("Only numbers are accepted within the telephone");
    }
    
    var email = document.getElementById("email").value;
    if (email == "") {
        alert(emailEmptyError);
    }
    
    var emailRegExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (!emailRegExp.test(email)) {
        alert("Please enter a valid e-mail address");
    }
    
    var postcode = document.getElementById("postcode").value;
    var postcodeRegExp = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/gi;
    if (postcode == "" || !postcodeRegExp.test(postcode) || postcode.length > 8) {
        alert("Please enter a valid post code");
    }
}

/* 
    Error messages below - 
    UPDATE REGEXS
*/

function verifyNameOnBlur() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("name_error");
    if (name == "") {
        nameError.style.visibility = "visible";
    } else if (/^[a-zA-Z]+$/.test(name)){
        nameError.style.visibility = "hidden";
    }
}

function verifyNameOnFocus() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("name_error");
    if (/^[a-zA-Z]+$/.test(name)){
        nameError.style.visibility = "hidden";
    }
}

function verifyTelephoneOnBlur() {
    var telephone = document.getElementById("telephone").value;
    var telephoneError = document.getElementById("telephone_error");
    if (telephone== "") {
        telephoneError.style.visibility = "visible";
    } else if (/^[a-zA-Z]+$/.test(telephone)){
        telephoneError.style.visibility = "hidden";
    }
}

function verifyTelephoneOnFocus() {
    var telephone = document.getElementById("telephone").value;
    var telephoneError = document.getElementById("telephone_error");
    if (/^[a-zA-Z]+$/.test(telephone)){
        telephoneError.style.visibility = "hidden";
    }
}

function verifyEmailOnBlur() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email_error");
    if (email == "") {
        emailError.style.visibility = "visible";
    } else if (/^[a-zA-Z]+$/.test(email)){
        emailError.style.visibility = "hidden";
    }
}

function verifyEmailOnFocus() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email_error");
    if (/^[a-zA-Z]+$/.test(email)){
        emailError.style.visibility = "hidden";
    }
}

function verifyPostcodeOnBlur() {
    var postcode = document.getElementById("postcode").value;
    var postcodeError = document.getElementById("postcode_error");
    if (postcode == "") {
        postcodeError.style.visibility = "visible";
    } else if (/^[a-zA-Z]+$/.test(postcode)){
        postcodeError.style.visibility = "hidden";
    }
}

function verifyPostcodeOnFocus() {
    var postcode = document.getElementById("postcode").value;
    var postcodeError = document.getElementById("postcode_error");
    if (/^[a-zA-Z]+$/.test(postcode)){
        postcodeError.style.visibility = "hidden";
    }
}


function otherOption(val) {
    var otherTextField = document.getElementById("other_product_details");    
    var element = document.getElementById("other_option");
    if (val == 'other') {
        otherTextField.style.visibility = "visible";   
    }
}