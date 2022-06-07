let domName = document.getElementById("text_name");
let domMail = document.getElementById("text_email");
let domText = document.getElementById("text_response");


let domNoteName = document.getElementById("name_notif");
let domNoteMail = document.getElementById("email_notif");
let domNoteText = document.getElementById("text_notif");

function mailCheck() {
    // gunakan regex untuk cek apakah email valid
    // pattern teks @ teks .teks (.com, .co.id, .net, dll)

    let email = domMail.value;
    let pattern =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if (email==""){
        domNoteMail.innerHTML = "Email address cannot be empty.";
        domNoteMail.style.color = "red"
        return false;
    } else if(pattern.test(email) != true) {
        domNoteMail.innerHTML = "Please enter a valid email address.";
        domNoteMail.style.color = "red"
        return false;
    } else {return true;}
    
}

function nameCheck() {

    let name = domName.value;

    if (name==""){
        domNoteName.innerHTML = "Please enter your name.";
        domNoteName.style.color = "red"
        return false;
    } else {return true;}
    
}

function msgCheck() {

    let msg = domText.value;

    if (msg==""){
        domNoteText.innerHTML = "Please enter your message.";
        domNoteText.style.color = "red"
        return false;
    } else {return true;}
    
}

function formValidate(){
    return(nameCheck() && mailCheck() && msgCheck());
}