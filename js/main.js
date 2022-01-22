// Creat Count Down //
var seconds = 10 ;         // Number Of seconds
var countDiv = document.getElementById('CountDown');
var secondPass;

var countDown = setInterval(function(){
    "use strict";
    secondPass();

} , 1000);

function secondPass(){
    "use strict";
   countDiv.innerHTML = seconds ;
   if(seconds > 0){
       seconds = seconds -1 ; // Decrease one second every 1000 millsecond
   } ;


};
// start jquery library //
           $(".link-five").hide();
            $(".link-one").delay(11000).fadeOut(1000);
            $(".link-five").delay(12000).fadeIn();


$(document).ready(function(){

    $('.open').click (function(){
        $("sidebar").css("left" , "0");
       

    });


    $('.toggle').click(function(){
        $("sidebar").css("left" , "-365px");

    });
     

});
       
         
    
     

      
    


