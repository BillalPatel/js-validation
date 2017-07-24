function formValidation() {
    
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("Name field cannot be left empty");
    }
    
    var nameRegExp = /^[a-zA-Z]+$/;
    if (!nameRegExp.test(name)) {
        alert("Only letters are accepted within the name field");
    }
    
    var telephone = document.getElementById("telephone").value;
    if (telephone == "") {
        alert("Telephone field cannot be left empty");
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
        alert("Email field cannot be left empty")
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
    
//function otherOption() {
////    var productDropdown = document.getElementById("product_list").value;
//    var otherOption = document.getElementById("other_product_details");
////    if (productDropdown == "other") {
//        
//    otherOption.style.visibility = "visible";   
}