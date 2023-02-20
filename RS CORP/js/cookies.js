$(document).ready(function(){
  $('.accept').click(function () {
    sessionStorage.setItem('showBanner', false)
    $('#cookiessection').fadeOut();
  })
  
  if(sessionStorage.getItem("showBanner") === "false"){
    $("#cookiessection").css("display","none")
  }else{
    $('#cookiessection').delay(2000).fadeIn();
    sessionStorage.setItem('showBanner', true)
  }
})