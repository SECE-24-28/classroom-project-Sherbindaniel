 const form = document.querySelector("#form")
 const username = document.querySelector("#username")
 const email = document.querySelector("#email")
 const password = document.querySelector("#password")
 const cpassword = document.querySelector("#cpassword")

 form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs();
 })
 function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()

    if(usernameVal ===''){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
    
    if(emailVal ===''){
        setError(email,'email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please enter email')
    }
    else{
        setSuccess(email)
    }
    
    if(passwordVal ===''){
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'password must be atleast 8 character');
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal ===''){
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal!=passwordVal){
        setError(cpassword,'confirm password is different here');
    }
    else{
        setSuccess(cpassword)
    }
    
    



 }
 function setError(element,message){
    const Inputgroup = element.parentElement;
    const errorElement = Inputgroup.querySelector(".error");
    errorElement.innerText = message;
    Inputgroup.classList.add('error')
    Inputgroup.classList.remove('success')

 }
  function setSuccess(element){
    const Inputgroup = element.parentElement;
    const errorElement = Inputgroup.querySelector(".error");
    errorElement.innerText = '';
    Inputgroup.classList.add('success')
    Inputgroup.classList.remove('error')

 }
 const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
 };