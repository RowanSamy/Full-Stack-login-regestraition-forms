const Name=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('pwd')
const cpassword=document.getElementById('pwd1')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')
const errorElement1=document.getElementById('error1')
const errorElement2=document.getElementById('error2')
const errorElement3=document.getElementById('error3')

form.addEventListener('submit',(e) => {
    let message = []
    if(Name.value == '' || Name.value== null ){
       message.push('Name must be filled out')}
    if(message.length > 0){
        e.preventDefault()
       errorElement.innerText = message.concat()  
    }
    if(message.length == 0){
        errorElement.innerText = ' '
     }
}) 
form.addEventListener('submit',(e) => {
    let message1 = []
    if(email.value == ''){
        message1.push('Email must be filled out')
    } 
    if(message1.length > 0){
        e.preventDefault()
       errorElement1.innerText = message1.concat()
    }
    if(message1.length == 0){
       errorElement1.innerText = ' '
       var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       if(email.value.match(mailformat)){
        errorElement1.innerText = ' '
       }
       else{
        message1.push('You have to enter a valid e-mail')
        e.preventDefault()
       errorElement1.innerText = message1.concat()  
       }
}})  
form.addEventListener('submit',(e) => {
    let message2 = []
    if(password.value == ''){
        message2.push('Password must be filled out')
     }
    if(message2.length > 0){
        e.preventDefault()
       errorElement2.innerText = message2.concat()
    }
    if(message2.length == 0){
       errorElement2.innerText = ' '
    }
})  
form.addEventListener('submit',(e) => {
    let message3 = []
    if(cpassword.value == ''){
        message3.push('You must confirm your password')
     }
    if(message3.length > 0){
        e.preventDefault()
       errorElement3.innerText = message3.concat()
    }
    if(message3.length == 0){
       errorElement3.innerText = ' '
       if(password.value != cpassword.value){
        message3.push('Your confirmatory password does not match')
        e.preventDefault()
       errorElement3.innerText = message3.concat()
    }
}
})  


   
       
       
    