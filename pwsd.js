let icon=document.getElementById("icon");
let pass=document.getElementById("pass")

icon.onclick=function (){
    if(pass.type === "password"){
        pass.type="text"
        icon.className="fa-solid fa-eye"
    }else{
        pass.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}