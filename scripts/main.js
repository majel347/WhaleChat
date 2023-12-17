let newImg= [...document.getElementsByClassName("img")];
console.log(newImg);

 
newImg.forEach(e => e.addEventListener('click',function() {
     
    if(e.classList.contains('imgZoom')) 
    { 
       e.classList.remove("imgZoom"); 
    } 
    else { 
        e.classList.add("imgZoom"); 
    }  
   


    if (e.style.zIndex < 10) 
    { 
        e.style.zIndex = 10;  
    } 
    else { 
       e.style.zIndex = 1; 
    }       
})); 
 
 