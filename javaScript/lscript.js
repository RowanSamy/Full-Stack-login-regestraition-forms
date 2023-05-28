
 function validate(){
    email=document.getElementById("email").value
    password=document.getElementById("pwd").value
    if(email == '' && password== ''){
        alert("Email and Password must be filled out")
        return false;
    }
    if(password== ''){
        alert("Password must be filled out")
        return false;
    }
    if(email == '' ){
        alert("Email must be filled out")
        return false;
    }
    else{
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(email.match(mailformat)){
           return true;
       }
       else{
        alert("You have to enter a valid e-mail") 
        return false;
       }
    }
 }