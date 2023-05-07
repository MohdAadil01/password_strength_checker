let pswrd = document.getElementById("myPassword")
let show = document.querySelector(".show")
let container = document.querySelector(".container")
// show.onclick = function(){
//     if(pswrd.type === "password"){
//         pswrd.setAttribute("type", "text")
//     }else{
//         pswrd.setAttribute("type", "password")
//     }
// }
const showPassword = () =>{
    if(pswrd.type === 'password'){
        pswrd.setAttribute("type", "text")
        show.classList.add("hide")
    }else{
        pswrd.setAttribute("type", "password")
        show.classList.remove("hide")
    }
}
show.addEventListener("click", showPassword)

const Strength = (password) =>{
    let i = 0;
    if(password.length > 6){
        i++
    }
    if(password.length >= 10){
        i++
    }
    if(/[A-Z]/.test(password)){
        i++
    }
    if(/[0-9]/.test(password)){
        i++
    }
    if(/[A-Za-z0-9]/.test(password)){
        i++
    }
    return i
}

document.addEventListener("keyup", function(e){
    let password = document.querySelector("#myPassword").value 
    let strength = Strength(password);
    if(strength <= 2){
        container.classList.add("weak")
        container.classList.remove("medium")
        container.classList.remove("strong")
    }
    else if(strength >= 2 && strength <= 4){
        container.classList.remove("weak")
        container.classList.add("medium")
        container.classList.remove("strong")
    }
    else{
        container.classList.remove("weak")
        container.classList.remove("medium")
        container.classList.add("strong")
    }
})