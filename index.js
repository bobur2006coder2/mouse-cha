let btn=document.querySelectorAll("button")

document.addEventListener('mouseover',(e)=>{
   

    btn[0].innerHTML=e.x
    btn[1].innerHTML=e.y

})