const enter = document.querySelector(".enter");
const login = document.querySelector(".login");
const inform = document.querySelector(".inform");
const body = document.querySelector(".body");
const img = document.querySelector(".img");
const Lname = document.querySelector(".Lname");
const Fname = document.querySelector(".Fname");
const loginpage = document.querySelector(".loginpage");
const Welcom = document.querySelector(".Welcom");
const submit = document.querySelector(".submit");

let a=0;
enter.addEventListener("click" ,()=>{
    if(a==1){
        login.classList.remove("on");
        enter.classList.add("on");
        a=0;
        inform.style.left = "290px";
        img.style.rotate = "-25deg";

        setTimeout(function(){
            Lname.style.display = "flex"
            Fname.style.display = "flex"
            loginpage.style.display = "none";

            Welcom.style.backgroundImage="linear-gradient(90deg,#fff,#fff,#fff,#000000)";

        },100);
        submit.innerHTML="submit"
    }
})
login.addEventListener("click" ,()=>{
    if(a==0){
        enter.classList.remove("on");
        login.classList.add("on");
        a=1;
        inform.style.left = "550px";
        img.style.rotate = "130deg";

        setTimeout(function(){
            Lname.style.display = "none"
            Fname.style.display = "none"
            loginpage.style.display = "inline";
            Welcom.style.backgroundImage="linear-gradient(270deg,#fff,#fff,#fff,#000000)";
        },100);
        submit.innerHTML="login"



    }
})


// left: 290px;
// rotate: -25deg;


//    rotate: 130deg;
//    left: 550px;
