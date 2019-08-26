
	
/** code by webdevtrick ( https://webdevtrick.com ) **/
  $("#newcolor").on("click",function(){
  var a = randomColor();
var c = randomColor();
 $("#color").css("background-color",a);
 $("#colorA").html(a).css("color",a);
 
 $("#newcolor").css("background-color",c); 
  
});