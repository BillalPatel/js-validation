var nameRegEx = /^[a-zA-Z\s]*$/;
var telRegEx = /^(?:[0-9 ]+$)/;
var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var postcodeRegExp = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})/;

function validateName(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("name-div");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (field.trim().length == 0) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Name field cannot be left empty.";
        return false;
    } else if (!nameRegEx.test(field)) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Only letters are accepted within the name field.";
        return false;
    } else if (nameRegEx.test(field)) {
        pTag[0].style.display = "none";
        return true;
    }
}

function validateTelephone(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("phone-div");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (!telRegEx.test(field)) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Only numbers are accepted within the telephone field.";
        return false;
    } else if (field.length < 11 || field.trim().length == 0) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Telephone number should consist of no less than 11 digits.";
        return false;
    } else if (field.toString().replace(/\s/g,'').length > 11) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Telephone number should consist of no more than 11 digits.";
        return false;
    } else if (telRegEx.test(field) && field.toString().length == 11) {
        pTag[0].style.display = "none";
        return true;
    }
}

function validateEmail(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("email-div");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (field.trim().length == 0) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "E-mail field cannot be left empty.";
        return false;
    } else if (!emailRegEx.test(field)) {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Please enter a valid e-mail address.";
        return false;
    } else if (emailRegEx.test(field)) {
        pTag[0].style.display = "none";
        return true;
    }
}

function validatePostcode(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("postcode-div");
    var pTag = getParentDiv.getElementsByTagName("P");
    
    if (field == "") {
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Postcode field cannot be left empty.";
        return false;
    } else if (!postcodeRegExp.test(field)){
        pTag[0].style.display = "block";
        pTag[0].innerHTML = "Please enter a valid postcode.";
        return false;
    } else if (postcodeRegExp.test(field)){
        pTag[0].style.display = "none";
        return true;
    }
}

function capitaliseInput(id) {
    document.getElementById(id).value = document.getElementById(id).value.toUpperCase();
}

function addQtyFields() {
    var number = document.getElementById("qty-of-products").value;
    var container = document.getElementById("products-container");
        
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    
    for (i=0; i<number; i++) {
        var product = document.createElement("input");
            product.type = "text";
            product.className = "appended-field";
            product.placeholder = "Product " + (i+1);
            container.appendChild(product);
            container.appendChild(document.createElement("br"));

        var nameOrQuote = document.createElement("input");
            nameOrQuote.type = "text";
            nameOrQuote.className = "appended-field";
            nameOrQuote.placeholder = "Name or Quote";
            nameOrQuote.required = true;
            container.appendChild(nameOrQuote);
            container.appendChild(document.createElement("br"));   
        
        var price = document.createElement("input");
            price.type = "text";
            price.className = "appended-field";
            price.placeholder = "Price";
            price.required = true;
            container.appendChild(price);
            container.appendChild(document.createElement("br")); 
    }
}