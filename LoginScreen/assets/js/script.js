let nameInput = document.querySelector("#name")
let nameError = document.querySelector(".nameError")
let surnameInput = document.querySelector("#surname")
let surnameError = document.querySelector(".surnameError")
let mailInput = document.querySelector("input[type=email]")
let mailError = document.querySelector(".mailError")
let pswInput = document.querySelector("#pass")
let confirmPswInput = document.querySelector("#confirmpass")
let pswError = document.querySelector(".passError")
let btn = document.querySelector("button[type=button]")
btn.onclick = function(){
   
    if(!nameInput.value){
        nameError.classList.remove("d-none")
    }
    else{
        nameError.classList.add("d-none")
        document.getElementsById("nameId").style.color="red"
    }
    if(!surnameInput.value){
        surnameError.classList.remove("d-none")
    }
    else{
        surnameError.classList.add("d-none")
        document.getElementsById("surId").style.color="red"
    }
    if(!mailInput.value){
        mailError.classList.remove("d-none")
    }
    else{
        mailError.classList.add("d-none")
        document.getElementsById("mailId").style.color="red"
    }
    if(!pswInput.value && !confirmPswInput.value){
        pswError.classList.remove("d-none")
       
    }
    else{
        if(pswInput.value!=confirmPswInput.value){
            pswError.classList.remove("d-none") 
        }
        else{
            pswError.classList.add("d-none")
            document.getElementsById("passwordId").style.color="red"
        }
    }

}


