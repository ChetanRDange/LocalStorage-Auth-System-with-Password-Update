// let image= new Image()
// image.src="cross.png"
// image.classList.add("image")
// let a =document.querySelector("#username").value
// console.log(a)
// a.appendChild(image);




function ucheck() {
    let a = myform.username.value;
    let words = a.split(" ");
    let pattern = /^(?!.*\s)(?=(?:.*\d.*\d))(?=.*[\W_]).+$/;
    let existingError = myform.username.nextElementSibling;
    if (existingError.classList.contains("errortext")) {
        existingError.remove();
    }
    myform.username.classList.remove("error");
    myform.username.classList.remove("inputimage");
    myform.username.classList.remove("inputyes");
    myform.username.classList.remove("pass");

    for (let first of words) {
        if (first.length > 0) {
            let f = first[0];
            if (f.toUpperCase() === f && pattern.test(a)) {
                console.log("Valid username:", a);
                myform.username.classList.add("pass")
                myform.username.classList.add("inputimage")
                myform.username.classList.add("inputyes")
                

                
            } else {
                myform.username.classList.add("inputimage")
                myform.username.classList.remove("pass")
                myform.username.classList.remove("inputyes")
                myform.username.classList.add("error")

                let text = document.createElement("div");
                text.innerHTML = "Username Should like this John_Cena12#";
                text.style.color = "red";
                text.classList.add("errortext");
                text.style.fontSize = "small"
                myform.username.insertAdjacentElement('afterend', text);
            }
        }
        else {
            myform.username.classList.add("error");

        }
    }
}

function gcheck() {
    let a = myform.email.value
    console.log(a)
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(a.slice(-9));
    let existingError = myform.email.nextElementSibling;
    if (existingError.classList.contains("errortext")) {
        existingError.remove();
    }
    if (a.length > 0) {

        if (pattern.test(a) && a.slice(-4) === ".com" && a.toLowerCase() === a) {
            myform.email.classList.add("pass");
            myform.email.classList.add("inputimage");
            myform.email.classList.add("inputyes");
        }

        else {
            myform.email.classList.remove("pass")
            myform.email.classList.add("error")
            myform.email.classList.remove("inputyes")
            myform.email.classList.add("inputimage")

            let text = document.createElement("div");
            text.innerHTML = "Email Should like this JohnCena3@gmail.com";
            text.style.color = "red";
            text.classList.add("errortext");
            text.style.fontSize = "small"
            myform.email.insertAdjacentElement('afterend', text);

        }
    } else {
        myform.email.classList.add("error");
    }
}

function ocheck() {
    const radios = document.querySelectorAll('input[name="gender"]');
    let a = document.querySelector(".input-image");
    let isChecked = false;

    radios.forEach((radio) => {
        if (radio.checked) {
            isChecked = true;
        }
    });

    if (isChecked) {
        // a.style.display = "none";
        a.src = "/images/yes.png";
    } else {
        a.style.display = "initial";

    }
}


function pcheck() {

    let a = myform.pass.value

    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()\-+=\[\]{};':"\\|,.<>\/?]{8,}$/;
    let existingError = myform.pass.nextElementSibling;
    if (existingError.classList.contains("errortext")) {
        existingError.remove();
    }
    if (a.length > 0) {
        console.log(pattern.test(a))
        if (pattern.test(a)) {
            myform.pass.classList.add("pass");
            myform.pass.classList.add("inputimage");
            myform.pass.classList.add("inputyes");
        }

        else {
            myform.pass.classList.remove("pass")
            myform.pass.classList.add("error")
            myform.pass.classList.remove("inputyes")
            myform.pass.classList.add("inputimage")

            let text = document.createElement("div");
            text.innerHTML = "1 lowercase, 1 uppercase, 1 digit, 1 special, 8+ chars";
            text.style.color = "red";
            text.classList.add("errortext");
            text.style.fontSize = "small"
            text.style.width = "267px"
            myform.pass.insertAdjacentElement('afterend', text);

        }
    } else {
        myform.pass.classList.add("error");
    }
    return myform.pass.value;
}

function ccheck() {

    let a = myform.cpass.value

   
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()\-+=\[\]{};':"\\|,.<>\/?]{8,}$/;
    let existingError = myform.cpass.nextElementSibling;
    if (existingError.classList.contains("errortext")) {
        existingError.remove();
    }
    if (a.length > 0) {

        let m = myform.pass.value
        if (a === m) {
            myform.cpass.classList.add("pass");
            myform.cpass.classList.add("inputimage");
            myform.cpass.classList.add("inputyes");
        }

        else {
            myform.cpass.classList.remove("pass")
            myform.cpass.classList.add("error")
            myform.cpass.classList.remove("inputyes")
            myform.cpass.classList.add("inputimage")

            let text = document.createElement("div");
            text.innerHTML = "Password MissMatch";
             text.style.color = "red";
            text.classList.add("errortext");
            text.style.fontSize = "small"
            text.style.width = "267px"
            myform.cpass.insertAdjacentElement('afterend', text);

        }
    } else {
        myform.cpass.classList.add("error");
    }
}

function mcheck() {

    let a = myform.mpass.value

  
    let pattern = /^(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
    let existingError = myform.mpass.nextElementSibling;
    if (existingError.classList.contains("errortext")) {
        existingError.remove();
    }
    
    if (a.length > 0) {
        if (pattern.test(a)) {
            myform.mpass.classList.add("pass");
            myform.mpass.classList.add("inputimage");
            myform.mpass.classList.add("inputyes");
        }

        else {
            myform.mpass.classList.remove("pass")
            myform.mpass.classList.add("error")
            myform.mpass.classList.remove("inputyes")
            myform.mpass.classList.add("inputimage")

            let text = document.createElement("div");
            text.innerHTML = "10 digits, optional country code, spaces/dashes";

            text.style.color = "red";
            text.classList.add("errortext");
            text.style.fontSize = "small"
            text.style.width = "267px"
            myform.mpass.insertAdjacentElement('afterend', text);

        }
    } else {
        myform.mpass.classList.add("error");
    }

}
function dcheck() {
    const date = document.getElementById("bdate");
    let existingError = date.nextElementSibling;
    
    if (existingError && existingError.classList.contains("errortext")) {
        existingError.remove();
    }

    let year = date.value.split('-')[0]; 
    let pattern = /\b(19|20)\d{2}\b/; 

    if (date.value !== '') { 
        if (pattern.test(year)) {
            date.classList.remove("error");
            date.classList.add("pass");
        } else {
            date.classList.remove("pass");
            date.classList.add("error");
            let text = document.createElement("div");
            text.innerHTML = "Invalid date";
            text.style.color = "red";
            text.classList.add("errortext");
            text.style.fontSize = "small";
            date.insertAdjacentElement('afterend', text);
        }
    } else {
        date.classList.add("error");
    }
}


function scheck() {
    let select = document.querySelector("#city").value;
    let existingError = myform.city.nextElementSibling;
    if (existingError.classList.contains("errortext")) {
        existingError.remove();
    }
    if (select != '') {
        myform.city.classList.remove("error")
        myform.city.classList.add("pass");
    }
    else {
        myform.city.classList.remove("pass")
        myform.city.classList.add("error")

        let text = document.createElement("div");
        text.innerHTML = "Select in option";
      
        text.style.color = "red";
        text.classList.add("errortext");
        text.style.fontSize = "small"
        text.style.width = "267px"
        myform.city.insertAdjacentElement('afterend', text);
    }
}


function osubmit(event){
    alert("Do you want to Submit....")
    let form=document.getElementById("myform");
    let formdata= new FormData(form);
    let username=formdata.get("username");
    let email=formdata.get("email");
    let gender=formdata.get("gender");
    let Password=formdata.get("pass");
    let mpass=formdata.get("mpass");
    let bdate=formdata.get("bdate");
    let city=formdata.get("city");
    console.log(username);
    console.log(email);
    console.log(gender);
    console.log(Password);
    console.log(mpass);
    console.log(bdate);
    console.log(city);
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("gender",gender);
    localStorage.setItem("Password",Password);
    localStorage.setItem("mobilepass",mpass);
    localStorage.setItem("birthdate",bdate);
    localStorage.setItem("city",city);

    document.getElementById("myForm").reset();
}


function lsubmit(event){
    event.preventDefault();
    let form=document.getElementById("myform");
    let formdata= new FormData(form);
    let username=formdata.get("username");
    let Password=formdata.get("pass");
    console.log(username);
    console.log(Password);
    let luser =localStorage.getItem("username");
    let lpass =localStorage.getItem("Password");
   
    if(luser===username && lpass=== Password)
    {
        alert("login successfully")
    }
    else
    {
     alert("user not found");
    }
    
    document.getElementById("myform").reset();
    form.username.classList.remove("error");
    form.username.classList.remove("inputimage");
    form.username.classList.remove("inputyes");
    form.username.classList.remove("pass");
    form.pass.classList.remove("error");
    form.pass.classList.remove("inputimage");
    form.pass.classList.remove("inputyes");
    form.pass.classList.remove("pass");

}


function  rsubmit(event){
    event.preventDefault();
    let form=document.getElementById("myform");
    let formdata= new FormData(form);
    let username=formdata.get("username");
    let Password=formdata.get("pass");
    console.log(username);
    console.log(Password);
    let luser =localStorage.getItem("username");
   
   
    if(luser===username )
    {
        localStorage.removeItem("Password");
        localStorage.setItem("Password",Password);
        alert("password update")
    }
    else
    {
     alert("invalid data");
    }
    
    document.getElementById("myform").reset();
    form.username.classList.remove("error");
    form.username.classList.remove("inputimage");
    form.username.classList.remove("inputyes");
    form.username.classList.remove("pass");
    form.pass.classList.remove("error");
    form.pass.classList.remove("inputimage");
    form.pass.classList.remove("inputyes");
    form.pass.classList.remove("pass");
    form.cpass.classList.remove("error");
    form.cpass.classList.remove("inputimage");
    form.cpass.classList.remove("inputyes");
    form.cpass.classList.remove("pass");

}