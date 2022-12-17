var element=document.getElementById("user");
var mess=document.getElementById("usermessage")
var email=document.getElementById("email")
var messpar=document.getElementById("messpar")
var bttn=document.getElementById("bttn");
const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var psw=document.getElementById("psw");
var pswmess=document.getElementById("pswmess");
const regPassword=
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
var pswrepeat=document.getElementById("psw-repeat")
var pswrepeatmess=document.getElementById("psw-repeatmess")
const check=()=>{
if(element.classList.contains("success")&& email.classList.contains("success")&&psw.classList.contains("success")&&pswrepeat.classList.contains("success"))
{
    bttn.removeAttribute("disabled")
}else{
    bttn.setAttribute("disabled")

}
}

element.addEventListener("keyup",(eo)=>{
    element.classList.add("failed");
    mess.style.display="block";
    if(element.value.length >3){
        element.classList.add("success");
        mess.style.display="none";
        element.nextElementSibling.style.opacity="1";
    }else{
            element.classList.remove("success");
            element.nextElementSibling.style.opacity="0";
    }
check();

})
email.addEventListener("keyup",(eo)=>{
    email.classList.add("failed");
    messpar.style.display="block";
    if(regEmail.test(email.value)){
        email.classList.add("success");
        messpar.style.display="none";
        email.nextElementSibling.style.opacity="1";
    }else{

        email.classList.remove("success")
        email.nextElementSibling.style.opacity="0";

    }
    check();

})
psw.addEventListener("keyup",(eo)=>{
    psw.classList.add("failed");
    pswmess.style.display="block";
    if(regPassword.test(psw.value)){
        psw.classList.add("success");
        pswmess.style.display="none";
        psw.nextElementSibling.style.opacity="1";
    }else{

        psw.classList.remove("success")
        psw.nextElementSibling.style.opacity="0";

    }
check()
})
pswrepeat.addEventListener("keyup",(eo)=>{
    pswrepeat.classList.add("failed");
    pswrepeatmess.style.display="block";
    if(psw.value === pswrepeat.value){
        pswrepeat.classList.add("success");
        pswrepeatmess.style.display="none";
        pswrepeat.nextElementSibling.style.opacity="1";
    }else{

        pswrepeat.classList.remove("success")
        pswrepeat.nextElementSibling.style.opacity="0";

    }
    check();
})
let creataccount=document.getElementById("creataccount");
let myparent=document.getElementById('myparent');
let myform=document.getElementById('myform');
creataccount.addEventListener('click',(eo)=>{

    myparent.style.display='flex';
    creataccount.style.display='none';
    setTimeout(()=>{
        myform.style.transform = 'scale(1)';
    },50)


})
let close=document.getElementById('close')
close.addEventListener('click',(eo)=>{
    myform.style.transform= 'scale(0)';

    setTimeout(()=>{
        myparent.style.display='none';
        creataccount.style.display='flex';

    },300)


})

