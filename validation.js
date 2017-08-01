var nameRegEx = /^[a-zA-Z\s]*$/;
var telRegEx = /^(?:[0-9 ]+$)/;
var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var postcodeRegExp = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})/;

function validateNameOnBlur(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("parent-name-id");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (field.trim().length == 0) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Name field cannot be left empty.";
    } else if (!nameRegEx.test(field)) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Only letters are accepted within the name field.";
    } else if (nameRegEx.test(field)) {
        pTag[0].style.visibility = "hidden";
    }
}

function validateTelOnBlur(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("parent-tel-id");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (!telRegEx.test(field)) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Only numbers are accepted within the telephone field.";
    } else if (field.length < 11 || field.trim().length == 0) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Telephone number should consist of no less than 11 digits.";
    } else if (field.toString().replace(/\s/g,'').length > 11) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Telephone number should consist of no more than 11 digits.";
    } else if (telRegEx.test(field) && field.toString().length == 11) {
        pTag[0].style.visibility = "hidden";
    }
}

function validateEmailOnBlur(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("parent-email-id");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (field.trim().length == 0) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "E-mail field cannot be left empty.";
    } else if (!emailRegEx.test(field)) {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Please enter a valid e-mail address.";
    } else if (emailRegEx.test(field)) {
        pTag[0].style.visibility = "hidden";
    }
}

function validatePostcodeOnBlur(id) {
    var field = document.getElementById("postcode").value;
    var getParentDiv = document.getElementById("parent-postcode-id");
    var pTag = getParentDiv.getElementsByTagName("P");
    
    if (field == "") {
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Postcode field cannot be left empty.";
    } else if (!postcodeRegExp.test(field)){
        pTag[0].style.visibility = "visible";
        pTag[0].innerHTML = "Please enter a valid postcode.";
    } else if (postcodeRegExp.test(field)){
        pTag[0].style.visibility = "hidden";
    }
}

function otherOption(val) {
    var otherTextField = document.getElementById("other_product_details");    
    var element = document.getElementById("other_option");
    if (val == 'other') {
        otherTextField.style.visibility = "visible";   
    }
}
