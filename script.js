


$(document).ready(function(){
  

//  $('.content').on('click', function(){

        
//  window.open("https://www.google.com", "_blank")
//  });

// $('.content p:last-child').on('click', function(){
//     window.open("https://www.facebook.com","_self");
// })


// $('li:first').css("background-color" , "yellow")

// $("div:has(p)").addClass('test');






$("div p").on("click", function(){
    console.log(this);
    // $( "div p" ).removeClass( "test" );
    $(this).addClass('test');
    
})

})



