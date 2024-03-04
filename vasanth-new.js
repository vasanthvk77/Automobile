var navbutton= document.querySelector(".navbutton")
  var overlayy= document.querySelector(".overlay")
  var popupformcoll= document.querySelector(".popupformcol")
  var logincancel=document.querySelector(".logincancel")
  var sample=document.querySelector(".sample")

  
  navbutton.addEventListener("click",function()
  {
    overlayy.style.visibility="visible"
    popupformcoll.style.visibility="visible"
    sample.style.visibility="visible"

    
  })
  logincancel.addEventListener("click",function(){
    overlayy.style.visibility="hidden"
    popupformcoll.style.visibility="hidden"
    sample.style.visibility="hidden"

  })
