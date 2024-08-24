
document.forms[0].onsubmit = function(event) {

    var form = document.forms[0];
    var fname= form.fname.value;
    var lname = form.lname.value;
    var password = form.password.value;
    var confirmPassword = form.confirmPassword.value;
    var email = form.email.value;
    let valid = true;

    if(fname === "" || lname === "" || password ==="" || confirmPassword ==="" || email ===""){
        valid = false;
    }
    
    if(password !== confirmPassword){
        valid = false;
    }
    if(password.length < 8){
        valid = false;
    }
    

    if(!valid){
        alert("Please fill out all fields correctly");
        event.preventDefault();
    }
	return valid;
};
