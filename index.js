const dropdown = ()=>{
  document.querySelector(".jcdropdown").classList.toggle("show");
  document.querySelector("button").classList.toggle("btnred");

}

window.onclick=function(event){
  if(!event.target.matches(".justc")){
    const dropdowns = document.querySelectorAll(".jcdropdown");
    for(let i = 0; i<dropdowns.length;i++){
      if(dropdowns[i].classList.contains("show")){
        dropdowns[i].classList.remove("show");
      }
    }

  }
}

const addClass = (classtoadd)=>{
  document.querySelector(".parent").classList.toggle(`${classtoadd}`);
}