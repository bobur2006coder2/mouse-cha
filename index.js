let btn=document.querySelectorAll("button")

window.addEventListener('mousemove',(e)=>{
   

    btn[0].innerHTML=e.x
    btn[1].innerHTML=e.y

})